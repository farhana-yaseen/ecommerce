import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const GradiantGraphic = () => {
    return (
        <div className="flex flex-col justify-between gap-1 lg:gap-2 left-4">

            {/* Image */}
            <div className="w-[198px] h-[200px] top-[2239px] left-4 rounded-[13.42px] bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[1991px] lg:left-[415px] lg:rounded-[20px] overflow-hidden">
                <Image src={"/cart/graphic.png"} alt="Graphic T-Shirt" width={294} height={441} layout="responsive" className="w-[197px] h-[295px] lg:w-full lg:h-full top:[-47px] lg:top-[-71px] left-[1px] object-contain"></Image>
            </div>

            <div className="w-[192px] h-[22px] top-[2449.01px] left-[230px] lg:w-[240px] lg:h-[27px] lg:top-[2305px] lg:left-[415px]">
                <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">Gradient Graphic T-short</h1>
            </div>


            {/* star & price */}
            <div className="w-[106px] h-4 top-[2475.01px] left-[230px] gap-[11px] lg:w-[160.7px] lg:h-[19px] lg:top-[2190px] lg:left-[100px] lg:gap-[13px] flex justify-between items-center">
                <div className="w-[67px] h-[15.47px] gap-[4.44px] lg:w-[113.7px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-start items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                </div>
                <div className="w-[28px] h-4 lg:w-[34px] lg:h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">3.5<span>/</span>5</h1>
                </div>
            </div>

            {/* price */}
            <div className="w-[45px] h-[27px] top-[2495px] left-[230px] lg:w-[55px] lg:h-8 lg:top-[1480px] lg:left-[100px] lg:gap-[10px]">
                <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$145</h1>
            </div>
        </div>
    )
}

export default GradiantGraphic
