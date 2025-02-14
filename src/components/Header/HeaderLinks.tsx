"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const HeaderLinks = () => {
    
    return (
        <div className='lg:w-[321px] lg:h-[22px] gap-3 xl:gap-6 flex justify-center items-center'>
            {/* Links */}

            {/* Shop */}
            <div className='w-[57px] h-[22px] gap-1 flex justify-center items-center'>
                <Link href={"/"} className="cursor-pointer">
                    <h1 className="w-[37px] h-[22px] font-figtree font-normal text-base leading-[21.6px] tracking-[3%]">Shop</h1>
                </Link>
                <div className="w-4 h-4 flex justify-center gap-2"></div>
                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[11.5px] h-[6.5px] top-[5.25px] left-[2.25px]"></Image>
            </div>
            <Link href={"#onSale"} className="cursor-pointer">
                <h1 className="w-14 h-[22px] font-satoshi font-normal text-base leading-[21.5px]  text-black ">Onsale</h1>
            </Link>
            <Link href={"#arrival"} className="cursor-pointer">
                <h1 className="w-[95px] h-[22px] font-figtree font-normal text-base leading-[21.6px]  text-black ">New Arrivals</h1>
            </Link>
            <Link href={"#brand"} className="cursor-pointer">
                <h1 className="w-[49px] h-[22px] font-figtree font-normal text-base leading-[21.6px]  text-black ">Brands</h1>
            </Link>

            <div onClick={() => signIn()} className="w-6 h-6 cursor-pointer">
                <h1 className="w-[49px] h-[22px] font-figtree font-normal text-base leading-[21.6px]  text-black ">Admin</h1>
            </div>

        </div>

    )
}

export default HeaderLinks
