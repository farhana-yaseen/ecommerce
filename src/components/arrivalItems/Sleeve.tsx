import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const CheckShirt = () => {
  return (
    <div className="hidden lg:block">
         {/* Striped Shirt */}
         <div className="w-[295px] h-[298px] top-[1104px] left-[1045px] bg-newArravialbg rounded-[20px]">
                <Image src={"/arrival/sleeve.png"} alt="striped T-shirt" width={296} height={444} className="top-[-73px] object-contain rounded-[20px]"></Image>
            </div>

            <div className="w-[210px] h-[27px] top-[1418px] left-[1045px]">
                <h1 className="font-figtree font-bold text-xl leading-[27px] capitalize">S<span className="lowercase">LEEVE</span><span className="capaitalize"> striped t-shirt</span></h1>
            </div>

            {/* star & price */}
            <div className="w-[150px] h-[19px] top-[1453px] left-[1045px] gap-[13px] flex justify-center items-center">
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
            <div className="w-[189px] h-8 top-[1480px] left-[1045px] gap-[10px] flex justify-center items-center">
               
                {/* $130 */}
                <div className="w-[55px] h-8">
             <h1 className="font-figtree font-bold text-2xl leading-[32.4px]">$130</h1>
                </div>
               
                {/* $160 */}
                <div className="w-14 h-8">
             <h1 className="font-figtree font-bold text-2xl leading-[32.4px] line-through text-black opacity-40">$160</h1>
                </div>

            {/* -20% */}
            <div className="w-[58px] h-7 rounded-[62px] px-3.5 py-1.5 bg-percentage bg-opacity-10">
             <h1 className="w-[32px] h-4 font-figtree font-medium text-sm leading-[16.2px] text-percentage">-20%</h1>
                </div>
            </div>
        

      
    </div>
  )
}

export default CheckShirt
