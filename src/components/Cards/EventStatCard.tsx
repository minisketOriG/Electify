

import { EventStatCardProps } from "../../interfaces/interfaces"

const EventStatCard = (props: EventStatCardProps) => {
    return (
        <>
            <div className="flex justify items-center flex-col font-poppins font-semibold w-1/3 p-4 rounded-2xl
                    border-4 border-[#0C35BC]/80">
                <p className="text-[14px]">{props.title}</p>
                <span className="text-[60px] text-[#0C35BC] font-titan font-light">{props.amount}</span>
            </div>
        </>
    )
}

export default EventStatCard