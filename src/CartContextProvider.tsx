'use client'


import { createContext, useContext, useEffect, useState } from "react"
import { CartContextType, Product } from "./type";

const CartContext = createContext<CartContextType | undefined>(undefined);


const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [cart, setCart] = useState<Product[]>([]);

  // On page load, check if there’s an existing cart in localStorage and set it in your state.
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));  // Convert the string back into an array of objects

    }
  }, []);

  
  // Add to Cart
  const addToCart=(cartItems:Product, selectedSize:string, selectedColor:string)=>{

    // Check if the item is already in the cart
  const existingItem = cart.find(item => item._id === cartItems._id);

  let updatedCart;

  if(existingItem){
    // If item exists, increase quantity (use the existing quantity or default to 1)
    updatedCart= cart.map(item=> item._id === cartItems._id
      ?{...item, quantity:(item.quantity+1), sizes:[...item.sizes, selectedSize], colors:[...item.colors, selectedColor]}
      :item
    )

  }else{
    
    // If the item does not exist in the cart, add it with quantity 1 and selected size/color as arrays
    updatedCart=[...cart,{...cartItems, quantity:1, sizes:[selectedSize], colors:[selectedColor]}]
  }
  
  // Update state and localStorage
    setCart(updatedCart)
    
    // JSON.stringify(updatedCart) converts the updatedCart array into a JSON string. This transformation is necessary because localStorage only accepts strings as values. By using JSON.stringify(), we serialize the array of objects into a string representation, which can be saved in localStorage.
    localStorage.setItem("cart", JSON.stringify(updatedCart))  
}



// Remove from Cart
const removeFromCart=(itemId:string)=>{
  const deleteItem = cart.filter((item)=> item._id !== itemId)
  setCart(deleteItem)

  // Update the localStorage
  localStorage.setItem("cart", JSON.stringify(deleteItem));

}

// Increase Quantity
const increaseQuantity = (itemId:string)=>{  
  setCart((prev)=> prev.map((item:Product)=>item._id === itemId ? {...item, quantity:(item.quantity || 1 ) + 1}:item))
}

// Decrease Quantity
const decreaseQuantity = (itemId:string)=>{
  setCart((prev)=> prev.map((item:Product)=> item._id === itemId && item.quantity > 1 ? {...item, quantity:(item.quantity || 1) -1}:item))
}
  

// Clear Cart
const clearCart = ()=>{
  setCart([]);

  // Clear localStorage
  localStorage.removeItem("cart");
}

// Total Price (sub total)                          total: This is the accumulator,which stores the cumulative value as the reduce() function. It starts with an initial value of 0 (provided as the second argument)
const totalPrice = Math.round(cart.reduce((total, item) => total + item.price * item.quantity, 0));

// dynamically calculate a discount, for example, a 20% discount
const discountRate = 0 // 20% discount
const discount = Math.round(totalPrice * discountRate);

  // Calculate the final total price after applying the discount and adding the delivery fee
  const deliveryFee = 15;  // Fixed delivery fee
  const grandTotal = Math.round(totalPrice - discount + deliveryFee);



  // Total Items show on cart icon
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  return (
    <div>
      <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalPrice, totalItems, discount, grandTotal} }>
        {children}
      </CartContext.Provider>
      
    </div>
  )
}

export default CartContextProvider
// discount, grandTotal, totalItems



export const useCart = ():CartContextType => {
  const context = useContext(CartContext)
    // If context is undefined, it means the provider is missing
    if (!context) {
      throw new Error("useCart must be used within a CartContextProvider");
    }
  
    return context;
  
}