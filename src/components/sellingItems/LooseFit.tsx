import Image from "next/image"
import { BsStarFill } from "react-icons/bs";


const LooseFit = () => {
    return (
        <div className="hidden md:block">
            {/* Loose Fit Shorts */}
            <div className="w-[198px] h-[200.01px] top-[1720px] ml-4 lg:w-[295px] lg:h-[298px] lg:top-[1841px] lg:left-[730px]">
                <Image src={"/selling/loose.png"} alt="Burmoda Shorts" width={296} height={441} layout="responsive" className="w-[198.67px] h-[298px] top-[-49px] -[left-0.67px] lg:w-full lg:h-full lg:top-[-73px] object-contain rounded-[13.42px] lg:rounded-[20px]"></Image>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
                <div className="w-[210px] h-[22px] top-[1930.01px] ml-4 lg:w-[260px] lg:h-[27px] lg:top-[2155px] lg:left-[730px]">
                    <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">L<span className="lowercase">OOSE</span><span className="capitalize"> fit bermuda shorts</span></h1>
                </div>

                {/* star & price */}
                <div className="w-[100.11px] h-4 top-[1956.01px] ml-4 gap-[11px] lg:w-[113.09px] lg:h-[19px] lg:top-[2190px] lg:left-[730px] lg:gap-[13px] flex justify-center items-center">
                    <div className="w-[60px] h-[15.47px] gap-[4.44px] lg:w-[66.09px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    </div>
                    <div className="w-[30px] h-4 lg:w-[34px] lg:h-[19px]">
                        {/* rate */}
                        <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">3.0<span></span>/<span className="opacity-60">5</span></h1>
                    </div>
                </div>
                {/* price */}
                <div className="w-[44px] h-[27px] top-[1976px] ml-4 lg:w-[47px] lg:h-8 lg:top-[2217px] lg:left-[730px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$80</h1>
                </div>
            </div>
        </div>
    )
}
export default LooseFit
