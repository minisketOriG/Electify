

import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"

//stateHandlers
import { setShowCreate } from "@/store/DataSlides/ContenderPageStatesSlide"
import { BsPersonFillAdd } from "react-icons/bs"
import { IoMdAddCircle } from 'react-icons/io'
import images from "@/utils/AssetsUtils"
import { useRef, useState } from "react"
import { FaSpinner } from "react-icons/fa6"
import { PiCursorClickFill } from "react-icons/pi"
import { reqtype, vartype } from "@/interfaces/enums"


const AddContender = () => {

    const dispatch = useDispatch()


    const [isLoadingPic, setIsLoadingPic] = useState(false)
    const imagePickerRef = useRef<HTMLInputElement | null>(null)
    const imageHolderRef = useRef<HTMLImageElement | null>(null)

    const handleImagePicker = () => {
        imagePickerRef.current?.click()
    }

    const handleImageChange = () => {
        const file = imagePickerRef.current?.files?.[0];
        setIsLoadingPic(true)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imgElement = imageHolderRef.current;
                if (imgElement) {
                    imgElement.src = reader.result as string;
                    setIsLoadingPic(false)
                }
            };
            reader.readAsDataURL(file);
        }
    }


    const contenderVariables = [
        { name: "name", type: vartype.text, requirement: reqtype.default },
        { name: "age", type: vartype.number, requirement: reqtype.required },
        { name: "profession", type: vartype.text, requirement: reqtype.required },
        { name: "email", type: vartype.email, requirement: reqtype.optional },
        { name: "location", type: vartype.text, requirement: reqtype.optional },
    ]


    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50
                            flex justify-center items-center">
                <div className="relative w-[800px] max-h-[90%] overflow-auto flex  items-center flex-col p-4 bg-white rounded-[10px]">

                    <div onClick={() => dispatch(setShowCreate(false))} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                                    rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
                        <BsPersonFillAdd className="w-[20px] h-[20px] mr-3" />
                        Create a new contender
                    </h1>

                    <hr className="w-full border-2 border-[#0C35BC] mt-2" />

                    <div className="w-[95%] flex justify-center items-center flex-row space-x-5 my-2">
                        <section className="w-2/5 flex justify-center items-center flex-col ">
                            <h1 className="font-poppins font-bold text-[15px] my-2 mt-4">Contender Image</h1>

                            <section className="w-[250px] h-[280px] relative border-8 border-[#0C35BC] rounded-[10px] overflow-hidden">
                                <img ref={imageHolderRef} className="w-full h-full" src={images.contendImg} alt="contenderImg" />

                                {isLoadingPic &&
                                    <div className="bg-black/50 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
                                        <FaSpinner className="w-[30px] h-[30px] text-[#0C35BC] animate-spin" />
                                    </div>
                                }

                                <input ref={imagePickerRef} onChange={handleImageChange} type="file" name="" hidden />
                            </section>


                            <button onClick={handleImagePicker} className="flex justify-center items-center bg-[#0C35BC] w-[300px] cursor-pointer text-[14px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-2 py-2 mt-3 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200" type="button">
                                <PiCursorClickFill className="w-[20px] h-[20px] mr-2" />
                                Select Contender Image
                            </button>
                        </section>

                        <section className="w-3/5 flex justify-center items-center flex-col">
                            <h1 className="font-poppins font-bold text-[15px] my-2 mt-4">Contender Details</h1>

                            {contenderVariables.map((variable, index) => (
                                <section key={index} className="w-full flex justify-center items-center flex-row space-x-2 mt-2 rounded-[10px] border-4 border-[#0C35BC] p-1">
                                    <p className="bg-[#0C35BC] font-poppins text-[12px] text-white px-2 py-1  rounded-[4px]">
                                        <span className="font-bold">
                                            {variable.requirement === reqtype.default ? "[D]" :
                                                variable.requirement === reqtype.required ? "[R]" : "[O]"
                                            }
                                        </span>
                                        <span className="font-bold">{"·"}</span>
                                        <span className="font-semibold">{variable.name}</span>
                                    </p>
                                    {
                                        variable.type === vartype.text ?
                                            <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] outline-none" type="text" placeholder="type here....." /> :
                                            variable.type === vartype.number ?
                                                <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] outline-none" step={1} min={1} type="number" placeholder="0" /> :
                                                <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] outline-none" type="email" placeholder="johndoe123@gmail.com" />
                                    }
                                </section>
                            ))
                            }

                            <button className="flex justify-center items-center bg-[#0C35BC] w-[300px] cursor-pointer text-[14px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-2 py-2 mt-3 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200" type="button">
                                <IoMdAddCircle className="w-[20px] h-[20px] mr-2" />
                               Add Contender
                            </button>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddContender