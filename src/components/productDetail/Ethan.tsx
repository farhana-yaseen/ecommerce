import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"

const Ethan = () => {
    return (
        <div className="w-[358px] h-[224.19px] top-[1766px] ml-4 p-6 lg:w-[610px] lg:h-[241.58px] lg:top-[1222px] lg:left-[100px] rounded-[20px]  border-[1px] border-opacity-10 lg:px-8 lg:py-7 gap-[332px] lg:gap-[352px]">
            <div className="w-[310px] h-[196px] gap-[22px] lg:w-[546px] lg:h-[139.58px] lg:flex flex-col justify-betweeb">

                <div className="w-[310px] h-[196.19px] gap-3 lg:w-[546px] lg:h-[139.58px] lg:gap-[15px] flex flex-col justify-between">

                    {/* dots flex */}
                    <div className="flex justify-between items-center">
                        {/* Stars */}
                        <div className="w-[83.23px] h-[19.19px] gap-[5.51px] lg:w-[97.93px] lg:h-[22.58px] lg:gap-[6.49px] flex justify-center items-center">

                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]" />
                            <BsStarHalf className="text-starColor w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]" />
                           
                        </div>

                        <div className="hidden lg:block w-6 h-6">
                            {/* three dots */}
                            <Image src={"/productDetail/dots.png"} alt="Correction Sign" width={20.25} height={5.25} className="w-full h-full mt-[9.38px] left-[1.88px] object-contain"></Image>
                        </div>
                    </div>

                    <div className="w-[310px] h-[165px] gap-4 lg:w-[522px] lg:h-[102px] lg:gap-3">
                        {/* Ethan & description */}
                        <div className="w-[310px] h-[127px] gap-2 lg:w-[106px] lg:h-6 lg:gap-1">
                            {/* Ethan and correction sign */}

                            <div className="w-[90px] h-[19px] gap-1 lg:w-[118px] lg:h-[15px] flex justify-between items-center">
                                {/* Ethan */}
                                <h1 className="w-[70px] h-3 lg:w-[85px] lg:h-[15px] font-figtree font-bold text-base lg:text-xl leading-[22px]">Ethan R.</h1>

                                <div className="w-[19px] h-[19px] mt-2 lg:w-6 lg:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="w-[15.44px] h-[15.44px] mt-[1.78px] left-[1.78px] lg:w-full lg:h-full lg:top-[2.25px] lg:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="w-[310px] h-[100px] lg:w-[522px] lg:h-[66px] text-figtree font-normal text-sm lg:text-base leading-5 lg:leading-[22px] opacity-60 py-4">&quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;</h1>
                        </div>

                    </div>
                    {/* posted on */}
                    <h1 className="lg:hidden w-[170px] h-[22px] font-figtree font-medium text-sm leading-[22px] opacity-60">Posted on August 16, 2023</h1>

                </div>
                {/* posted on for desktop */}
                <h1 className="hidden lg:block w-[546px] h-[22px] font-figtree font-medium text-base leading-[22px] opacity-60">Posted on August 16, 2023</h1>
            </div>
        </div>
    )
}

export default Ethan