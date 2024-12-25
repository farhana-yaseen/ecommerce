import Image from "next/image"
import Stars from "./Stars"

const James = () => {
    return (

        <div className="hidden xl:block w-[400px] h-[239.58px] top-[3461px] left-[940px] rounded-[20px] border-[1px] border-opacity-10 px-8 py-7 gap-[342px]">

            <div className="w-[336px] h-[183.58px] justify-between">
                <div className="w-[336px] h-[183.58px] gap-[15px]">
                    {/* Stars */}
                    <Stars />

                    {/* Text */}
                    <div className="w-[336px] h-[146px] gap-3 py-4">

                        {/* Text */}
                        <div className="w-[111px] h-6 gap-1 flex justify-center">
                            {/* James */}
                            <h1 className="w-[83px] h-[15px] font-figtree font-bold text-xl leading-[22px]">James L</h1>
                            <div className="w-6 h-6">
                                {/* Correction Sign */}
                                <Image src={"/correction.png"} alt="Correction Sign" width={100} height={100} className="w-[19.5px] h-[19.5px] top-[2.25px] left-[2.25px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-[336px] h-[110px] text-figtree font-normal text-base leading-[22px] text-opacity-60 py-4">&quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.&quot;</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default James
