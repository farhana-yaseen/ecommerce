import Image from "next/image"
import { BsStarFill } from "react-icons/bs";


const LooseFit = () => {
    return (
        <div className="hidden lg:block">
            {/* Loose Fit Shorts */}
            <div className="w-[295px] h-[298px] top-[1841px] left-[730px] rounded-[20px]">
                <Image src={"/selling/loose.png"} alt="Graphic T-Shirt" width={296} height={441} className="lg:w-full lg:h-full top-[-73px] object-contain rounded-[20px]"></Image>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
                <div className="w-[260px] h-[27px] top-[2155px] left-[730px]">
                    <h1 className="font-figtree font-bold text-xl leading-[27px]">L<span className="lowercase">OOSE</span><span className="capitalize"> fit bermuda shorts</span></h1>
                </div>

                {/* star & price */}
                <div className="w-[113.09px] h-[19px] top-[2190px] left-[730px] gap-[13px] flex justify-center items-center">
                    <div className="w-[66.09px] h-[18.49px] gap-[5.31px] flex justify-center items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[18.49px] h-[18.49px]" />
                    </div>
                    <div className="w-[34px] h-[19px]">
                        {/* rate */}
                        <h1 className="font-figtree font-normal text-sm leading-[18.9px]">3.0<span className="font-figtree font-normal text-sm leading-[18.9px]"></span>/<span className="font-figtree font-normal text-sm leading-[18.9px] opacity-60">5</span></h1>
                    </div>
                </div>
                {/* price */}
                <div className="w-[47px] h-8 top-[2217px] left-[730px]">
                    <h1 className="font-figtree font-bold text-2xl leading-[32.4px]">$80</h1>
                </div>
            </div>
        </div>
    )
}
export default LooseFit
