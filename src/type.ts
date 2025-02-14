export interface Product{
    _id:string,
    name:string,
    price:number,
    discountPercent:number,
    imageUrl:string,
    isNew:boolean,
    sizes:string[],
    colors:string[],
    category:string,
    description:string,
    quantity:number
}

export interface CartContextType {
    cart: Product[];
    addToCart: (item: Product, selectedSize:string, selectedColor:string) => void;
    removeFromCart: (itemId: string) => void;
    increaseQuantity: (itemId: string) => void;
    decreaseQuantity: (itemId: string) => void;
    clearCart: () => void;
    totalPrice: number;
    discount: number;
    grandTotal: number;
    totalItems: number;
  
  }



// Add to cart
export interface AddToCartType{
    _id:string,
    name:string,
    price:number,
    imageUrl:string
    quantity: number;
}