

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//icons
import { FaArrowLeft, FaArrowTrendUp, FaSpinner } from 'react-icons/fa6'
import { IoMdAddCircle } from 'react-icons/io'

//associates
import { contenderDetails } from '@/utils/DataUtils'

//components
import NavigationPanel from '../../components/PageComponents/NavigationPanel'
import ContenderCard from '../../components/EventComponents/ContenderCard'
import PageHeader from '../../components/PageComponents/PageHeader'

//statehandlers
import { setShowCreate } from '@/store/DataSlides/ContenderPageStatesSlide'
import AddContender from '@/components/Modals/ContenderModals/AddContender'


const VotingCategoryContenders = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contenderStates = useSelector((state: any) => state.contenderpage.contenderStates)

  const [isCreateConShowLoading, setIsCreateConShowLoading] = useState<boolean>(false)

  const showCreateContender = () => {
    setIsCreateConShowLoading(true)

    setTimeout(() => {
      setIsCreateConShowLoading(false)
      dispatch(setShowCreate(true))
    }, 1000)
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <PageHeader type="clientPage" />

        <main className="flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="votingevents" />

            <div className="w-full h-auto p-10">
              <h1 className="flex items-center text-black font-poppins font-semibold text-[14px]">
                <FaArrowLeft onClick={() => { navigate(-1) }} className="w-[20px] h-[20px] mr-2 cursor-pointer hover:scale-[1.2] transition-all duration-100" />
                Voting Events {">"} Gambisa Awards {">"} Best Male </h1>
              <hr className="my-2" />

              <div className="w-full flex justify-center items-center my-4 space-x-5">
                <button onClick={showCreateContender} className="w-[450px] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 mt-10 rounded-[10px] border-2 border-[#0C35BC] 
                 text-[16px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                  {isCreateConShowLoading ?
                    <FaSpinner className="w-[20px] h-[20px] mr-5 animate-spin" /> :
                    <IoMdAddCircle className="w-[30px] h-[30px] mr-5" />
                  }
                  Add new contender
                </button>
                <button type="button" className="w-[450px] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 mt-10 rounded-[10px] border-2 border-[#0C35BC] 
                 text-[16px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                  <FaArrowTrendUp className="w-[30px] h-[30px] mr-5" />
                  View Category Metrics
                </button>
              </div>

              <div className="w-full">
                <h2 className="text-[16px] py-3 font-poppins font-semibold">Contenders</h2>

                <section className="w-full flex justify-center items-center flex-wrap pb-5">
                  {contenderDetails.map((contender, index) => (
                    <ContenderCard
                      key={index}
                      name={contender.name}
                      age={contender.age}
                      role={contender.occupation}
                      votes={contender.votes}
                      percentage={contender.percentage}
                      image={contender.image}
                    />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {contenderStates.showCreate && <AddContender />}
    </>
  )
}

export default VotingCategoryContenders