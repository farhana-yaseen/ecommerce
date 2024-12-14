

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-[215px] h-[19px] top-[118px] left-4 gap-1.5 lg:w-[259 px] lg:h-[22px] lg:top-[158px] lg:left-[100px] lg:gap-3 flex justify-between items-center">

        {/* Home */}
        <div className="w-14 h-3.5 gap-1 lg:w-[63px] lg:h-4 flex justify-center items-center">
            {/* Navbar */}
            <div className="w-[38px] h-[10px] lg:w-[43px] lg:h-[11px] flex items-center justify-center">
                {/* Home Text */}
                <Link href={"/"}>
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6] opacity-60">Home</h1>
                </Link>
            </div> 

            <div className="w-3.5 h-3.5 lg:w-4 lg:h-4  flex items-center justify-center">
                {/* icon */}
                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[10.07px] h-[5.69px] top-[12.03px] left-[4.59px] lg:w-[11.5px] lg:h-[6.5px] lg:top-[13.75px] lg:left-[5.25px] object-contain"></Image>
            </div>
        </div>

        {/* Shop */}
        <div className="w-[50px] h-3.5 gap-1 lg:w-[57px] lg:h-4 flex justify-center items-center">
            {/* Navbar */}
            <div className="w-[32px] h-[10px] lg:w-[37px] lg:h-[11px] flex items-center justify-center">
                {/* Shop Text */}
                <Link href={"/"}>
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6] opacity-60">Shop</h1>
                </Link>
            </div> 

            <div className="w-3.5 h-3.5 lg:w-4 lg:h-4  flex items-center justify-center">
                {/* icon */}
                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[10.07px] h-[5.69px] top-[12.03px] left-[4.59px] lg:w-[11.5px] lg:h-[6.5px] lg:top-[13.75px] lg:left-[5.25px] object-contain"></Image>
            </div>
        </div>


        {/* Men */}
        <div className="w-[46px] h-3.5 gap-1 lg:w-[51px] lg:h-4 flex justify-center items-center">
            {/* Navbar */}
            <div className="w-[28px] h-[10px] lg:w-[31px] lg:h-[11px] flex items-center justify-center">
                {/* Shop Text */}
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6] opacity-60">Men</h1>     
            </div> 

            <div className="w-3.5 h-3.5 lg:w-4 lg:h-4  flex items-center justify-center">
                {/* icon */}
                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[10.07px] h-[5.69px] top-[12.03px] left-[4.59px] lg:w-[11.5px] lg:h-[6.5px] lg:top-[13.75px] lg:left-[5.25px] object-contain"></Image>
            </div>
        </div>

        <div className="w-[45px] h-[19px] lg:w-[52px] lg:h-[22px]">
                {/* T-Shirt */}
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px]">T-Shirtx</h1>
  
            </div>

    </div>
  )
}

export default Navbar
