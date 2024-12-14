import Image from "next/image"
import Skinny from "./Skinny"

const SkinnyFitJeans = () => {
    return (
        <div>
        <div className="lg:hidden w-[330px] h-[99px] left-[14px] lg:w-[667px] lg:h-[124px] lg:left-4">
            <div className="flex justify-between items-center ">

                <div className="w-[99px] h-[99px] rounded-[8.66px] lg:w-[124px] lg:h-[124px]">
                    {/* Image */}
                    <Image src={"/arrival/jeans.png"} alt="Skinny Fit Jeans" width={125} height={187} className=" w-[99px] h-[149px] top-[-25px] left-[-1px] lg:w-full lg:h-full lg:top-[-30.5px] object-cover lg:object-contain rounded-[8.66px]"></Image>
                </div>

                <div className="w-[217px] h-[99px] lg:w-[527px] lg:h-[124px] justify-between">
                    {/* Detail of Item */}
                    <div className="w-[217px] h-[57px] lg:w-[227px] lg:h-[118px] flex justify-between">
                        {/* size & color */}
                        <div className="w-[181px] h-[57px] gap-1 lg:w-[227px] lg:h-[71px] flex flex-col">
                            {/* Text */}
                            <h1 className="w-[129px] h-[22px] lg:w-[160px] lg:h-[27px] font-figtree font-bold text-base lg:text-[20px] leading-[21.6px] lg:leading-[27px]">Skinny Fit Jeans</h1>

                            <div className="w-[97px] h-[34px] gap-[2px] lg:w-[78px] lg:h-[42px]">
                                <h1 className="w-[58px] lg:w-[67px] lg:h-[19px] h-4 font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.19px]">Size:<span className="opacity-60">Large</span></h1>
                                <h1 className="w-[67px] lg:w-[69px] lg:h-[19px] h-4 font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.19px]">Color: <span className="opacity-60"> Blue</span></h1>
                            </div>
                        </div>
                        <div className="w-5 h-5 lg:w-6 lg:h-6">
                            {/* Delete Icon */}
                            <Image src={"/cart/delete.png"} alt="Delete icon" width={20} height={20} className="w-[15px] h-[16.25px] top-[1.25px] left-[2.5px] lg:w-[18px] lg:h-[19.5px] lg:top-[1.5px] lg:left-[3px] object-contain"></Image>
                        </div>
                    </div>


                    <div className="w-[217px] h-[31px] lg:w-full flex justify-between items-center">
                        {/* Price & Quantity */}
                        <div className="w-[45px] h-[27px] lg:w-[54px] lg:h-8">
                            {/* Price */}
                            <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px]">$145</h1>
                        </div>

                        <div className="w-[105px] h-[31px] lg:w-[126px] lg:h-[44px] rounded-[62px] px-5 py-3.5 bg-searchColor flex justify-between items-center">
                            {/* Quantity */}

                            {/* Minus */}
                            <div className="w-4 h-4 lg:w-5 lg:h-5">
                                <div className="mt-[1.75px] left-[1.75px] lg:mt-[9.06px] lg:left-[2.19px]">
                                    <Image src={"/cart/minus.png"} alt="Minus" width={16} height={2} className="w-[12.5px] h-[12.5px] lg:w-[15.63px] lg:h-[1.88px] object-contain"></Image>
                                </div>
                            </div>

                            <h1 className="w-1.5 h-[19px] lg:w-[6px] lg:h-[19px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                            {/* Plus */}
                            <div className="w-4 h-4 lg:w-5 lg:h-5">
                                <div className="top-[1.75px] left-[1.75px] lg:top-[2.19px] lg:left-[2.19px]">
                                    <Image src={"/cart/plus.png"} alt="plus" width={16} height={16} className="w-[12.5px] h-[12.5px] lg:w-full lg:h-full object-contain"></Image>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* line */}
            <div className="w-[330px] lg:w-[667px] border-[1px] border-opacity-10 mx-auto mt-4 lg:mt-12"></div>

            </div>

             {/* for large screen */}
        <div>
            <Skinny/>
            </div>
        


        </div>
    )
}

export default SkinnyFitJeans
