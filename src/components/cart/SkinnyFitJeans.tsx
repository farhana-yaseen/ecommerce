import Image from "next/image"

const SkinnyFitJeans = () => {
    return (
        <div className="w-[330px] h-[99px] left-[14px]">
            <div className="flex justify-between items-center">

            <div className="w-[99px] h-[99px] rounded-[8.66px]">
                {/* Image */}
                <Image src={"/arrival/jeans.png"} alt="Skinny Fit Jeans" width={99} height={149} className="w-full h-full top-[-25px] left-[-1px] object-cover rounded-[8.66px]"></Image>
            </div>

            <div className="w-[217px] h-[99px] justify-between">
                {/* Detail of Item */}
                <div className="w-[217px] h-[57px] flex justify-between">
                    {/* size & color */}
                    <div className="w-[181px] h-[57px] gap-1 flex flex-col">
                        {/* Text */}
                        <h1 className="w-[129px] h-[22px] font-figtree font-bold text-base leading-[21.6px]">Skinny Fit Jeans</h1>

                        <div className="w-[97px] h-[34px] gap-[2px] ">
                            <h1 className="w-[58px] h-4 font-figtree font-normal text-xs leading-[16.2px]">Size:<span className="opacity-60">Large</span></h1>
                            <h1 className="w-[67px] h-4 font-figtree font-normal text-xs leading-[16.2px]">Color: <span className="opacity-60"> Blue</span></h1>
                        </div>
                    </div>
                    <div className="w-5 h-5">
                        {/* Delete Icon */}
                        <Image src={"/cart/delete.png"} alt="Delete icon" width={20} height={20} className="w-[15px] h-[16.25px] top-[1.25px] left-2.5 object-contain"></Image>
                    </div>
                </div>

                <div className="w-[217px] h-[31px] flex justify-between items-center">
                    {/* Price & Quantity */}
                    <div className="w-[45px] h-[27px]">
                        {/* Price */}
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$240</h1>
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

           
        </div>
    )
}

export default SkinnyFitJeans
