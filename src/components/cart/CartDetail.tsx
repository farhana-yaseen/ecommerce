import OrderSummary from "./OrderSummary"
import YourCart from "./YourCart"


const CartDetail = () => {
  return (
    <div>
         <div className="w-[207px] h-[38px] top-[145px] left-4 my-4 lg:w-[259px] lg:h-12 lg:top-[204px] lg:left-[100px] lg:my-8">
                {/* Home */}
                <h1 className="font-fjalla font-bold text-[32px] lg:text-[40px] leading-[38.4px] lg:leading-[48px]">Your Cart</h1>
            </div>

            <div className="flex flex-col items-center justify-between lg:flex-row gap-8">
                <YourCart/>
                <OrderSummary/>
            </div>

      
    </div>
  )
}

export default CartDetail
