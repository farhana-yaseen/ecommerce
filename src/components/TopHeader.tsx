import { IoMdClose,} from "react-icons/io"


const TopHeader = () => {
  return (
    <div className="w-[390px] h-[34px] gap-[10px] lg:w-[1440px] lg:h-[38px] bg-black flex items-center justify-center">

            
            {/* For Text */}
            <div className='w-[301px] h-4 lg:w-[351px] lg:h-[19px] top-[9px] lg:left-[544px] m-auto '>
                <h1 className='font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px] text-white'>Sign up and get 20% off to your first order. <span className='underline'>Sign Up Now</span></h1>
        </div >

        {/* cross sign */}
            <div className='hidden lg:block w-[301px] h-4 lg:w-5 lg:h-5 mt-[9px] left-[1320px] text-white'>
            <IoMdClose  className="lg:w-[13.13px] lg:h-[13.13px] lg:mt-[3.43] lg:ml-[3.44] text-white"/>

        </div >
       
    </div>
  )
}

export default TopHeader
