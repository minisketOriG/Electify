

import { FaRegEye } from 'react-icons/fa6'
import { IoSettingsSharp, IoShareSocialSharp } from 'react-icons/io5'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router-dom'

const CategoryCard = () => {
    return (
        <>
            <div className="w-5/6 flex justify-around items-center flex-row px-2 py-5 border-2 border-[#0C35BC] rounded-[10px] shadow-[0px_0px_5px_#0C35BC]">
                <div className="flex justify-center items-center">
                    <BiSolidCategoryAlt className="w-[40px] h-[40px]" />
                </div>

                <div className="w-[50%] flex flex-col">
                    <span className="font-poppins font-bold my-[5px]">Category Name</span>
                    <span className="font-poppins font-semibold my-[5px]">Category ID</span>
                </div>

                <div className="flex justify-center items-center flex-row space-x-2">
                    <button type="button" className="w-[35px] h-[35px] bg-[#0C35BC] flex justify-center items-center text-white text-xl p-1 rounded-[10px] border-2 border-[#0C35BC] 
                          font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                        <IoShareSocialSharp className="w-[30px] h-[30px]" />
                    </button>

                    <button type="button" className="w-[35px] h-[35px] bg-[#0C35BC] flex justify-center items-center text-white text-xl p-1 rounded-[10px] border-2 border-[#0C35BC] 
                        font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                        <IoSettingsSharp className="w-[30px] h-[30px]" />
                    </button>

                    <Link to="/clientpage/eventcontenders/33242424">
                        <button type="button" className=" bg-[#0C35BC] flex justify-center items-center text-white text-xl px-4 py-2 rounded-[5px] border-2 border-[#0C35BC] 
                          text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[12px] hover:text-[#0C35BC] transition-all duration-200">
                            <FaRegEye className="w-[20px] h-[20px] mr-2" />
                            Edit Category
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CategoryCard