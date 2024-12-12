import Image from "next/image"

const GraphicTShirt = () => {
    return (
        <div className="w-[330px] h-[99px] left-[14px] lg:w-[667px] lg:h-[124px] lg:left-[16px]">
            <div className="flex justify-between items-center">

            <div className="w-[99px] h-[99px] rounded-[8.66px] lg:w-[124px] lg:h-[124px]">
                {/* Image */}
                <Image src={"/cart/graphic.png"} alt="Graphic T-Shirt" width={99} height={149} className=" w-[99px] h-[149px] top-[-25px] left-[-1px] lg:w-[125px] lg:h-[187px] lg:top-[-30.5px] object-cover rounded-[8.66px]"></Image>
            </div>

            <div className="w-[217px] h-[99px] lg:w-[527px] lg:h-[124px] justify-between">
                {/* Detail of Item */}
                <div className="w-[217px] h-[57px] lg:w-[227px] lg:h-[118px] flex justify-between">
                    {/* size & color */}
                    <div className="w-[181px] h-[57px] gap-1 lg:w-[227px] lg:h-[71px] flex flex-col">
                        {/* Text */}
                        <h1 className="w-[191px] h-[22px] lg:w-[235px] lg:h-[27px] font-figtree font-bold text-base lg:text-[20px] leading-[21.6px] lg:leading-[27px]">Gradient Graphic T-shirt</h1>

                        <div className="w-[97px] h-[34px] gap-[2px] lg:w-[78px] lg:h-[42px]">
                            <h1 className="w-[58px] lg:w-[67px] lg:h-[19px] h-4 font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.19px]">Size:<span className="opacity-60">Large</span></h1>
                            <h1 className="w-[67px] lg:w-[67px] lg:h-[19px] h-4 font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.19px]">Color: <span className="opacity-60"> White</span></h1>
                        </div> 
                    </div>
                    <div className="w-5 h-5 lg:w-6 lg:h-6">
                        {/* Delete Icon */}
                        <Image src={"/cart/delete.png"} alt="Delete icon" width={20} height={20} className="w-[15px] h-[16.25px] top-[1.25px] left-2.5 object-contain"></Image>
                    </div>
                </div>

                <div className="w-[217px] h-[31px] flex justify-between items-center">
                    {/* Price & Quantity */}
                    <div className="w-[45px] h-[27px]">
                        {/* Price */}
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$145</h1>
                    </div>

                    <div className="w-[105px] h-[31px] rounded-[62px] px-5 py-3.5 bg-searchColor flex justify-between items-center">
                        {/* Quantity */}

                        {/* Minus */}
                        <div className="w-4 h-4">
                            <div className="mt-[1.75px] left-[1.75px]">
                                <Image src={"/cart/minus.png"} alt="Minus" width={15} height={10} className="w-[12.5px] h-[12.5px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-1.5 h-[19px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                        {/* Plus */}
                        <div className="w-4 h-4">
                            <div className="top-[1.75px] left-[1.75px]">
                                <Image src={"/cart/plus.png"} alt="Minus" width={15} height={15} className="w-[12.5px] h-[12.5px] object-contain"></Image>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>

            {/* line */}
            <div className="w-[330px] border-[1px] border-opacity-10 mx-auto mt-4"></div>
        </div>
    )
}

export default GraphicTShirt
