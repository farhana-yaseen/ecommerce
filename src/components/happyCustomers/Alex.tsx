import Image from "next/image"
import Stars from "./Stars"

const Alex = () => {
    return (

        <div className="hidden md:block w-[358px] h-[186.19px] top-[3244px] ml-4 p-6 lg:w-[400px] lg:h-[239.58px] lg:top-[3461px] left-[520px] rounded-[20px] border-[1px] border-opacity-10 lg:px-8 lg:py-7 gap-[342px]">

            <div className="w-[310px] h-[138.19px] lg:w-[336px] lg:h-[183.58px] justify-between ">
                <div className="w-[336px] h-[183.58px] gap-[15px]">
                    {/* Stars */}
                    <Stars />

                    {/* Text */}
                    <div className="w-[310px] h-[107px] lg:w-[336px] lg:h-[146px] gap-3 lg:py-4">

                        {/* Text */}
                        <div className="w-[93px] h-6 gap-1 flex justify-center ">
                            {/* Alex */}
                            <h1 className="w-[70px] h-3 lg:w-[65px] lg:h-[15px] font-figtree font-bold md:text-base lg:text-xl leading-[22px]">Alex k.</h1>
                            <div className="w-6 h-6">
                                {/* Correction Sign */}
                                <Image src={"/correction.png"} alt="Correction Sign" width={100} height={100} className="w-[15.44px] h-[15.44px] mt-[1.78px] left-[1.78px] lg:w-[19.5px] lg:h-[19.5px] lg:top-[2.25px] lg:left-[2.25px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-[310px] h-[80px] lg:w-[336px] lg:h-[110px] text-figtree font-normal text-xs lg:text-base leading-5 lg:leading-[22px] text-opacity-60 py-4">&quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Alex
