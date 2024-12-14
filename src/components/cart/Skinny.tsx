import Image from "next/image"

const Skinny = () => {
    return (
        <div className="hidden lg:block w-[667px] h-[124px] left-4">


            <div className="flex justify-between items-center gap-4">
                {/* one */}
                <div className="w-[124px] h-[124px] rounded-[8.66px]">
                    {/* Image */}
                    <Image src={"/arrival/jeans.png"} alt="Checkred Shirt" width={102} height={153} className="w-full h-full top-[-14px] object-cover rounded-[8.66px]"></Image>
                </div>


                {/* two */}
                <div className="w-[527px] h-[124px]">
                    {/* Detail of Item */}
                    {/* two one */}
                    <div className="w-[150px] h-[118px]">
                        {/* size & color */}
                        <div className="w-[150px] lg:h-[71px] flex flex-col gap-1">
                            {/* Text */}
                            <h1 className="w-[159px] h-[27px] font-figtree font-bold text-[20px] leading-[27px]">Skinny Fit Jeans</h1>

                            <div className="w-[69px] h-[42px]">
                                <h1 className="w-[67px] h-[19px] font-figtree font-normal text-sm leading-[18.19px]">Size:<span className="opacity-60">Large</span></h1>
                                <h1 className="w-[79px] h-[19px] font-figtree font-normal text-sm leading-[18.19px]">Color: <span className="opacity-60"> Blue</span></h1>
                            </div>

                            <div className="w-[61px] h-[27px] lg:h-8">
                                {/* Price */}
                                <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-  [32.4px]">$240</h1>
                            </div>

                        </div>
                    </div>
                </div>

                {/* three */}
                <div className="w-[225px] h-[124px] flex flex-col justify-between items-end">

                    <div className="w-6 h-6">
                        {/* Delete Icon */}
                        <Image src={"/cart/delete.png"} alt="Delete icon" width={20} height={20} className="w-[18px] h-[19.5px] top-[1.5px] left-[3px] object-contain"></Image>
                    </div>


                    <div className="w-[126px] h-[44px] rounded-[62px] px-5 py-3.5 bg-searchColor flex justify-between items-center">

                        {/* Quantity */}

                        {/* Minus */}
                        <div className="lg:w-5 h-5">
                            <div className="mt-[9.06px] left-[2.19px]">
                                <Image src={"/cart/minus.png"} alt="Minus" width={16} height={2} className="w-[15.63px] h-[1.88px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-[6px] h-[19px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                        {/* Plus */}
                        <div className="w-5 lg:h-5">
                            <div className="top-[2.19px] left-[2.19px]">
                                <Image src={"/cart/plus.png"} alt="Minus" width={16} height={16} className="lg:w-full lg:h-full object-contain"></Image>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skinny
