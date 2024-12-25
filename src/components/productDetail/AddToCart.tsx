import Image from "next/image"

const AddToCart = () => {
    return (
        <div className="py-12 xl:py-16">
        <div className="flex justify-start gap-4">

            <div className="w-[110px] h-[44px] top-[1060px] ml-4 xl:w-[170px] xl:h-[52px] xl:top-[694px] xl:left-[750px] rounded-[62px] px-4 py-3 gap-4 xl:px-5 xl:py-4 bg-searchColor flex justify-center items-center">

                {/* Quantity */}

                {/* Minus */}
                <div className="w-5 h-5 xl:w-6 xl:h-6">
                    <div className="mt-[9.06px] left-[2.19px] xl:top-[2.63px] xl:left-[2.63px]">
                        <Image src={"/cart/minus.png"} alt="Minus" width={19} height={3} className="w-[15.63px] h-[1.88px] xl:w-[18.75px] xl:h-[2.25px] object-contain"></Image>
                    </div>
                </div>

                <h1 className="w-1.5 h-[19px] xl:h-[22px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                {/* Plus */}
                <div className="w-5 h-5 xl:w-6 xl:h-6 ">
                    <div className="top-[2.19px] left-[2.19px] xl:top-[2.63px] xl:left-[2.63px]">
                        <Image src={"/cart/plus.png"} alt="plus" width={19} height={19} className="w-[15.63px] h-[15.63px] xl:w-[18.75px] xl:h-[18.75px] object-contain"></Image>
                    </div>
                </div>

            </div>


            {/* Button */}
            {/* Add to cart */}
            <div className="w-[236px] h-[44px] top-[1060px] left-[138px] px-[54px] py-4 xl:w-[400px] xl:h-[52px] xl:top-[694px] xl:left-[940px] rounded-[62px] gap-3 bg-black flex items-center justify-center">
                {/* Text */}
                <h1 className="w-[74px] h-[19px] xl:w-[85px] xl:h-[22px] font-figtree font-medium text-sm xl:text-base leading-[18.9px] xl:leading-[21.6px] text-white">Add to Cart</h1>
            </div>
            </div>

        </div>
    )
}

export default AddToCart
