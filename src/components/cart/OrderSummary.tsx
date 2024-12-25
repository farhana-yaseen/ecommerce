import Image from "next/image"

const OrderSummary = () => {
    return (
        <div className="w-[358px] h-[390px] top-[612px] ml-4  md:w-[505px] md:h-[458px] md:top-[276px] md:left-[835px] rounded-[20px] border-[1px] border-opacity-10 p-[20px] md:py-5 md:px-6 mb-10">

            <div className="w-[159px] h-[27px] md:w-[185px] md:h-8 mb-3 md:mb-8">
                {/* Order Summary */}
                <h1 className="font-figtree font-bold text-xl md:text-2xl leading-[27px] md:leading-[32.4px]">Order Summary</h1>
            </div>
            {/* Total */}
            <div className="w-[318px] h-[173px] md:w-[457px] md:h-[193px] flex flex-col justify-center items-center gap-5 md:gap-6">
                {/* Subtotal */}
                <div className="w-[318px] h-[22px] md:w-[457px] md:h-[27px] flex justify-between items-center">
                    <h1 className="w-[58px] h-[22px] md:w-[72px] md:h-[27px] font-figtree font-normal text-base md:text-xl leading-[21.6px] md:leading-[27px] opacity-60">Subtotal</h1>
                    <h1 className="w-[39px] h-[22px] md:w-[49px] md:h-[27px] font-figtree font-bold text-base md:text-xl leading-[21.6px] md:leading-[27px]">$565</h1>
                </div>

                {/* Discount */}
                <div className="w-[318px] h-[22px] md:w-[457px] md:h-[27px] flex justify-between items-center">
                    <h1 className="w-[115px] h-[22px] md:w-[147px] md:h-[27px] font-figtree font-normal text-base md:text-xl leading-[21.6px] md:leading-[27px] opacity-60">Discount (-20%)</h1>
                    <h1 className="w-[39px] h-[22px] md:w-[48px] md:h-[27px] font-figtree font-bold text-base md:text-xl leading-[21.6px] md:leading-[27px] text-discountRate">-$113</h1>
                </div>

                {/* Delivery Fee */}
                <div className="w-[318px] h-[22px] md:w-[457px] md:h-[27px] flex justify-between items-center">
                    <h1 className="w-[96px] h-[22px] md:w-[120px] md:h-[27px] font-figtree font-normal text-base md:text-xl leading-[21.6px] md:leading-[27px] opacity-60">Delivery Fee</h1>
                    <h1 className="w-[39px] h-[22px] md:w-[32px] md:h-[27px] font-figtree font-bold text-base md:text-xl leading-[21.6px] md:leading-[27px]">$15</h1>
                </div>

                {/* line */}
                <div className="w-[318px] md:w-[457px] border-[1px] opacity-10"></div>

                {/* Total */}
                <div className="w-[318px] h-[22px] md:w-[457px] md:h-[27px] flex justify-between items-center">
                    <h1 className="w-[33px] h-[22px] md:w-[42px] md:h-[27px] font-figtree font-normal text-base md:text-xl leading-[21.6px] md:leading-[27px] opacity-60">Total</h1>
                    <h1 className="w-[47px] h-[27px] md:w-[56px] md:h-[27px] font-figtree font-bold text-base md:text-2xl leading-[21.6px] md:leading-[32.4px]">-$113</h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center py-6">
                {/* Promo Code apply */}
                <div className="w-[318px] h-[48px] md:w-[457px] gap-3 flex items-center">

                    {/* Promo Code */}
                    <div className="w-[218px] h-12 rounded-[62px] px-4 py-3 md:w-[326px] md:h-12 bg-searchColor flex items-center gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6">
                            {/* Code Icon */}
                            <Image src={"/cart/code.png"} alt="code" width={21} height={21} className="w-[17.5px] h-[17.5px] top-[2.19px] left-[2.19px] md:w-full md:h-full md:top-[2.63px] md:left-[2.63px] object-cover"></Image>
                        </div>

                        {/* Text Add Promo Code */}
                        <h1 className="w-[105px] h-[19px] md:w-[120px] md:h-[22px] font-figtree font-normal text-sm md:text-base leading-[18.9px] md:leading-[21.6px] opacity-40">Add promo code</h1>
                    </div>

                    {/* Apply */}
                    <div className="w-[88px] h-12 rounded-[62px] md:w-[119px] md:h-12 px-4 py-3 bg-black flex items-center justify-center">
                        <h1 className="w-[37px] h-[19px] md:w-[42px] md:h-[22px] font-figtree font-medium text-sm md:text-base leading-[18.9px] md:leading-[21.6px] text-white">Apply</h1>
                    </div>
                </div>


                {/* Go to Checkout */}
                <div className="w-[358px] h-[54px] md:w-[457px] md:h-[60px] rounded-[62px] px-[54px] py-4 gap-3 bg-black flex items-center justify-center">
                    {/* Text Go to CheckOut */}
                    <h1 className="w-[100px] h-[19px] md:w-[114px] md:h-[22px] font-figtree font-medium text-sm md:text-base leading-[18.9px] md:leading-[21.6px] text-white">Go to Checkout</h1>
                    {/* Arrow Sign */}
                    <div className="w-5 h-5 md:w-6 md:h-6">
                        <Image src={"/cart/arrow.png"} alt="arrow" width={15.76} height={18.75} className="w-[13.13px] h-[15.63px] top-[16.56px] left-[2.19px] md:w-full md:h-full md:top-[19.88px] md:left-[2.36px] object-cover"></Image>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderSummary
