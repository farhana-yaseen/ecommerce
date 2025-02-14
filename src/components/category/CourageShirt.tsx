import Image from "next/image"
import { BsStarFill } from "react-icons/bs"


const CourageShirt = () => {
    return (
         <div className="hidden lg:block">
         <div className="flex flex-col justify-center gap-1 xl:gap-2 ml-4">
        
                    {/* Image */}
                    <div className="w-[172px] h-[174px] top-[491px] left-[202px] rounded-[13.42px] bg-newArravialbg xl:w-[295px] xl:h-[298px] xl:top-[707px] xl:left-[416px] xl:rounded-[20px] overflow-hidden">
                        <Image src={"/selling/courage.png"} alt="courage shirt" width={268} height={402} layout="responsive" className="w-[172px] h-[213px] xl:w-full xl:h-full top:[-19px] left-[15px] xl:top-[-51px] object-contain"></Image>
                    </div>
        
                    <div className="w-[120px] h-[22px] top-[675px] left-[202px] lg:w-[200px] xl:w-[240px] xl:h-[27px] xl:top-[1021px] xl:left-[731px]">
                        <h1 className="font-figtree font-bold text-base xl:text-xl leading-[21.6px] xl:leading-[27px] capitalize">courage graphic t-shirt</h1>
                    </div>
        
        
                    {/* star & price */}
                    <div className="w-[127px] h-4 top-[701px] left-[202px] gap-[11px] xl:w-[150px] xl:h-[19px] xl:top-[1056px] xl:left-[416px] xl:gap-[13px] flex justify-between items-center">
                        <div className="w-[87px] h-[15.47px] gap-[4.44px] xl:w-[104px] xl:h-[18.49px] xl:gap-[5.31px] flex justify-start items-center">
                            {/* stars */}
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            
                        </div>
                        <div className="w-7 h-4 xl:w-[33px] xl:h-[19px]">
                            {/* rate */}
                            <h1 className="font-figtree font-normal text-xs xl:text-sm leading-[16.2px] xl:leading-[18.9px]">4.<span>0/</span><span>5</span></h1>
                        </div>
                    </div>

        
                        {/* $180 */}
                    <div className="w-[51px] h-[27px] xl:w-[61px] xl:h-[32px]">
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$145</h1>
                    </div>   
        
                </div>
                </div>
    )
}

export default CourageShirt
