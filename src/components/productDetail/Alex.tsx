import Image from "next/image"
import { BsStarFill } from "react-icons/bs"

const Alex = () => {
    return (
        <div className="w-[358px] h-[224.19px] top-[1506px] ml-4 p-6 xl:w-[610px] xl:h-[241.58px] xl:top-[960px] xl:left-[100px] rounded-[20px]  border-[1px] border-opacity-10 xl:px-8 xl:py-7 gap-[332px] xl:gap-[352px]">
            <div className="w-[310px] h-[196px] gap-[22px] xl:w-[546px] xl:h-[139.58px] xl:flex flex-col justify-betweeb">

                <div className="w-[310px] h-[196.19px] gap-3 xl:w-[546px] xl:h-[139.58px] xl:gap-[15px] flex flex-col justify-between">

                    {/* dots flex */}
                    <div className="flex justify-between items-center">
                        {/* Stars */}
                        <div className="w-[93.3px] h-[19.19px] gap-[5.51px] xl:w-[127px] xl:h-[22.58px] xl:gap-[6.49px] flex justify-start items-center">

                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                           
                        </div>

                        <div className="hidden xl:block w-6 h-6">
                            {/* three dots */}
                            <Image src={"/productDetail/dots.png"} alt="Correction Sign" width={20.25} height={5.25} className="w-full h-full mt-[9.38px] left-[1.88px] object-contain"></Image>
                        </div>
                    </div>

                    <div className="w-[310px] h-[165px] gap-4 xl:w-[522px] xl:h-[102px] xl:gap-3">
                        {/* samantha & description */}
                        <div className="w-[310px] h-[127px] gap-2 xl:w-[106px] xl:h-6 xl:gap-1">
                            {/* samantha and correction sign */}

                            <div className="w-[78px] h-[19px] gap-1 xl:w-[110px] xl:h-[15px] flex justify-between items-center">
                                {/* samantha */}
                                <h1 className="w-[60px] h-3 xl:w-[125px] xl:h-[15px] font-figtree font-bold text-base xl:text-xl leading-[22px]">Alex M.</h1>

                                <div className="w-[19px] h-[19px] mt-2 xl:w-6 xl:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="w-[15.44px] h-[15.44px] mt-[1.78px] left-[1.78px] xl:w-full xl:h-full xl:top-[2.25px] xl:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="w-[310px] h-[100px] xl:w-[522px] xl:h-[66px] text-figtree font-normal text-sm xl:text-base leading-5 xl:leading-[22px] opacity-60 py-4">&quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;</h1>
                        </div>

                    </div>
                    {/* posted on */}
                    <h1 className="xl:hidden w-[170px] h-[22px] font-figtree font-medium text-sm leading-[22px] opacity-60">Posted on August 15, 2023</h1>

                </div>
                {/* posted on */}
                <h1 className="hidden xl:block w-[546px] h-[22px] font-figtree font-medium text-base leading-[22px] opacity-60">Posted on August 15, 2023</h1>
            </div>
        </div>
    )
}

export default Alex
