import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Faded = () => {
  return (
    <div className="hidden lg:block">
       {/* Faded Skinny */}
       <div className="w-[295px] h-[298px] top-[1841px] left-[1045px] bg-newArravialbg rounded-[20px]">
                <Image src={"/selling/faded.png"} alt="Faded Skinny" width={252} height={378} className="lg:w-full lg:h-full top-[-40px] left-[22px] object-contain"></Image>
            </div>

            <div className="w-[200px] h-[27px] top-[2155px] left-[1045px]">
                <h1 className="font-figtree font-bold text-xl leading-[27px]">F<span className="lowercase">ADED</span><span className="capitalize"> skinny jeans</span></h1>
            </div>

            {/* star & price */}
            <div className="w-[150px] h-[19px] top-[2190px] left-[1045px] gap-[13px] flex justify-center items-center">
                <div className="w-[140px] h-[18.49px] gap-[5.31px] flex justify-center items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarHalf className="text-starColor w-[18.49px] h-[18.49px]" />
                </div>
                <div className="w-[33px] h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-sm leading-[18.9px]">4.5/<span className="font-figtree font-normal text-sm leading-[18.9px]">5</span></h1>
                </div>
            </div>
            {/* price */}
            <div className="w-[55px] h-8 top-[2217px] left-[1045px] gap-2.5">
             <h1 className="font-figtree font-bold text-2xl leading-[32.4px]">$210</h1>
            </div>
    </div>
  )
}
export default Faded
