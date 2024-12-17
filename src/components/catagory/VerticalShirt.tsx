import Image from "next/image"
import { BsStarFill } from "react-icons/bs"


const VerticalShirt = () => {
    return (
        <div className="hidden lg:block">
            <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">

                {/* Image */}
                <div className="w-[172px] h-[174px] top-[491px] left-[202px] rounded-[13.42px] bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[707px] lg:left-[416px] lg:rounded-[20px] overflow-hidden">
                    <Image src={"/selling/vertical.png"} alt="checkred shirt" width={268} height={402} layout="responsive" className="w-[172px] h-[213px] lg:w-full lg:h-full top:[-19px] left-[15px] lg:top-[-51px] object-contain"></Image>
                </div>

                <div className="w-[120px] h-[22px] top-[675px] left-[202px] lg:w-[210px] lg:h-[27px] lg:top-[1021px] lg:left-[731px]">
                    <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">vertical striped shirt</h1>
                </div>


                {/* star & price */}
                <div className="w-[127px] h-4 top-[701px] left-[202px] gap-[11px] lg:w-[150px] lg:h-[19px] lg:top-[1056px] lg:left-[416px] lg:gap-[13px] flex justify-between items-center">
                    <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[104px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-start items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />

                    </div>
                    <div className="w-7 h-4 lg:w-[33px] lg:h-[19px]">
                        {/* rate */}
                        <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">5<span>.0/</span><span>5</span></h1>
                    </div>
                </div>


                {/* price */}
                <div className="w-[154px] h-[27px] top-[721px] left-[202px] gap-[5px] lg:w-[200px] lg:h-8 lg:top-[1083px] lg:left-[416px] lg:gap-[10px] flex justify-center items-center">

                    {/* $212 */}
                    <div className="w-[51px] h-[27px] lg:w-[61px] lg:h-[32px]">
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$212</h1>
                    </div>

                    {/* $232 */}
                    <div className="w-[51px] h-[27px] lg:w-[55px] lg:h-8">
                        <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-32.4 line-through text-black opacity-40">$232</h1>
                    </div>

                    {/* -20% */}
                    <div className="w-[42px] h-5 rounded-[62px] px-3.5 py-1.5 gap-3 lg:w-[61px] lg:h-7 bg-percentage bg-opacity-10">
                        <h1 className="w-[26px] h-3.5 lg:w-[58px] lg:4 font-figtree font-medium text-[10px] lg:text-xs leading-[13.5px] text-percentage ">-20%</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VerticalShirt
