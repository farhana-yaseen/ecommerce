import Image from "next/image"
import { BsStarFill } from "react-icons/bs"

const Ava = () => {
    return (
        <div className="hidden xl:block xl:w-[610px] xl:h-[241.58px] xl:top-[1484px] xl:left-[730px] rounded-[20px]  border-[1px] border-opacity-10 px-8 py-7 gap-[342px]">

            <div className="xl:w-[546px] xl:h-[139.58px] flex justify-between ">

                <div className="xl:w-[522px] xl:h-[139.58px] gap-[15px]">
                    {/* Stars */}
                    <div className="xl:w-[127.22px] xl:h-[22.58px] xl:gap-[6.49px] flex justify-center items-center">

                        <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                        <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                        <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                        <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                    </div>


                    <div className="xl:w-[522px] xl:h-[102px] xl:gap-3">
                        {/* Liam & description */}

                        <div className="xl:w-[106px] xl:h-6 xl:gap-1">
                            <div className="xl:w-[89px] xl:h-6 flex justify-between items-center">
                                {/* Liam */}
                                <h1 className="xl:w-[69px] xl:h-[15px] font-figtree font-bold xl:text-xl leading-[22px]">Ava H.</h1>

                                <div className="xl:w-6 xl:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="xl:w-full xl:h-full xl:mt-[2.25px] xl:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="xl:w-[522px] xl:h-[66px] text-figtree font-normal xl:text-base xl:leading-[22px] opacity-60 py-4">&quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;</h1>
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
