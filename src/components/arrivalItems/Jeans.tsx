import Image from "next/image"
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Jeans = () => {
    return (
        <div>
            {/* Jeans */}
            <div className="w-[198px] h-[200.01px] top-[1217px] left-[230px] lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[415px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px] ">
                <Image src={"/arrival/jeans.png"} alt="Jeans" width={268} height={402} className="w-[171px] h-[225px] top-[-28px] left-[13px] lg:w-[268px] lg:h-[320px] lg:top-[-51px] lg:left-3.5 object-contain rounded-[13.42px] lg:rounded-[20px]"></Image>
            </div>

            <div className="w-[130px] h-[22px] top-[1427.01px] left-[230px] lg:w-[160px] lg:h-[27px] lg:top-[1418px] lg:left-[415px]">
                <h1 className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] llg:eading-[27px]">S<span className="lowercase">KINNY</span><span className="capitalize"> fit jeans</span></h1>
            </div>

            {/* star & price */}
            <div className="w-[106.09px] h-4 top-[1453.01px] left-[230px] gap-[11px] lg:w-[126.2px] lg:h-[19px] lg:top-[1453px] lg:left-[415px] lg:gap-[13px] flex justify-start items-center">
                <div className="w-[67px] h-[15.47px] gap-[4.44px] lg:w-[80.2px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
                    {/* stars */}
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                    <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                </div>
                <div className="w-[28px] h-[16px] lg:w-[33px] lg:h-[19px]">
                    {/* rate */}
                    <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">3<span>.5/</span><span className="opacity-60">5</span></h1>
                </div>
            </div>

            {/* price */}
            <div className="lg:w-[200px] lg:h-8 top-[1480px] lg:left-[415px] gap-4 lg:gap-[10px] flex justify-start items-center">

                {/* $240 */}
                <div className="w-[51px] h-[27px] top-[1473px] left-[230px] lg:w-[61px] lg:h-8">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">$240</h1>
                </div>

                {/* $260 */}
                <div className="w-[51px] h-[27px] top-[1473px] left-[286px] lg:w-[61px] lg:h-8">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px] line-through text-black opacity-40">$260</h1>
                </div>

                {/* -20% */}
                <div className="w-[42px] h-5 rounded-[62px] px-3.5 py-1.5 lg:w-[58px] lg:h-7 gap-3 bg-percentage bg-opacity-10">
                    <h1 className="w-[26px] h-3.5 lg:w-[31px] lg:h-4 font-figtree font-medium text-[10px] lg:text-sm leading-[13.5px] lg:leading-[16.2px] text-percentage ">-20%</h1>
                </div>
            </div>

        </div>
    )
}

export default Jeans
