import Image from "next/image"

const PriceColor = () => {
    return (
        <div className="">

            {/* Price */}
            <div className="lg:w-[247px] lg:h-[90px] gap-5">

            <div className="lg:w-[247px] lg:h-[27px] gap-5">
                {/* text & dropdown */}
                <div className="flex justify-between items-center">
                    {/* Text */}
                    <div className="w-12 h-[27px] lg:w-12 lg:h-[27px]">
                        <h1 className="font-figtree font-bold text-[20px] leading-[27px]">Price</h1>
                    </div>

                    {/*  sign */}
                    <div className='hidden lg:block w-6 h-6'>
                        <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className=" mt-[10.75px] left-[13.75px] object-contain "></Image>
                    </div >
                </div>
                </div>

                {/* percentage */}
                <div className="w-[353px] h-[43px] top-[330px] left-[19px] lg:w-[247px] lg:h-[43px]">
                    {/* Image */}
                    <div className="lg:w-[247px] lg:h-5 lg:top-[47px]">
                    <Image src={"/catagory/price.png"} alt="symbol" width={247} height={20} className="w-full h-full object-contain "></Image>
                    </div>

                    <div className="flex justify-around items-center">
                    <h1 className="w-[27px] h-[19px] top-[354px] left-14 lg:w-[27px] lg:h-[19px] lg:top-[71px] lg:left-[37px] font-figtree font-medium lg:text-sm lg:leading-[18.9px]">$50</h1>
                    <h1 className="w-[36px] h-[19px] top-[358px] left-[305px] lg:w-[27px] lg:h-[19px] lg:top-[71px] lg:left-[37px] font-figtree font-medium lg:text-sm lg:leading-[18.9px]">$200</h1>
                    </div>
                        

                </div>

            </div>



        </div>
    )
}

export default PriceColor
