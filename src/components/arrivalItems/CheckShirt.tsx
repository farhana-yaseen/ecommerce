import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const CheckShirt = () => {
  return (
    <div className="hidden lg:block">
         {/* Check shirt */}
         <div className="w-[295px] h-[298px] top-[1104px] left-[730px] bg-newArravialbg rounded-[20px]">
                <Image src={"/arrival/checkshirt.png"} alt="Check Shirt" width={296} height={444} className="top-[-73px] object-contain rounded-[20px]"></Image>
            </div>

            <div className="w-[160px] h-[27px] top-[1418px] left-[730px]">
                <h1 className="font-figtree font-bold text-xl leading-[27px]">C<span className="lowercase">HECKERED</span><span className="capitalize"> shirt</span></h1>
            </div>

            {/* star & price */}
            <div className="w-[150px] h-[19px] top-[1453px] left-[730px] gap-[13px] flex justify-center items-center">
                <div className="w-[104px] h-[18.49px] gap-[5.31px] flex justify-center items-center">
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
            <div className="w-[56px] h-8 top-[1480px] left-[730px]">
             <h1 className="font-figtree font-bold text-2xl leading-[32.4px]">$120</h1>
            </div>
      
    </div>
  )
}

export default CheckShirt
