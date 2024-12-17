import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const PoloWithTipping = () => {
    return (
        <div className="hidden lg:block">
        <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">

            {/* Image */}
            <div className="w-[295px] h-[298px] top-[1991px] left-[730px] rounded-[20px] bg-newArravialbg overflow-hidden">
                <Image src={"/productDetail/tipping.png"} alt="Polo with tipping" width={296} height={444} layout="responsive" className="w-full h-full  top:[-73px] object-contain"></Image>
            </div>

            <div className="w-[240px] h-[27px] top-[2305px] left-[730px] ">
                <h1 className="font-figtree font-bold text-xl leading-[27px]">Polo with Tipping Details</h1>
            </div>


            {/* star & price */}
            <div className="w-[150px] h-[19px] top-[2340px] left-[730px] gap-[13px] flex justify-between items-center">
                <div className="w-[104px] h-[18.49px] gap-[5.31px] flex justify-start items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarHalf className="text-starColor w-[18.49px] h-[18.49px]" />
                </div>
                <div className="w-[33px] h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-sm lg:leading-[18.9px]">4.5<span>/</span>5</h1>
                </div>
            </div>

            {/* price */}
            <div className="w-[56px] h-8 top-[2367px] left-[730px]">
                <h1 className="font-figtree font-bold text-2xl leading-[32.4px]">$180</h1>
            </div>
        </div>
        </div>
    )
}

export default PoloWithTipping
