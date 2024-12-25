
import Image from "next/image"

const SelectColor = () => {
    return (
        <div className="w-[353px] h-[65px] top-[947px] left-4 xl:w-[px] xl:h-[px] xl:top-[px] xl:left-[px] flex flex-col gap-4">

            <div className="w-[120px] h-2.5 ml-4 xl:w-[93px] xl:h-[11px] xl:top-[461px] xl:left-[750px] opacity-60   ">
            <h1 className="font-figtree font-normal text-[14px] xl:text-sm leading-[18.9px] xl:leading-[21.6px]">Select Colors</h1>
            </div>

            {/* Colors */}
            <div className="w-[142px] h-[39.14px] top-[12.3px] ml-4 xl:w-[143px] gap-[12.3px] xl:h-[37px] xl:top-[488px] xl:left-[750px] xl:gap-4 flex justify-center items-center">

                {/* Circle One with correct sign */}
                <div className="w-[39.14px] h-[39.14px] bg-[#4F4631] xl:w-[37px] xl:h-[37px] rounded-full flex justify-center items-center">
                    {/* correction sign */}
                    <div className="w-[16.92px] h-[16.92px] top-[10.58px] xl:w-4 xl:h-4 xl:top-2.5 xl:left-2.5">
                        <Image src={"/correct.png"} alt="correction" width={13} height={9.5} className="w-[13.75px] h-[10.05px] top-[3.97px] left-[1.85px] xl:w-[13px] xl:h-[9.5px] xl:top-[3.75px] xl:left-[1.75px]"></Image>
                    </div>
                </div>


                {/* Circle two */}
                <div className="w-[39.14px] h-[39.14px] bg-[#314F4A] xl:w-[37px] xl:h-[37px] rounded-full"></div>

                {/* circle three */}
                <div className="w-[39.14px] h-[39.14px] bg-[#31344F] xl:w-[37px] xl:h-[37px] rounded-full"></div>
                   
            </div>

            {/* line */}
                <div className="w-[358px] mt-1 ml-4 border-[1px] border-black opacity-10 xl:w-[590px] xl:top-[549px] xl:left-[750px]"></div>
      




    </div >
  )
}

export default SelectColor
