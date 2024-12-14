
import Image from "next/image"

const SelectColor = () => {
    return (
        <div className="w-[353px] h-[65px] top-[947px] left-4 lg:w-[px] lg:h-[px] lg:top-[px] lg:left-[px] flex flex-col gap-4">

            <div className="w-[120px] h-2.5 ml-4 lg:w-[93px] lg:h-[11px] lg:top-[461px] lg:left-[750px] opacity-60   ">
            <h1 className="font-figtree font-normal text-[14px] lg:text-sm leading-[18.9px] lg:leading-[21.6px]">Select Colors</h1>
            </div>

            {/* Colors */}
            <div className="w-[142px] h-[39.14px] top-[12.3px] ml-4 lg:w-[143px] gap-[12.3px] lg:h-[37px] lg:top-[488px] lg:left-[750px] lg:gap-4 flex justify-center items-center">

                {/* Circle One with correct sign */}
                <div className="w-[39.14px] h-[39.14px] bg-[#4F4631] lg:w-[37px] lg:h-[37px] rounded-full flex justify-center items-center">
                    {/* correction sign */}
                    <div className="w-[16.92px] h-[16.92px] top-[10.58px] lg:w-4 lg:h-4 lg:top-2.5 lg:left-2.5">
                        <Image src={"/correct.png"} alt="correction" width={13} height={9.5} className="w-[13.75px] h-[10.05px] top-[3.97px] left-[1.85px] lg:w-[13px] lg:h-[9.5px] lg:top-[3.75px] lg:left-[1.75px]"></Image>
                    </div>
                </div>


                {/* Circle two */}
                <div className="w-[39.14px] h-[39.14px] bg-[#314F4A] lg:w-[37px] lg:h-[37px] rounded-full"></div>

                {/* circle three */}
                <div className="w-[39.14px] h-[39.14px] bg-[#31344F] lg:w-[37px] lg:h-[37px] rounded-full"></div>
                   
            </div>

            {/* line */}
                <div className="w-[358px] mt-1 ml-4 border-[1px] border-black opacity-10 lg:w-[590px] lg:top-[549px] lg:left-[750px]"></div>
      




    </div >
  )
}

export default SelectColor
