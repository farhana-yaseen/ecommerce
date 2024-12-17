import Image from "next/image"
import { BsStarFill } from "react-icons/bs"

const Olivia = () => {
    return (
        <div className="hidden lg:block lg:w-[610px] lg:h-[241.58px] lg:top-[1222px] lg:left-[730px] rounded-[20px]  border-[1px] border-opacity-10 px-8 py-7 gap-[342px] ">
            
            <div className="lg:w-[546px] lg:h-[139.58px] flex flex-col justify-betweeb">

                <div className="lg:w-[522px] lg:h-[139.58px] gap-[15px] flex flex-col justify-between">
                    

                    {/* dots flex */}
                    <div className="flex justify-between items-center">
                        {/* Stars */}
                        <div className="lg:w-[109.75px] lg:h-[22.58px] lg:gap-[6.49px] flex justify-center items-center">

                            <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                            <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                            <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                            <BsStarFill className="text-starColor lg:w-[22.58px] lg:h-[22.58px]" />
                            
                           
                        </div>

                        <div className="w-6 h-6">
                            {/* three dots */}
                            <Image src={"/productDetail/dots.png"} alt="Correction Sign" width={20.25} height={5.25} className="w-full h-full mt-[9.38px] left-[1.88px] object-contain"></Image>
                        </div>
                    </div>

                    <div className="lg:w-[522px] lg:h-[102px] lg:gap-3">
                        {/* samantha & description */}
                        
                        <div className="lg:w-[106px] lg:h-6 lg:gap-1">
                            <div className="lg:w-[103px] lg:h-6 flex justify-between items-center">
                                {/* Olivia */}
                                <h1 className="lg:w-[79px] lg:h-[15px] font-figtree font-bold lg:text-xl leading-[22px]">Olivia P.</h1>

                                <div className="lg:w-6 lg:h-6">
                                    {/* Correction Sign */}
                                    <Image src={"/correction.png"} alt="Correction Sign" width={19.5} height={19.5} className="lg:w-full lg:h-full lg:mt-[2.25px] lg:left-[2.25px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="lg:w-[522px] lg:h-[66px] text-figtree font-normal lg:text-base lg:leading-[22px] opacity-60 py-4">&quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;</h1>
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
