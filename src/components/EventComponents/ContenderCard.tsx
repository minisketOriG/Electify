
import { MdModeEdit } from "react-icons/md";

const ContenderCard = (props: { name: string; age: number; role: string; votes: number; percentage: string; image: string }) => {
  return (
    <>
        <div className="w-[280px] flex justify-center items-center flex-col m-[1%] overflow-hidden rounded-[10px] shadow-[0px_0px_10px_#0C35BC]
            ring-4 ring-gray-600/50">
            <section className="w-full">
                <img className="w-full h-[200px]" src={props.image} alt=""/>
            </section>

            <section className="w-full flex flex-col p-2">
                <span className="font-poppins font-bold text-[14px]">{props.name}</span>
                <span className="font-poppins font-semibold text-[12px]">{props.age} years</span>
                <span className="font-poppins font-semibold text-[12px]">{props.role}</span>
            </section>

            <section className="w-full flex justify-between items-center py-1 px-2 font-poppins font-bold text-[14px]">
                <span>{props.votes} votes</span>
                <span>{props.percentage}</span>
            </section>

            <section className="w-full flex justify-center items-center">
                <button type="button"  className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-2 my-4 rounded-[10px] border-2 border-[#0C35BC] 
                 text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[12px] hover:text-[#0C35BC] transition-all duration-200">
                    <MdModeEdit className="w-[20px] h-[20px] mr-2"/>
                    Edit Contender Details
                </button>
            </section>
        </div>
    </>
  )
}

export default ContenderCard