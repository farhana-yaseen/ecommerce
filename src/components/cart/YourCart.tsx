import AddToCartItem from "./AddToCartItem"


const YourCart = () => {
    return (
        <div className="w-[358px] h-full top-[203px] ml-4 lg:w-[715px] lg:h-full lg:top-[276px] lg:left-[100px] rounded-[20px] border-[1px] border-opacity-10 p-3.5 lg:px-6 lg:py-5">              

                    <div>
                        {/* Gradiant Graphic T-Shirt */}
                        <AddToCartItem />
                    </div>

            
        </div>
    )
}

export default YourCart
