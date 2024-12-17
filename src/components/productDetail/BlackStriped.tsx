import Image from "next/image"
import { BsStarFill} from "react-icons/bs"


const BlackStriped = () => {
    return (
        <div className="hidden lg:block">
        <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">

            {/* Image */}
            <div className="bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[1991px] lg:left-[1045px] lg:rounded-[20px] overflow-hidden">
                <Image src={"/productDetail/blackstriped.png"} alt="Polo Trims" width={296} height={441} layout="responsive" className="w-full h-full top:[-73px] left-[-1px] object-contain"></Image>
            </div>

            <div className="lg:w-[195px] lg:h-[27px] lg:top-[2305px] lg:left-[1045px]">
                <h1 className="font-figtree font-bold text-xl leading-[27px]">Black Striped T-shirt</h1>
            </div>


            {/* star & price */}
            <div className="w-[160.7px] h-[19px] top-[2340px] left-[1045px] gap-[13px] flex justify-between items-center">
                <div className="w-[113.7px] h-[18.49px] gap-[5.31px] flex justify-start items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    
                </div>
                <div className="w-[34px] h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-sm lg:leading-[18.9px]">5.0<span>/</span>5</h1>
                </div>
            </div>


            
            {/* price */}
            <div className="w-[188px] lg:h-8 lg:top-[2367px] lg:left-[1045px] gap-[10px] flex justify-center items-center">

                {/* $120 */}
            <div className="w-[55px] h-8">
                <h1 className="font-figtree font-bold text-2xl leading-[32.4px]">$120</h1>
            </div>

                {/* $150 */}
                <div className="w-[55px] h-8">
                    <h1 className="font-figtree font-bold text-2xl lg:leading-[32.4px] line-through text-black opacity-40">$150</h1>
                </div>

                {/* -30% */}
                <div className="rounded-[62px] px-3.5 py-1.5 w-[58px] h-7 gap-3 bg-percentage bg-opacity-10">
                    <h1 className="w-[32px] lg:h-4 font-figtree font-medium text-xs lg:leading-[16.2px] text-percentage ">-30%</h1>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default BlackStriped
