

import { IoClose, IoCloseCircle } from "react-icons/io5"
import { CreateCategoryProps } from "../../../interfaces/interfaces"
import { BiSolidCategoryAlt } from "react-icons/bi"
import { useState } from "react"
import ColorPanel from "./ColorPanel"
import { IoMdAddCircleOutline } from "react-icons/io"


const CreateCategoty = (props: CreateCategoryProps) => {

    const [selectedFlagColor, setSelectedFlagColor] = useState<number>(0)

    const closeCreateEvent = () => {
        props.setIsShowCatCreate(false)
    }

    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50
                            flex justify-center items-center">
                <div className="relative w-[450px] flex justify-center items-center flex-col p-4 bg-white rounded-[10px]">

                    <div onClick={closeCreateEvent} className="bg-white absolute top-[-10px] right-[-50px] w-[40px] h-[40px] flex justify-center items-center
                                    rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
                        <BiSolidCategoryAlt className="w-[20px] h-[20px] mr-3" />
                        Create a new category
                    </h1>

                    <hr className="w-full border-2 border-[#0C35BC] mt-2" />

                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Category Name</p>
                        <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Category Name" />
                    </section>

                    <ColorPanel selectedFlagColor={selectedFlagColor} setSelectedFlagColor={setSelectedFlagColor} />

                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Contender Description Variables</p>

                        <button className="bg-[#0C35BC] flex justify-center items-center text-white px-5 py-1 rounded-[10px] border-2 border-[#0C35BC] 
                            text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[#0C35BC] transition-all duration-200">
                            <IoMdAddCircleOutline className="w-[20px] h-[20px] mr-2" />
                            Add Variable
                        </button>

                        <div className="w-full flex items-start flex-wrap space-x-2 space-y-2 p-2 my-2 border-4 border-[#0C35BC] rounded-[10px]">
                            <p className="bg-[#0C35BC] w-fit py-1 px-2 flex items-center font-poppins text-[12px] text-white rounded-[10px]">
                                <span className="font-bold mr-1">{'[R]'}</span>
                                <span className="font-medium">age (number)</span>
                                <IoCloseCircle className="w-[18px] h-[18px] ml-1" />
                            </p>
                           
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default CreateCategoty