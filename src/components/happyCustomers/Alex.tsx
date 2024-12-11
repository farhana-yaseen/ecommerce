import Image from "next/image"
import Stars from "./Stars"

const Alex = () => {
    return (

        <div className="hidden md:block w-[400px] h-[239.58px] top-[3461px] left-[520px] rounded-[20px] border-[1px] border-opacity-10 px-8 py-7 gap-[342px]">

            <div className="w-[336px] h-[183.58px] justify-between ">
                <div className="w-[336px] h-[183.58px] gap-[15px]">
                    {/* Stars */}
                    <Stars />

                    {/* Text */}
                    <div className="w-[336px] h-[146px] gap-3 py-4">

                        {/* Text */}
                        <div className="w-[93px] h-6 gap-1 flex justify-center ">
                            {/* Alex */}
                            <h1 className="w-[65px] h-[15px] font-figtree font-bold text-xl leading-[22px]">Alex k.</h1>
                            <div className="w-6 h-6">
                                {/* Correction Sign */}
                                <Image src={"/correction.png"} alt="Correction Sign" width={100} height={100} className="w-[19.5px] h-[19.5px] top-[2.25px] left-[2.25px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-[336px] h-[110px] text-figtree font-normal text-base leading-[22px] text-opacity-60 py-4">&quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Alex
