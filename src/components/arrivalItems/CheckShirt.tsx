import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const CheckShirt = () => {
  return (
    <div className="hidden md:block">
         {/* Check shirt */}
         <div className="w-[198px] h-[200.01px] top-[1217px] left-4 lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[730px] bg-newArravialbg rounded-[20px]">
                <Image src={"/arrival/checkshirt.png"} alt="Check Shirt" width={296} height={444} className="top-[-73px] object-contain rounded-[20px]"></Image>
            </div>

            <div className="w-[180px] h-[22px] top-[1427.01px] ml-4 lg:w-[160px] lg:h-[27px] lg:top-[1418px] lg:left-[730px]">
                <h1 className="font-figtree font-bold text-base lg:text-xl leading-[27px]">C<span className="lowercase">HECKERED</span><span className="capitalize"> shirt</span></h1>
            </div>

            {/* star & price */}
            <div className="w-[127px] h-4 top-[1453.01px] ml-4 gap-[11px] lg:w-[150px] lg:h-[19px] lg:top-[1453px] lg:left-[730px] lg:gap-[13px] flex justify-center items-center">
                <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[104px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarHalf className="text-starColor w-[18.49px] h-[18.49px]" />
                </div>
                <div className="w-[33px] h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">4.5/<span className="opacity-60">5</span></h1>
                </div>
            </div>
            {/* price */}
            <div className="w-[46px] h-[27px] top-[1473px] ml-4 lg:w-[56px] lg:h-8 lg:top-[1480px] lg:left-[730px]">
             <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[32.4px]">$120</h1>
            </div>
      
    </div>
  )
}

export default CheckShirt
