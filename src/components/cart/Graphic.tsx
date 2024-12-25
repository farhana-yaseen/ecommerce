import Image from "next/image"

const Graphic = () => {
    return (
        <div className="hidden md:block w-[667px] h-[124px] left-4">


            <div className="flex justify-between items-center gap-4">
                {/* one */}
                <div className="w-[124px] h-[124px] rounded-[8.66px]">
                    {/* Image */}
                    <Image src={"/cart/graphic.png"} alt="Graphic T-Shirt" width={125} height={187} className="w-full h-full top-[-30.5px] object-cover rounded-[8.66px]"></Image>
                </div>


                {/* two */}
                <div className="w-[527px] h-[124px]">
                    {/* Detail of Item */}
                    {/* two one */}
                    <div className="w-[227px] h-[118px]">
                        {/* size & color */}
                        <div className="w-[227px] h-[71px] flex flex-col gap-1">
                            {/* Text */}
                            <h1 className="w-[235px] h-[27px] font-figtree font-bold text-[20px] leading-[27px]">Gradient Graphic T-shirt</h1>

                            <div className="w-[78px] h-[42px]">
                                <h1 className="w-[67px] h-[19px] font-figtree font-normal text-sm leading-[18.19px]">Size:<span className="opacity-60">Large</span></h1>
                                <h1 className="w-[78px] h-[19px] font-figtree font-normal text-sm leading-[18.19px]">Color: <span className="opacity-60"> White</span></h1>
                            </div>

                            <div className="w-[45px] h-8">
                                {/* Price */}
                                <h1 className="font-figtree font-bold text-xl md:text-2xl leading-[32.4px]">$145</h1>
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
                        <div className="w-5 h-5">
                            <div className="mt-[9.06px] left-[2.19px]">
                                <Image src={"/cart/minus.png"} alt="Minus" width={16} height={2} className="w-[15.63px] h-[1.88px] object-contain"></Image>
                            </div>
                        </div>

                        <h1 className="w-[6px] h-[19px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                        {/* Plus */}
                        <div className="w-5 h-5">
                            <div className="top-[2.19px] left-[2.19px]">
                                <Image src={"/cart/plus.png"} alt="plus" width={16} height={16} className="w-full h-full object-contain"></Image>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* line */}
            <div className="w-[330px] md:w-[667px] border-[1px] border-opacity-10 mt-6"></div>
        </div>
    )
}

export default Graphic
