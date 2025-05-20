
import NavigationPanel from '../../components/PageComponents/NavigationPanel'
import PageHeader from '../../components/PageComponents/PageHeader'

import { IoMdAddCircle } from "react-icons/io";
import EventCard from '../../components/EventComponents/EventCard';
import CreateEvent from '../../components/Modals/CreateEvent';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import EventSettings from '../../components/Modals/EventSettings';
import EventShareCard from '../../components/Modals/EventShareCard';


const VotingEvent = () => {

  const [isCreateShowLoading, setIsCreateShowLoading] = useState<boolean>(false)
  const [isShowCreate, setIsShowCreate] = useState<boolean>(false)

  const showCreateEvent = () => {
    setIsCreateShowLoading(true)

    setTimeout(() => {
      setIsCreateShowLoading(false)
      setIsShowCreate(true)
    }, 1000)
  }

  const [eventTiming, setEventTiming] = useState<boolean>(false)
  const [isShowSettings, setIsShowSettings] = useState<boolean>(false)
  const [isShowShare, setIsShowShare] = useState<boolean>(false)
  
  


  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <PageHeader type="clientPage" />

        <main className="flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="votingevents" />

            <div className="w-full h-auto p-10">
              <h1 className="text-black font-poppins font-semibold text-[14px]">Voting Events</h1>
              <hr className="my-2" />

              <div className="w-full flex justify-center items-center mt-10">
                <button onClick={showCreateEvent} className="w-[450px] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                   text-[16px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                  { isCreateShowLoading ?
                    <FaSpinner className="w-[20px] h-[20px] mr-5 animate-spin" /> :
                    <IoMdAddCircle className="w-[30px] h-[30px] mr-5" /> 
                  }
                  Create a new event
                </button>
              </div>

              <div className="w-full py-5">
                <h2 className="text-[16px] py-5 font-poppins font-semibold">Opened Events</h2>

                <section className="w-full flex justify-center items-center py-5 space-y-5 flex-col">
                  <EventCard eventType="cost" eventTiming={false} setEventTiming={setEventTiming} setIsShowShare={setIsShowShare} setIsShowSettings={setIsShowSettings} />
                  <EventCard eventType="nocost" eventTiming={true} setEventTiming={setEventTiming} setIsShowShare={setIsShowShare} setIsShowSettings={setIsShowSettings} />
                  <EventCard eventType="cost" eventTiming={false} setEventTiming={setEventTiming} setIsShowShare={setIsShowShare} setIsShowSettings={setIsShowSettings}/>
                </section>

                <h2 className="text-[16px] py-5 font-poppins font-semibold">Closed Events</h2>

                <section className="w-full flex justify-center items-center py-5 space-y-5 flex-col">
                  <EventCard eventType="nocost" eventTiming={true} setEventTiming={setEventTiming} setIsShowShare={setIsShowShare} setIsShowSettings={setIsShowSettings}/>
                  <EventCard eventType="cost" eventTiming={false} setEventTiming={setEventTiming} setIsShowShare={setIsShowShare} setIsShowSettings={setIsShowSettings}/>
                  <EventCard eventType="nocost" eventTiming={true} setEventTiming={setEventTiming} setIsShowShare={setIsShowShare} setIsShowSettings={setIsShowSettings}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/*Modals*/}
      {isShowCreate && <CreateEvent setIsCreateShow={setIsShowCreate} />}
      {isShowSettings && <EventSettings eventTiming={eventTiming}  setIsShowSettings={setIsShowSettings}/>}
      {isShowShare && <EventShareCard setIsShowShare={setIsShowShare} />}
    </>
  )
}

export default VotingEvent