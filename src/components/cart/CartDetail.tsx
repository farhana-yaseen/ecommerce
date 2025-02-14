import OrderSummary from "./OrderSummary"
import YourCart from "./YourCart"


const CartDetail = () => {
  return (
    <div className="">
         <div className="w-[207px] h-[38px] top-[145px] ml-4 my-4 xl:w-[259px] xl:h-12 lg:top-[204px] xl:left-[100px] lg:mt-8">
                {/* Home */}
                <h1 className="font-fjalla font-bold text-[32px] lg:text-[40px] leading-[38.4px] lg:leading-[48px]">Your Cart</h1>
            </div>

            <div className="flex flex-col items-start justify-center lg:flex-row gap-10 py-2 xl:py-12">
                <YourCart/>
                <OrderSummary/>
            </div>
 
      
    </div>
  )
}

export default CartDetail
