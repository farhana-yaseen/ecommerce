import CartDetail from "@/components/cart/CartDetail"
import CartItem from "@/components/cart/CartItem"


const Cart = () => {
  return (
    <div className=" mx-auto">
      <CartItem/>
      <CartDetail/>
    </div>
  )
}

export default Cart
