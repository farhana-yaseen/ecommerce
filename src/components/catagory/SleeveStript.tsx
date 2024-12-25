import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const SleeveStript = () => {
    return (
         <div className="flex flex-col justify-center gap-1 xl:gap-2 ml-4">
        
                    {/* Image */}
                    <div className="w-[172px] h-[174px] top-[491px] left-[202px] rounded-[13.42px] bg-newArravialbg xl:w-[295px] xl:h-[298px] xl:top-[707px] xl:left-[416px] xl:rounded-[20px] overflow-hidden">
                        <Image src={"/arrival/sleeve.png"} alt="checkred shirt" width={268} height={402} layout="responsive" className="w-[172px] h-[213px] xl:w-full xl:h-full top:[-19px] left-[15px] xl:top-[-51px] object-contain"></Image>
                    </div>
        
                    <div className="w-[170px] h-[22px] top-[675px] left-[202px] xl:w-[220px] xl:h-[27px] xl:top-[1021px] xl:left-[731px]">
                        <h1 className="font-figtree font-bold text-sm xl:text-xl leading-[21.6px] xl:leading-[27px] capitalize">seleeve striped t-shirt</h1>
                    </div>
        
        
                    {/* star & price */}
                    <div className="w-[127px] h-4 top-[701px] left-[202px] gap-[11px] xl:w-[150px] xl:h-[19px] xl:top-[1056px] xl:left-[416px] xl:gap-[13px] flex justify-between items-center">
                        <div className="w-[87px] h-[15.47px] gap-[4.44px] xl:w-[104px] xl:h-[18.49px] xl:gap-[5.31px] flex justify-start items-center">
                            {/* stars */}
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                        </div>
                        <div className="w-7 h-4 xl:w-[33px] xl:h-[19px]">
                            {/* rate */}
                            <h1 className="font-figtree font-normal text-xs xl:text-sm leading-[16.2px] xl:leading-[18.9px]">4.5<span>/</span><span>5</span></h1>
                        </div>
                    </div>

        
                         {/* price */}
                    <div className="w-[154px] h-[27px] top-[721px] left-[202px] gap-[5px] xl:w-[200px] xl:h-8 xl:top-[1083px] xl:left-[416px] xl:gap-[10px] flex justify-center items-center">
        
        {/* $130 */}
    <div className="w-[51px] h-[27px] xl:w-[61px] xl:h-[32px]">
        <h1 className="font-figtree font-bold text-xl leading-[27px]">$130</h1>
    </div>

        {/* $160 */}
        <div className="w-[51px] h-[27px] xl:w-[55px] xl:h-8">
            <h1 className="font-figtree font-bold text-xl xl:text-2xl leading-[27px] xl:leading-32.4 line-through text-black opacity-40">$160</h1>
        </div>

        {/* -30% */}
        <div className="w-[42px] h-5 rounded-[62px] px-3.5 py-1.5 gap-3 xl:w-[61px] xl:h-7 bg-percentage bg-opacity-10">
            <h1 className="w-[26px] h-3.5 xl:w-[58px] xl:4 font-figtree font-medium text-[10px] xl:text-xs leading-[13.5px] text-percentage ">-30%</h1>
        </div>
    </div>   
        
                </div>
    )
}

export default SleeveStript
