import Image from "next/image"
import { BsStarFill } from "react-icons/bs"


const Polo = () => {
    return (
        <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">

            {/* Image */}
            <div className="w-[198px] h-[200px] top-[2239px] left-4 rounded-[13.42px] bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[1991px] lg:left-[415px] lg:rounded-[20px] overflow-hidden">
                <Image src={"/productDetail/polo.png"} alt="Polo Trims" width={296} height={441} layout="responsive" className="w-[199px] h-[298px] lg:w-full lg:h-full top:[-73px] lg:top-[-71px] left-[-1px] object-contain"></Image>
            </div>

            <div className="w-[190px] h-[22px] top-[2449.01px] left-4 lg:w-[240px] lg:h-[27px] lg:top-[2305px] lg:left-[415px]">
                <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">Polo with Contrast Trims</h1>
            </div>


            {/* star & price */}
            <div className="w-[117px] h-4 top-[2475.01px] left-4 gap-[11px] lg:w-[137.9px] lg:h-[19px] lg:top-[2340px] lg:left-[100px] lg:gap-[13px] flex justify-between items-center">
                <div className="w-[75.2px] h-[15.47px] gap-[4.44px] lg:w-[90px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-start items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    
                </div>
                <div className="w-[28px] h-4 lg:w-[35px] lg:h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">4<span>.0/</span>5</h1>
                </div>
            </div>


            
            {/* price */}
            <div className="w-[144px] h-[27px] top-[2495px] left-4 gap-[5px] lg:w-[200px] lg:h-8 lg:top-[1480px] lg:left-[415px] lg:gap-[10px] flex justify-center items-center">

                {/* $212 */}
            <div className="w-[44px] h-[27px] lg:w-[53px] lg:h-8 lg:top-[2367px] lg:left-[100px]">
                <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$212</h1>
            </div>

                {/* $242 */}
                <div className="w-[48px] h-[27px] lg:w-[58px] lg:h-8 lg:top-[2367px] lg:left-[163px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px] line-through text-black opacity-40">$242</h1>
                </div>

                {/* -20% */}
                <div className="w-[42px] h-5 rounded-[62px] px-3.5 py-1.5 lg:w-[58px] lg:h-7 lg:top-[2367px] lg:left-[231px] gap-3 bg-percentage bg-opacity-10">
                    <h1 className="w-[26px] h-3.5 lg:w-[31px] lg:h-4 font-figtree font-medium text-[10px] lg:text-xs leading-[13.5px] lg:leading-[16.2px] text-percentage ">-20%</h1>
                </div>
            </div>


            
        </div>
    )
}

export default Polo
