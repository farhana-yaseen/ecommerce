
import Alex from "./Alex"
import James from "./James"
import Sarah from "./Sarah"
import Image from "next/image"


const HappyCustomers = () => {
  return (
    <div className="w-[390px] md:w-[768px] lg:w-[1024px] xl:w-[1440px]">

            <div className="flex justify-between items-center">

        <div className="w-[286px] h-[72px] top-[3148px] ml-4 lg:w-[654px] lg:h-[58px] lg:top-[3363px] lg:left-[100px]">
            <h1 className="text-fjalla font-figtree font-bold text-[32px] lg:text-5xl leading-9 lg:leading-[57.6px]">OUR HAPPY CUSTOMERS</h1>
            </div>

            <div className="flex justify-center items-center"> 
                {/* Arrow */}
                <div className="w-6 h-6 top-[3220px] left-[334px] lg:top-[3421px] lg:left-[1300px]">
                     <Image src={"/left.png"} alt="Right Arrow" width={15.76} height={18.75} className="w-[15.76px] h-[18.75px] top-[19.88px] left-[21.38px] object-contain"></Image>
                    {/* Left Arrow */}
                </div>
                <div className="w-6 h-6 top-[3220px] left-[350px]">
                     <Image src={"/left.png"} alt="Right Arrow" width={15.76} height={18.75} className="w-[15.76px] h-[18.75px] top-[19.88px] left-[2.63px] object-contain rotate-180"></Image>
                    {/* Right Arrow */}
                </div>
            </div>

        </div>

        <div className="flex justify-center items-center gap-2 lg:gap-10 m-auto py-10">
            <Sarah/>
            <Alex/>
            <James/>
        </div>


        </div>
  )
}

export default HappyCustomers
