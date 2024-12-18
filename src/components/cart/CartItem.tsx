

import Image from "next/image"
import Link from "next/link"

const CartItem = () => {
  return (
    <div className="w-[89px] h-[19px] top-[118px] ml-4 gap-1.5 lg:w-[106px] lg:h-[22px] lg:top-[158px] lg:ml-[100px] lg:gap-3 flex justify-between items-center">

        <div className="w-14 h-3.5 gap-1 lg:w-[63px] lg:h-4 flex justify-center items-center">
            {/* Navbar */}
            <div className="w-[43px] h-[11px] lg:w-[38px] lg:h-[10px] flex items-center justify-center">
                {/* Home */}
                <Link href={"/"}>
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6] opacity-60">Home</h1>
                </Link>
            </div> 

            <div className="w-3.5 h-3.5 lg:w-4 lg:h-4  flex items-center justify-center">
                {/* icon */}
                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[10.07px] h-[5.69px] top-[12.03px] left-[4.59px] lg:w-[11.5px] lg:h-[6.5px] lg:top-[13.75px] lg:left-[5.25px] object-contain"></Image>
            </div>
        </div>

        <div className="w-[27px] h-[19px] lg:w-[31px] lg:h-[22px]">
                {/* Cart */}
                <Link href={"/cart"}>
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px]">Cart</h1>
                </Link>
            </div>

    </div>
  )
}

export default CartItem
