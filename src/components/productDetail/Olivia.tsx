import Image from "next/image"
import { BsStarFill } from "react-icons/bs"

const Olivia = () => {
    return (
        <div className="hidden xl:block xl:w-[610px] xl:h-[241.58px] xl:top-[1222px] xl:left-[730px] rounded-[20px]  border-[1px] border-opacity-10 px-8 py-7 gap-[342px] ">
            
            <div className="xl:w-[546px] xl:h-[139.58px] flex flex-col justify-betweeb">

                <div className="xl:w-[522px] xl:h-[139.58px] gap-[15px] flex flex-col justify-between">
                    

                    {/* dots flex */}
                    <div className="flex justify-between items-center">
                        {/* Stars */}
                        <div className="xl:w-[109.75px] xl:h-[22.58px] xl:gap-[6.49px] flex justify-center items-center">

                            <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                            <BsStarFill className="text-starColor xl:w-[22.58px] xl:h-[22.58px]" />
                            
                           
                        </div>

                        <div className="w-6 h-6">
                            {/* three dots */}
                            <Image src={"/productDetail/dots.png"} alt="Correction Sign" width={20.25} height={5.25} className="w-full h-full mt-[9.38px] left-[1.88px] object-contain"></Image>
                        </div>
                    </div>

                    <div className="xl:w-[522px] xl:h-[102px] xl:gap-3">
                        {/* samantha & description */}
                        
                        <div className="xl:w-[106px] xl:h-6 xl:gap-1">
                            <div className="xl:w-[103px] xl:h-6 flex justify-between items-center">
                                {/* Olivia */}
                                <h1 className="xl:w-[79px] xl:h-[15px] font-figtree font-bold xl:text-xl leading-[22px]">Olivia P.</h1>

                                <div className="xl:w-6 xl:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="xl:w-full xl:h-full xl:mt-[2.25px] xl:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="xl:w-[522px] xl:h-[66px] text-figtree font-normal xl:text-base xl:leading-[22px] opacity-60 py-4">&quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;</h1>
                        </div>

                    </div>
                </div>
            </div>
                   
                {/* posted on for desktop */}
                <h1 className="w-[546px] h-[22px] font-figtree font-medium text-base leading-[22px] opacity-60 mt-6">Posted on August 17, 2023</h1>
            </div>
    
    )
}

export default Olivia
