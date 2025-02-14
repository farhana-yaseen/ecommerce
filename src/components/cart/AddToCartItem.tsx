"use client"

import Image from "next/image"
import AddToCartItemDesk from "./AddTocartItemDesk"
import Link from "next/link";
import { useCart } from "@/CartContextProvider";

const AddToCartItem = () => {
    
    const { cart, increaseQuantity, decreaseQuantity, clearCart, removeFromCart } = useCart();

    if (cart.length == 0) {
        return (
            <div className="mx-3 my-6 text-sm lg:text-base xl:text-lg">
                Your cart is empty. <Link href="/" className="font-bold italic cursor-pointer">Go shopping</Link>
            </div>
        );
    }

    return (
        <div className="flex justify-between w-[358px] h-full top-[203px] left-4">
            <div className="md:hidden w-[330px] h-[99px] ml-[14px]">
                {/* Clear All */}
          <div onClick={clearCart} className="w-16 h-5 lg:w-20 lg:h-7 bg-red-600 rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-6">
            <h1 className="text-white font-bold text-[10px] lg:text-xs">Clear All</h1>
          </div>
                    {
                        cart.map(itemsInCart => (
                            <div key={itemsInCart._id}>
                                <div className="flex justify-center gap-2 items-center">
                                <div className="w-[99px] h-[99px] rounded-[8.66px]">
                                    {/* Image */}
                                    <Image src={itemsInCart.imageUrl} alt={itemsInCart.name} width={99} height={149} layout="responsive" className=" w-full h-full top-[-25px] left-[-1px]  object-cover rounded-[8.66px]"></Image>
                                </div>

                                <div className="w-[250px] h-[99px]">
                                    {/* Detail of Item */}

                                    <div className="w-[250px] h-[57px] flex justify-between">
                                        {/* size & color */}
                                        <div className="w-[230px] h-[57px] gap-1 flex flex-col">
                                            {/* Text */}
                                            <h1 className="w-[230px] h-[22px] font-figtree font-bold text-base  leading-[21.6px] ">{itemsInCart.name}</h1>

                                            <div className="w-[97px] h-[34px] gap-[2px] bg-yellow-600">
                                                <h1 className="w-[58px] h-4 font-figtree font-normal text-xs leading-[16.2px]">Size:<span className="opacity-60">{itemsInCart.sizes}</span></h1>
                                                <h1 className="w-[67px] h-4 font-figtree font-normal text-xs leading-[16.2px]">Color: <span className="opacity-60"> {itemsInCart.colors}</span></h1>
                                            </div>

                                        </div>

                                        <div onClick={() => removeFromCart(itemsInCart._id)} className="w-5 h-5 cursor-pointer">
                                            {/* Delete Icon */}
                                            <Image src={"/cart/delete.png"} alt="Delete icon" width={15} height={16} className="w-full h-full top-[1.25px] left-[2.5px] lg:w-[18px] object-cover"></Image>
                                        </div>
                                    </div>


                                <div className="w-[217px] h-[31px] lg:w-full flex justify-between items-center">
                                    {/* Price & Quantity */}
                                    <div className="w-[45px] h-[27px] ">
                                        {/* Price */}
                                        <p className="font-figtree font-bold text-xl leading-[27px]">${itemsInCart.price}</p>
                                    </div>

                                    <div className="w-[105px] h-[31px]  rounded-[62px] px-5 py-3.5 bg-searchColor flex justify-between items-center">

                                        {/* Quantity */}

                                        {/* Minus */}
                                        <div onClick={() => decreaseQuantity(itemsInCart._id)} className="w-4 h-4 mt-[1.75px] left-[1.75px]">
                                            <Image src={"/cart/minus.png"} alt="Minus" width={13} height={13} className="w-[12.5px] h-[12.5px] object-contain"></Image>
                                        </div>


                                        <h1 className="w-1.5 h-[19px] font-figtree font-medium text-sm leading-[18.9px]">1</h1>

                                        {/* Plus */}
                                        <div onClick={() => increaseQuantity(itemsInCart._id)} className="w-4 h-4 top-[1.75px] left-[1.75px] ">
                                            <Image src={"/cart/plus.png"} alt="plus" width={13} height={13} className="w-[12.5px] h-[12.5px] object-contain"></Image>
                                        </div>

                                </div>

                                    </div>
                                </div>
                            </div>
                    {/* line */}
                    <div className="w-[330px] border-[1px] border-opacity-10 mx-auto my-4 "></div>
                </div>
                        ))
                    }
                    </div>




            {/* for large screen */}
                    <div>
                <AddToCartItemDesk/>
            </div>

        </div>
    )
}

export default AddToCartItem












