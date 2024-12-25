import { IoMdClose,} from "react-icons/io"


const TopHeader = () => {
  return (
    
    <div className="w-[390px] h-[34px] md:w-full lg:w-full xl:w-[1440px] xl:h-[38px] bg-black">
            <div className="flex justify-center lg:justify-between items-center gap-[10px]">

            {/* For Text */}
            <div className='w-[301px] h-4 lg:ml-96 lg:w-[351px] lg:h-[19px] mt-[9px] xl:ml-[544px]'>
                <h1 className='font-figtree font-normal text-xs lg:text-sm leading-[16.2px] xl:leading-[18.9px] text-white'>Sign up and get 20% off to your first order. <span className='underline'>Sign Up Now</span></h1>
        </div >

        {/* cross sign */}
            <div className='hidden lg:block w-5 h-5 mt-[9px] xl:left-[1320px] text-white'>
            <IoMdClose  className="w-[13.13px] h-[13.13px] mt-[3.43] ml-[3.44] text-white"/>

        </div >
            </div>
       
    </div>
  )
}

export default TopHeader
