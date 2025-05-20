

import { useState } from 'react'
import { FaBookmark, FaSpinner } from 'react-icons/fa6'
import { CreateEventProps } from '../../interfaces/interfaces'
import { IoClose } from "react-icons/io5";
import ColorPanel from './ModalComponents/ColorPanel';

const CreateEvent = (props: CreateEventProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedFlagColor, setSelectedFlagColor] = useState<number>(0)
    
      const handleCreateEvent = () => {
        setIsLoading(true)
    
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
      }

      const closeCreateEvent = () => {
         props.setIsCreateShow(false)
      }

    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50
                flex justify-center items-center">
                <div className="relative w-[450px] flex justify-center items-center flex-col p-4 bg-white rounded-[10px]">
                    
                    <div onClick={closeCreateEvent} className="bg-white absolute top-[-10px] right-[-50px] w-[40px] h-[40px] flex justify-center items-center
                        rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]"/>
                    </div>
                    
                    <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
                        <FaBookmark className="w-[20px] h-[20px] mr-3" />
                        Create a new event
                    </h1>

                    <hr className="w-full border-2 border-[#0C35BC] mt-2" />

                    <section className="w-[95%] flex justify-center items-center flex-col mt-4">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Name</p>
                        <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Event Name" />
                    </section>
                  

                    <ColorPanel selectedFlagColor={selectedFlagColor} setSelectedFlagColor={setSelectedFlagColor} />


                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Type</p>

                        <select name="" id="" className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2">
                            <option value="default">Select an event type</option>
                            <option value="cost">Cost-based Voting</option>
                            <option value="nocost">Free Voting</option>
                        </select>
                    </section>

                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Timing</p>

                        <select name="" id="" className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2">
                            <option value="default">Select an event timing</option>
                            <option value="cost">Scheduled Event</option>
                            <option value="nocost">Non-Scheduled Event</option>
                        </select>
                    </section>

                    <section className="w-[95%] flex justify-center items-center flex-col mt-8 mb-2">
                        <button onClick={handleCreateEvent} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                                          text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[12px] hover:text-[#0C35BC] transition-all duration-200">
                           {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin"/>}
                            Create a new event
                        </button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CreateEvent