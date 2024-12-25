import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"

const Samantha = () => {
    return (
        <div className="w-[358px] h-[224.19px] top-[1266px] ml-4 p-6 xl:w-[610px] xl:h-[241.58px] xl:top-[960px] xl:left-[100px] rounded-[20px]  border-[1px] border-opacity-10 xl:px-8 xl:py-7 gap-[332px] xl:gap-[352px]">
            <div className="w-[310px] h-[176.19px] gap-[22px] xl:w-[546px] xl:h-[139.58px] xl:flex flex-col justify-betweeb">

                <div className="w-[310px] h-[176.19px] gap-3 xl:w-[546px] xl:h-[139.58px] xl:gap-[15px] flex flex-col justify-between">

                    {/* dots flex */}
                    <div className="flex justify-between items-center">
                        {/* Stars */}
                        <div className="w-[107px] h-[19.19px] gap-[5.51px] xl:w-[127px] xl:h-[22.58px] xl:gap-[6.49px] flex justify-center items-center">

                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarHalf className="text-starColor w-[19.19px] h-[19.19px] xl:w-[22.58px] xl:h-[22.58px]" />
                        </div>

                        <div className="hidden xl:block w-6 h-6">
                            {/* three dots */}
                            <Image src={"/productDetail/dots.png"} alt="Correction Sign" width={20.25} height={5.25} className="w-full h-full mt-[9.38px] left-[1.88px] object-contain"></Image>
                        </div>
                    </div>

                    <div className="w-[310px] h-[145px] gap-4 xl:w-[522px] xl:h-[102px] xl:gap-3">
                        {/* samantha & description */}
                        <div className="w-[310px] h-[107px] gap-2 xl:w-[146px] xl:h-6 xl:gap-1">
                            {/* samantha and correction sign */}

                            <div className="w-[118px] h-[19px] gap-1 xl:w-[150px] xl:h-[15px] flex justify-between items-center">
                                {/* samantha */}
                                <h1 className="w-[110px] h-3 xl:w-[128px] xl:h-[15px] font-figtree font-bold text-base xl:text-xl leading-[22px]">Samantha D.</h1>

                                <div className="w-[19px] h-[19px] mt-2 xl:w-6 xl:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="w-[15.44px] h-[15.44px] mt-[1.78px] left-[1.78px] xl:w-[19.5px] xl:h-[19.5px] xl:top-[2.25px] xl:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="w-[310px] h-[80px] xl:w-[522px] xl:h-[66px] text-figtree font-normal text-sm xl:text-base leading-5 xl:leading-[22px] opacity-60 py-4">&quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.&quot;</h1>
                        </div>

                    </div>
                    {/* posted on */}
                    <h1 className="xl:hidden w-[171px] h-[22px] font-figtree font-medium text-sm leading-[22px] opacity-60">Posted on August 14, 2023</h1>

                </div>
                {/* posted on */}
                <h1 className="hidden xl:block w-[171px] h-[22px] xl:w-[546px] xl:h-[22px] font-figtree font-medium text-sm xl:text-base leading-[22px] opacity-60">Posted on August 14, 2023</h1>
            </div>
        </div>
    )
}

export default Samantha
