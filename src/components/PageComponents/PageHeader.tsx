

import { BsPersonFillAdd } from 'react-icons/bs'
import { IoLogInSharp, IoLogOut } from 'react-icons/io5'
import HeaderButton from '../ButtonComponents/HeaderButton'
import { PageHeaderProps } from '../../interfaces/interfaces'
import React from 'react'


const PageHeader = (props: PageHeaderProps) => {

  const headerButtons = (): React.ReactNode => {
    if (props.type == "landingPage") {
      return (
        <>
          <HeaderButton text="Sign in" icon={<IoLogInSharp className="w-[20px] h-[20px]" />} link="/auth/signin" />
          <HeaderButton text="Sign up" icon={<BsPersonFillAdd className="w-[20px] h-[20px]" />} link="/auth/signup" />
        </>
      )
    } else if (props.type == "clientPage") {
      return (
        <>
          <span className="font-poppins text-[12px] text-white font-semibold">WELCOME, LINDA ADUBEA</span>
          <img className="w-[30px] h-[30px]" src="/src/assets/images/avatarDemo.png" alt="profilePic" />
          <HeaderButton text="Log out" icon={<IoLogOut className="w-[20px] h-[20px]" />} link="/auth/signup" action={true} />
        </>
      )
    }
  }


  return (
    <>
      <header className="bg-black sticky top-0 z-30 w-full h-auto py-4 flex items-center justify-between">
        <div className="flex items-center mx-5 space-x-5">
          <img className="w-[40px] h-[40px]" src="/src/assets/images/electifyLogo.png" alt="electifyLogo" />
          <h1 className="font-bagel text-2xl text-white">Electify</h1>
        </div>
        <div className="flex items-center mx-5 space-x-5">
          <nav>
            <ul className="flex items-center space-x-4">
              {headerButtons()}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default PageHeader