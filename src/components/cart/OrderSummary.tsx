import Image from "next/image"

const OrderSummary = () => {
    return (
        <div className="w-[358px] h-[390px] top-[612px] left-4 rounded-[20px] border-[1px] border-opacity-10 p-[20px] gap-4">

            <div className="w-[159px] h-[27px]">
                {/* Order Summary */}
                <h1 className="font-figtree font-bold text-xl leading-[27px]">Order Summary</h1>
            </div>
            {/* Total */}
            <div className="w-[318px] h-[173px] flex flex-col justify-center items-center gap-5">
                {/* Subtotal */}
                <div className="w-[318px] h-[22px] flex justify-between items-center">
                    <h1 className="w-[58px] h-[22px] font-figtree font-normal text-base leading-[21.6px] opacity-60">Subtotal</h1>
                    <h1 className="w-[39px] h-[22px] font-figtree font-bold text-base leading-[21.6px]">$565</h1>
                </div>

                {/* Discount */}
                <div className="w-[318px] h-[22px] flex justify-between items-center">
                    <h1 className="w-[115px] h-[22px] font-figtree font-normal text-base leading-[21.6px] opacity-60">Discount (-20%)</h1>
                    <h1 className="w-[39px] h-[22px] font-figtree font-bold text-base leading-[21.6px] text-discountRate">-$113</h1>
                </div>

                {/* Delivery Fee */}
                <div className="w-[318px] h-[22px] flex justify-between items-center">
                    <h1 className="w-[96px] h-[22px] font-figtree font-normal text-base leading-[21.6px] opacity-60">Delivery Fee</h1>
                    <h1 className="w-[39px] h-[22px] font-figtree font-bold text-base leading-[21.6px]">$15</h1>
                </div>

                {/* line */}
                <div className="w-[318px] border-[1px] opacity-10"></div>

                {/* Total */}
                <div className="w-[318px] h-[22px] flex justify-between items-center">
                    <h1 className="w-[33px] h-[22px] font-figtree font-normal text-base leading-[21.6px] opacity-60">Total</h1>
                    <h1 className="w-[47px] h-[27px] font-figtree font-bold text-xl leading-[27px]">-$113</h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center py-6">
                {/* Promo Code apply */}
                <div className="w-[318px] h-[48px] gap-3 flex items-center">

                    {/* Promo Code */}
                    <div className="w-[218px] h-12 rounded-[62px] px-4 py-3 bg-searchColor flex items-center gap-3">
                        <div className="w-5 h-5">
                            {/* Code Icon */}
                            <Image src={"/cart/code.png"} alt="code" width={20} height={20} className="w-[17.5px] h-[17.5px] top-[2.19px] left-[2.19px] object-cover"></Image>
                        </div>

                        {/* Text Add Promo Code */}
                        <h1 className="w-[105px] h-[19px] font-figtree font-normal text-sm leading-[18.9px] opacity-40">Add promo code</h1>
                    </div>

                    {/* Apply */}
                    <div className="w-[88px] h-12 rounded-[62px] px-4 py-3 bg-black flex items-center justify-center">
                        <h1 className="w-[37px] h-[19px] font-figtree font-medium text-sm leading-[18.9px] text-white">Apply</h1>
                    </div>
                </div>


                {/* Go to Checkout */}
                <div className="w-[358px] h-[54px] rounded-[62px] px-[54px] py-4 gap-3 bg-black flex items-center justify-center">
                    {/* Text Go to CheckOut */}
                    <h1 className="w-[100px] h-[19px] font-figtree font-medium text-sm leading-[18.9px] text-white">Go to Checkout</h1>
                    {/* Arrow Sign */}
                    <div className="w-5 h-5">
                        <Image src={"/cart/arrow.png"} alt="arrow" width={15} height={17} className="w-[13.13px] h-[15.63px] top-[16.56 px] left-[2.19px] object-cover"></Image>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderSummary
