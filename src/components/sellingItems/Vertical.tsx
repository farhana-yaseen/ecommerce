import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Vertical = () => {
    return (
        <div className="">
            {/* Striped Shirt */}
            <div className="w-[198px] h-[20.01px] top-[1720px] left-4 lg:w-[295px] lg:h-[298px] lg:top-[1841px] lg:left-[100px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px]">
                <Image src={"/selling/vertical.png"} alt="Striped Shirt" width={296} height={444} className="w-[198.67px] h-[298px] mt-[-49px] left-[-0.67px] lg:w-[296px] lg:h-[444px] lg:mt-[-73px] lg:left-[-1px]  object-contain"></Image>
            </div>

            <div className="w-[170px] h-[22px] top-[1930.01px] ml-4 lg:w-[200px] lg:h-[27px] lg:top-[2155px] lg:left-[100px]">
                <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">V<span className="lowercase">ERTICAL</span><span className="capitalize"> striped shirt</span></h1>
            </div>

            {/* star & price */}
            <div className="w-[136.11px] h-4 top-[1956.01px] ml-4 gap-[11px] lg:w-[160.7px] lg:h-[19px] lg:top-[2190px] lg:left-[100px] lg:gap-[13px] flex justify-center items-center">
                <div className="w-[95.11px] h-[15.47px] gap-[4.44px] lg:w-[113.7px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                </div>
                <div className="w-[30px] h-4 lg:w-[34px] lg:h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">5<span>.0</span>/<span>5</span></h1>
                </div>

            </div>


            {/* price */}
            <div className="w-[144px] h-[27px] top-[1976px] ml-4 gap-3 lg:gap-5 flex justify-start items-center ">
                <div className="w-[44px] h-[27px] lg:w-[53px] lg:h-8 lg:top-[2217px] lg:left-[100px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$212</h1>
                </div>

                {/* price strike */}
                <div className="w-[48px] h-8 top-[27px] lg:w-[56px] lg:h-8 lg:top-[2217px] lg:left-[163px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2x l leading-[27px] lg:leading-[32.4px] line-through text-black opacity-40">$232</h1>
                </div>

                {/* -20% */}
                <div className="w-[42px] h-5 lg:w-[58px] lg:h-7 lg:top-[2219px] lg:left-[231px] rounded-[62px] px-3.5 py-1.5 bg-percentage bg-opacity-10">
                    <h1 className="w-[26px] h-4 lg:w-[31px] lg:h-4 font-figtree font-medium text-[10px] lg:text-sm leading-[13.5px] lg:leading-[16.2px] text-percentage">-20%</h1>
                </div>
            </div>

        </div>
    )
}

export default Vertical
