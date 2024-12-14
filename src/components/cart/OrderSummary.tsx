import Image from "next/image"

const OrderSummary = () => {
    return (
        <div className="w-[358px] h-[390px] top-[612px] left-4 lg:w-[505px] lg:h-[458px] lg:top-[276px] lg:left-[835px] rounded-[20px] border-[1px] border-opacity-10 p-[20px] lg:py-5 lg:px-6 ">

            <div className="w-[159px] h-[27px] lg:w-[185px] lg:h-8 mb-3 lg:mb-8">
                {/* Order Summary */}
                <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">Order Summary</h1>
            </div>
            {/* Total */}
            <div className="w-[318px] h-[173px] lg:w-[457px] lg:h-[193px] flex flex-col justify-center items-center gap-5 lg:gap-6">
                {/* Subtotal */}
                <div className="w-[318px] h-[22px] lg:w-[457px] lg:h-[27px] flex justify-between items-center">
                    <h1 className="w-[58px] h-[22px] lg:w-[72px] lg:h-[27px] font-figtree font-normal text-base lg:text-xl leading-[21.6px] lg:leading-[27px] opacity-60">Subtotal</h1>
                    <h1 className="w-[39px] h-[22px] lg:w-[49px] lg:h-[27px] font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">$565</h1>
                </div>

                {/* Discount */}
                <div className="w-[318px] h-[22px] lg:w-[457px] lg:h-[27px] flex justify-between items-center">
                    <h1 className="w-[115px] h-[22px] lg:w-[147px] lg:h-[27px] font-figtree font-normal text-base lg:text-xl leading-[21.6px] lg:leading-[27px] opacity-60">Discount (-20%)</h1>
                    <h1 className="w-[39px] h-[22px] lg:w-[48px] lg:h-[27px] font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px] text-discountRate">-$113</h1>
                </div>

                {/* Delivery Fee */}
                <div className="w-[318px] h-[22px] lg:w-[457px] lg:h-[27px] flex justify-between items-center">
                    <h1 className="w-[96px] h-[22px] lg:w-[120px] lg:h-[27px] font-figtree font-normal text-base lg:text-xl leading-[21.6px] lg:leading-[27px] opacity-60">Delivery Fee</h1>
                    <h1 className="w-[39px] h-[22px] lg:w-[32px] lg:h-[27px] font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px]">$15</h1>
                </div>

                {/* line */}
                <div className="w-[318px] lg:w-[457px] border-[1px] opacity-10"></div>

                {/* Total */}
                <div className="w-[318px] h-[22px] lg:w-[457px] lg:h-[27px] flex justify-between items-center">
                    <h1 className="w-[33px] h-[22px] lg:w-[42px] lg:h-[27px] font-figtree font-normal text-base lg:text-xl leading-[21.6px] lg:leading-[27px] opacity-60">Total</h1>
                    <h1 className="w-[47px] h-[27px] lg:w-[56px] lg:h-[27px] font-figtree font-bold text-base lg:text-2xl leading-[21.6px] lg:leading-[32.4px]">-$113</h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center py-6">
                {/* Promo Code apply */}
                <div className="w-[318px] h-[48px] lg:w-[457px] gap-3 flex items-center">

                    {/* Promo Code */}
                    <div className="w-[218px] h-12 rounded-[62px] px-4 py-3 lg:w-[326px] lg:h-12 bg-searchColor flex items-center gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6">
                            {/* Code Icon */}
                            <Image src={"/cart/code.png"} alt="code" width={21} height={21} className="w-[17.5px] h-[17.5px] top-[2.19px] left-[2.19px] lg:w-full lg:h-full lg:top-[2.63px] lg:left-[2.63px] object-cover"></Image>
                        </div>

                        {/* Text Add Promo Code */}
                        <h1 className="w-[105px] h-[19px] lg:w-[120px] lg:h-[22px] font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] opacity-40">Add promo code</h1>
                    </div>

                    {/* Apply */}
                    <div className="w-[88px] h-12 rounded-[62px] lg:w-[119px] lg:h-12 px-4 py-3 bg-black flex items-center justify-center">
                        <h1 className="w-[37px] h-[19px] lg:w-[42px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-white">Apply</h1>
                    </div>
                </div>


                {/* Go to Checkout */}
                <div className="w-[358px] h-[54px] lg:w-[457px] lg:h-[60px] rounded-[62px] px-[54px] py-4 gap-3 bg-black flex items-center justify-center">
                    {/* Text Go to CheckOut */}
                    <h1 className="w-[100px] h-[19px] lg:w-[114px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-white">Go to Checkout</h1>
                    {/* Arrow Sign */}
                    <div className="w-5 h-5 lg:w-6 lg:h-6">
                        <Image src={"/cart/arrow.png"} alt="arrow" width={15.76} height={18.75} className="w-[13.13px] h-[15.63px] top-[16.56px] left-[2.19px] lg:w-full lg:h-full lg:top-[19.88px] lg:left-[2.36px] object-cover"></Image>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderSummary
