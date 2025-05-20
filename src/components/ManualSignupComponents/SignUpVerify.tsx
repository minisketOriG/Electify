

import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6';

import { SignUpVerifyProps } from '../../interfaces/interfaces';


const SignUpVerify = (props: SignUpVerifyProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
  
  
    function handleSignUp() {
      setIsLoading(true);
      setIsDisabled(true);
    
      setTimeout(() => {
        setIsLoading(false);
        setIsDisabled(false);
        props.setIsVerify(false);
        props.setIsVerifyConfirmed(true);
        props.setIsVerifySuccess(false);
      }, 3000);
    }


  return (
     <>
          <div className="flex justify-center items-center flex-row p-4 w-[420px] h-full bg-gradient-to-r from-[#040405] to-[#5D5959] rounded-lg shadow-[0px_0px_10px_#0C35BC]">
                  <section className="bg-white flex justify-center items-center flex-col w-full h-full rounded-md">
                    <p className="text-black text-xl font-poppins font-semibold">Verification Link Sent</p>

                    <img className="w-[80px] h-[100px] py-5 my-5 animate-[pulse_2s_linear_infinite]" src="/src/assets/images/linkImg.png" alt="linkLogo"/>
                     
                     <p className="w-[90%] text-center text-black text-[12px] font-poppins font-regular">
                           Please check your email to confirm verification by clicking the
                          link sent to your inbox then click the button below
                      </p>

                     <button className="flex justify-center items-center w-[70%] h-[40px] bg-[#0C35BC] mt-10 text-white text-[12px] font-poppins font-semibold cursor-pointer rounded-md border-2 border-[#0C35BC]
                          disabled:opacity-80 disabled:pointer-events-none hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-300"
                          onClick={handleSignUp} disabled={isDisabled}>
                           {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin"/>}
                           Confirm and Proceed
                     </button>
                  </section>
              </div>
     </>
  )
}

export default SignUpVerify