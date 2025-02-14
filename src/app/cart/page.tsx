import CartDetail from "@/components/cart/CartDetail"
import CartItem from "@/components/cart/CartItem"


const Cart = () => {
  return (
    <div className="w-full h-full">
      <CartItem/>
      <CartDetail/>
    </div>
  )
}

export default Cart
