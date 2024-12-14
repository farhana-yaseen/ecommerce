import Image from "next/image"

const AddToCart = () => {
    return (
        <div className="flex justify-start gap-4">

            <div className="w-[110px] h-[44px] top-[1060px] ml-4 lg:w-[170px] lg:h-[52px] lg:top-[694px] lg:left-[750px] rounded-[62px] px-4 py-3 gap-4 lg:px-5 lg:py-4 bg-searchColor flex justify-center items-center">

                {/* Quantity */}

                {/* Minus */}
                <div className="w-5 h-5 lg:w-6 lg:h-6">
                    <div className="mt-[9.06px] left-[2.19px] lg:top-[2.63px] lg:left-[2.63px]">
                        <Image src={"/cart/minus.png"} alt="Minus" width={19} height={3} className="w-[15.63px] h-[1.88px] lg:w-[18.75px] lg:h-[2.25px] object-contain"></Image>
                    </div>
                </div>

                <h1 className="w-1.5 h-[19px] lg:h-[22px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                {/* Plus */}
                <div className="w-5 h-5 lg:w-6 lg:h-6 ">
                    <div className="top-[2.19px] left-[2.19px] lg:top-[2.63px] lg:left-[2.63px]">
                        <Image src={"/cart/plus.png"} alt="plus" width={19} height={19} className="w-[15.63px] h-[15.63px] lg:w-[18.75px] lg:h-[18.75px] object-contain"></Image>
                    </div>
                </div>

            </div>


            {/* Button */}
            {/* Add to cart */}
            <div className="w-[236px] h-[44px] top-[1060px] left-[138px] px-[54px] py-4 lg:w-[400px] lg:h-[52px] lg:top-[694px] lg:left-[940px] rounded-[62px] gap-3 bg-black flex items-center justify-center">
                {/* Text */}
                <h1 className="w-[74px] h-[19px] lg:w-[85px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-white">Add to Cart</h1>
            </div>
















        </div>
    )
}

export default AddToCart
