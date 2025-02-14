"use client"
import { useCart } from "@/CartContextProvider";
import Image from "next/image"
import Link from "next/link";

const AddTocartItemDesk = () => {

    const { cart, increaseQuantity, decreaseQuantity, clearCart, removeFromCart } = useCart();

    if (cart.length == 0) {
        return (
            <div className="mx-3 my-6 text-sm lg:text-base xl:text-lg">
                Your cart is empty. <Link href="/" className="font-bold italic cursor-pointer">Go shopping</Link>
            </div>
        );
    }
    return (
        <div className="hidden lg:block overflow-y-auto ">

            {/* Clear All Button */}
            <div onClick={clearCart} className="w-16 h-5 lg:w-20 lg:h-7  bg-red-600 rounded-lg flex items-center justify-center cursor-pointer mb-6 ml-[600px]">
                <h1 className="text-white font-bold text-[10px] lg:text-xs">Clear All</h1>
            </div>

            {/* cart items */}
            <div className="flex flex-col justify-center gap-8 ">
                {
                    cart.map(itemsInCart =>
                        <div key={itemsInCart._id} className="w-[667px] h-full flex justify-center gap-4">
                            {/* image */}
                            <div className="w-[124px] h-[124px] rounded-[8.66px]">
                                {/* Image */}
                                <Image src={itemsInCart.imageUrl} alt={itemsInCart.name} width={125} height={125} className="w-full h-full top-[-30.5px] object-cover rounded-[8.66px]"></Image>
                            </div>

                            {/* name */}
                            {/* two */}
                            <div className="w-[527px] h-[124px]">
                                {/* Detail of Item */}
                                {/* two one */}
                                <div className="w-[290px] h-[118px]">
                                    {/* size & color */}
                                    <div className="w-[450px] h-[71px] flex flex-col gap-1">
                                        {/* Text */}
                                        <p className="w-[450px] h-[27px] font-figtree font-bold text-[20px] leading-[27px]">{itemsInCart.name}</p>

                                        <div className="w-[85px] h-[42px]">
                                            <h1 className="w-[67px] h-[19px] font-figtree font-normal text-sm leading-[18.19px]">Size: <span className="opacity-60">{itemsInCart.sizes}</span></h1>
                                            <h1 className="w-[85px] h-[19px] font-figtree font-normal text-sm leading-[18.19px]">Color: <span className="opacity-60"> {itemsInCart.colors}</span></h1>
                                        </div>

                                        <div className="w-[45px] h-8">
                                            {/* Price */}
                                            <h1 className="font-figtree font-bold text-xl md:text-2xl leading-[32.4px]">${itemsInCart.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity and delete */}
                            <div className="w-[225px] h-[124px] flex flex-col justify-between items-end">

                                {/* Delete Icon */}
                                <div onClick={() => removeFromCart(itemsInCart._id)} className="w-6 h-6 cursor-pointer">
                                    <Image src={"/cart/delete.png"} alt="Delete icon" width={20} height={20} className="w-[18px] h-[19.5px] top-[1.5px] left-[3px] object-contain"></Image>
                                </div>

                                {/* Quantity */}
                                <div className="w-[126px] h-[44px] rounded-[62px] px-5 py-3.5 bg-searchColor flex justify-between items-center">

                                    {/* Minus */}
                                    <div onClick={() => decreaseQuantity(itemsInCart._id)} className="w-5 h-5 flex items-start justify-center cursor-pointer">
                                        <h1 className="font-figtree text-sm leading-[18.9px] font-bold">-</h1>
                                    </div>


                                    <div className="w-[18px] h-[19px]">
                                        <h1 className="font-figtree font-medium text-sm leading-[18.9px]">{itemsInCart.quantity}</h1>
                                    </div>

                                    {/* Plus */}
                                    <div onClick={() => increaseQuantity(itemsInCart._id)} className="w-5 h-5 flex justify-center items-center cursor-pointer">
                                    <h1 className="font-figtree text-sm leading-[18.9px] font-bold">+</h1>
                                    </div>

                                </div>
                                {/* line */}
                                <div className="w-[330px] md:w-[667px] border-[1px] border-opacity-10"></div>
                            </div>

                        </div>

                    )
                }


            </div>

        </div>
    )
}

export default AddTocartItemDesk
