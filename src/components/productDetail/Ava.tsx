import Image from "next/image"
import { BsStarFill } from "react-icons/bs"

const Ava = () => {
    return (
        <div className="hidden lg:block lg:w-[610px] lg:h-[241.58px] lg:top-[1484px] lg:left-[730px] rounded-[20px]  border-[1px] border-opacity-10 px-8 py-7 gap-[342px]">

            <div className="lg:w-[546px] lg:h-[139.58px] flex justify-between ">

                <div className="lg:w-[522px] lg:h-[139.58px] gap-[15px]">
                    {/* Stars */}
                    <div className="lg:w-[127.22px] lg:h-[22.58px] lg:gap-[6.49px] flex justify-center items-center">

                        <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                        <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                        <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                        <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                    </div>


                    <div className="lg:w-[522px] lg:h-[102px] lg:gap-3">
                        {/* Liam & description */}

                        <div className="lg:w-[106px] lg:h-6 lg:gap-1">
                            <div className="lg:w-[89px] lg:h-6 flex justify-between items-center">
                                {/* Liam */}
                                <h1 className="lg:w-[69px] lg:h-[15px] font-figtree font-bold lg:text-xl leading-[22px]">Ava H.</h1>

                                <div className="lg:w-6 lg:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="lg:w-full lg:h-full lg:mt-[2.25px] lg:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="lg:w-[522px] lg:h-[66px] text-figtree font-normal lg:text-base lg:leading-[22px] opacity-60 py-4">&quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;</h1>
                        </div>
                    </div>


                </div>
                <div>

                    <div className="w-6 h-6">
                        {/* three dots */}
                        <Image src={"/productDetail/dots.png"} alt="dots" width={20.25} height={5.25} className="w-full h-full mt-[9.38px] left-[1.88px] object-contain "></Image>
                    </div>
            </div>
                </div>


                {/* post on */}
                <h1 className="w-[546px] h-[22px] font-figtree font-medium text-base leading-[22px] opacity-60 mt-6">Posted on August 19, 2023</h1>

        </div >
    )
}

export default Ava
