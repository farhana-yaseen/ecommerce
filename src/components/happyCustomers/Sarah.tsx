import Image from "next/image"
import Stars from "./Stars"

const Sarah = () => {
    return (

        <div className="w-[358px] h-[186.19px] top-[3244] left-4 p-6 lg:w-[400px] lg:h-60 lg:top-[3461px] lg:left-[100px] rounded-[20px]  border-[1px] border-opacity-10 lg:px-8 lg:py-7 lg:gap-[342px]">

            <div className="w-[310px] h-[138.19px] lg:w-[336px] lg:h-[161.58px]">
                <div className="w-[310px] h-[138.19px] gap-3 lg:w-[336px] lg:h-[161.58px] lg:gap-[15px]">
                    {/* Stars */}
                    <Stars />
                    {/* Text */}

                    <div className="w-[310px] h-[107px] gap-2 lg:w-[336px] lg:h-[124px] lg:gap-3 lg:py-4">

                        {/* Text */}
                        <div className="w-[89px] h-[19px] gap-1 lg:w-[110px] lg:h-6 flex justify-center">
                            {/* Sarah M */}
                            <h1 className="w-[66px] h-3 lg:w-[89px] lg:h-[15px] font-figtree font-bold text-base lg:text-xl leading-[22px]">Sarah M.</h1>
                            <div className="w-[19px] h-[19px] lg:w-6 lg:h-6">
                                {/* Correction Sign */}
                                <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="w-[15.44px] h-[15.44px] top-[1.78px] left-[1.78px] lg:w-[19.5px] lg:h-[19.5px] lg:top-[2.25px] lg:left-[2.25px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-[310px] h-[80px] lg:w-[336px] lg:h-[88px] text-figtree font-normal text-xs lg:text-base leading-5 lg:leading-[22px] text-opacity-60 py-4">&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;</h1>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sarah
