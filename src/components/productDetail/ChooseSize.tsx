"use client"

import { useState } from "react"
import { DetailProps } from "./DetailOfProduct"
import { useCart } from "@/CartContextProvider"
import { ImCheckmark } from "react-icons/im"

const ChooseSize = ({ singleProduct }: DetailProps) => {

    const { addToCart, increaseQuantity, decreaseQuantity } = useCart()

    const handleAddToCart = () => {
        addToCart(singleProduct, selectSize, selectColor);  // Add item to the cart
        alert(`${singleProduct.name} has been added to your cart!`);
    };

    // ******** Size *********
    const [selectSize, setSelectSize] = useState(singleProduct.sizes[2])

    const handleSelectSize = (size: string) => {
        setSelectSize(size)
    }

    // ******** Color *********
    const [selectColor, setSelectColor] = useState(singleProduct.colors[1])

    const handleSelectColor = (color: string) => {
        setSelectColor(color)
    }

    return (
        <div className="mx-auto">

            {/* ************* Color ************* */}
            <div className="w-[142px] h-[65.14px] top-[834px] left-4  flex flex-col gap-4">

                <div className="w-[102px] h-2.5 ml-4 lg:w-[93px] lg:h-[11px] lg:top-[461px] lg:left-[750px] opacity-60 ">
                    <h1 className="font-figtree font-normal text-[14px] lg:text-sm leading-[18.9px] lg:leading-[21.6px]">Select Colors</h1>
                </div>

                {/* Colors */}
                <div className="w-[185px] h-[39.14px] top-[12.3px] ml-4 lg:w-[200px] gap-[12.3px] lg:h-[37px] lg:top-[488px] lg:left-[750px] lg:gap-4 flex justify-center items-center">

                    {singleProduct.colors.map((color, index) => (
                        <div
                            key={index} onClick={() => handleSelectColor(color)}
                            className={`w-[39.14px] h-[39.14px] lg:w-[37px] lg:h-[37px] rounded-full flex justify-center items-center cursor-pointer border-[1px]`}
                            style={{ background: color }}>
                            <div className="flex flex-col justify-between items-center">

                                {/* Selected indicator */}
                                {selectColor === color && (
                                    <div className="w-3.5 h-3 flex justify-center items-center">
                                        <ImCheckmark className="text-2xl font-extrabold text-yellow-600"/>
                                    </div>
                                )}

                                <h1 className="text-yellow-600 text-[8px] lg:text-[10px] font-bold">{color}</h1>
                            </div>
                        </div>
                    ))}

                </div>

                {/* line */}
                <div className="w-[358px] mt-1 ml-4 border-[1px] border-black opacity-10 lg:w-[590px] lg:top-[549px] lg:left-[750px]"></div>

            </div >


            {/* ************* Size ************* */}

            
            <div className="w-[353px] h-[65px] top-[947px] left-4 lg:w-[500px] lg:h-full lg:left-6 flex flex-col gap-6 lg:gap-6 mt-10 lg:mt-10">
                {/* Heading */}
                <div className="w-[80px] h-2.5 ml-4 lg:w-[87px] lg:h-[11px] lg:top-[573px] lg:left-[750px] opacity-60">
                    <h1 className="font-figtree font-normal text-[14px] lg:text-sm leading-[18.9px] lg:leading-[21.6px]">Choose Size</h1>
                </div>

                <div className="w-[353px] h-[39px] ml-4 gap-2 lg:w-[420px] lg:h-[46px] lg:top-[600px] lg:left-[750px] lg:gap-6 flex justify-center items-center">


                    {singleProduct.sizes.map((size, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectSize(size)}
                            className={`w-[74px] h-[39px] rounded-[62px] px-5 py-2.5 ${selectSize === size ? "bg-black" : "bg-searchColor"} cursor-pointer flex justify-center items-center`}
                        >
                            <h1 className={`font-figtree font-normal text-[14px] ${selectSize === size ? "text-white" : ""}`}>{size}</h1>
                        </div>
                    ))}

                </div>
            </div>

            {/* Line */}
            <div className="w-[358px] top-[1036px] ml-4 mt-10 border-[1px] border-black opacity-10 lg:w-[590px] lg:top-[670px] lg:left-[750px]"></div>


            {/* **************** Add to Cart Button *************** */}
            
            <div className="py-12 xl:py-16">

                <div className="flex justify-between items-center">

                    {/* Quantity */}
                    <div className="w-[110px] h-[44px] top-[1060px] ml-4 xl:w-[170px] xl:h-[52px] xl:top-[694px] xl:left-[750px] rounded-[62px] px-4 py-3 gap-4 xl:px-5 xl:py-4 bg-searchColor flex justify-center items-center">

                        {/* Minus */}
                        <div onClick={() => decreaseQuantity(singleProduct._id)} className="w-5 h-5 xl:w-6 xl:h-6 top-[9.06px] left-[2.19px] xl:top-[2.63px] xl:left-[2.63px]">
                            <button className="w-[15.63px] h-[15.63px] xl:w-[18.75px] xl:h-[18.75px] object-contain font-bold">-</button>
                        </div>

                        <span className="w-1.5 h-[19px] xl:h-[22px] font-figtree font-medium text-sm leading-[18.9px] text-black">{singleProduct.quantity}</span>


                        {/* Plus */}
                        <div onClick={() => increaseQuantity(singleProduct._id)} className="w-5 h-5 xl:w-6 xl:h-6 top-[2.19px] left-[2.19px] xl:top-[2.63px] xl:left-[2.63px] cursor-pointer">
                            <button className="w-[15.63px] h-[15.63px] xl:w-[18.75px] xl:h-[18.75px] object-contain font-bold">+</button>
                        </div>
                    </div>

                    {/* Button */}
                    {/* Add to cart */}
                    <div onClick={() => handleAddToCart()} className="w-[236px] h-[44px] top-[1060px] left-[138px] px-[54px] py-4 xl:w-[400px] xl:h-[52px] xl:top-[694px] xl:left-[940px] rounded-[62px] gap-3 bg-black flex items-center justify-center cursor-pointer">
                        {/* Text */}
                        <h1 className="w-[74px] h-[19px] xl:w-[85px] xl:h-[22px] font-figtree font-medium text-sm xl:text-base leading-[18.9px] xl:leading-[21.6px] text-white">Add to Cart</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ChooseSize
