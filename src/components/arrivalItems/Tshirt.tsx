import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Tshirt = () => {
    return (
        <div className="">
            {/* T-Shirt */}
            <div className="w-[198px] h-[200.01px] top-[1217px] ml-4 lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px]">
                <Image src={"/arrival/tshirt.png"} alt="T-Shirt" width={296} height={444} className="top-[-73px] left-[-1px] object-contain rounded-[20px]"></Image>
            </div>
            
                <div className="w-[180px] h-[22px] top-[1427.01px] ml-4 lg:w-[225px] lg:h-[27px] lg:top-[1418px] lg:left-[100px]">
                    <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">T-<span className="lowercase">SHIRT</span> <span className="capitalize">with tape detail</span></h1>
                </div>

                {/* star & price */}
                <div className="w-[127px] h-4 top-[1453.01px] ml-4 gap-[11px] lg:w-[160.7px] lg:h-[19px] lg:top-[2190px] lg:left-[100px] lg:gap-[13px] flex justify-center items-center">
                    <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[113.7px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    </div>
                    <div className="w-[29px] h-4 lg:w-[34px] lg:h-[19px]">
                        {/* rate */}
                        <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">4.5/<span className="opacity-60">5</span></h1>
                    </div>
                </div>
                {/* price */}
                <div className="w-[46px] h-[27px] top-[1473px] ml-4 lg:w-[55px] lg:h-8 lg:top-[1480px] lg:left-[100px] lg:gap-[10px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$120</h1>
                </div>
        
        </div>
    )
}

export default Tshirt
