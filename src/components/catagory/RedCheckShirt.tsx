import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const RedCheckShirt = () => {
    return (
         <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">
        
                    {/* Image */}
                    <div className="w-[172px] h-[174px] top-[491px] left-[202px] rounded-[13.42px] bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[707px] lg:left-[416px] lg:rounded-[20px] overflow-hidden">
                        <Image src={"/arrival/checkshirt.png"} alt="checkred shirt" width={268} height={402} layout="responsive" className="w-[172px] h-[213px] lg:w-full lg:h-full top:[-19px] left-[15px] lg:top-[-51px] object-contain"></Image>
                    </div>
        
                    <div className="w-[120px] h-[22px] top-[675px] left-[202px] lg:w-[161px] lg:h-[27px] lg:top-[1021px] lg:left-[731px]">
                        <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">Checkered Shirt</h1>
                    </div>
        
        
                    {/* star & price */}
                    <div className="w-[127px] h-4 top-[701px] left-[202px] gap-[11px] lg:w-[150px] lg:h-[19px] lg:top-[1056px] lg:left-[416px] lg:gap-[13px] flex justify-between items-center">
                        <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[104px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-start items-center">
                            {/* stars */}
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        </div>
                        <div className="w-7 h-4 lg:w-[33px] lg:h-[19px]">
                            {/* rate */}
                            <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">4.5<span>/</span><span>5</span></h1>
                        </div>
                    </div>

        
                        {/* $180 */}
                    <div className="w-[51px] h-[27px] lg:w-[61px] lg:h-[32px]">
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$180</h1>
                    </div>   
        
                </div>
    )
}

export default RedCheckShirt
