import Image from "next/image"
import { BsStarFill } from "react-icons/bs";


const Courage = () => {
    return (
        <div>
            {/* Graphic T-Shirt */}
            <div className="w-[198px] h-[200.01px] top-[1720px] left-[230px] lg:w-[295px] lg:h-[298px] lg:top-[1841px] lg:left-[100px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px] mt-5 lg:mt-20">
                <Image src={"/selling/courage.png"} alt="Graphic T-Shirt" width={294} height={441} className="w-[197px] h-[294px] top-[-47px] lg:w-full lg:h-full lg:mt-[-71px] lg:left-[1px]  object-contain lg:rounded-[20px]"></Image>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 py-12 lg:py-0">
                <div className="w-[186px] h-[22px] top-[1930.01px] left-[230px] lg:w-[240px] lg:h-[27px] lg:top-[2155px] lg:left-[415px]">
                    <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">C<span className="lowercase">OURAGE</span><span className="capitalize"> graphic t-shirt</span></h1>
                </div>

                {/* star & price */}
                <div className="w-[116.2px] h-4 top-[1956.01px] left-[230px] gap-[11px] lg:w-[137.9px] lg:h-[19px] lg:top-[2190px] lg:left-[415px] lg:gap-[13px] flex justify-start items-center">
                    <div className="w-[106.09px] h-4 top-[1453.01px] left-[230px] gap-[11px] lg:w-[89.9px] lg:h-[18.49px] lg:top-[0px] lg:left-[0px] lg:gap-[5.31px] flex justify-center items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    </div>
                    <div className="w-[30px] h-4 lg:w-[35px] lg:h-[19px]">
                        {/* rate */}
                        <h1 className="font-figtree font-normal text-sm leading-[16.2px] lg:leading-[18.9px]">4.<span>0</span>/<span className="opacity-60">5</span></h1>
                    </div>
                </div>
                {/* price */}
                <div className="w-[45px] h-[27px] top-[1976px] left-[230px] lg:w-[54px] lg:h-8 lg:top-[2217px] lg:left-[415px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$145</h1>
                </div>
            </div>
        </div>
    )
}
export default Courage
