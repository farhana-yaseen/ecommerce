"use client"

import Image from "next/image"
import HeaderLinks from "./HeaderLinks"
import Search from "./Search"
import Hamburger from "./hamburger"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { useCart } from "@/CartContextProvider"



const Header = () => {

    const { data: session } = useSession()
    const { totalItems } = useCart()


    return (
        <div className=" px-5 py-10" >

            <div className="lg:hidden">
                <Hamburger />
            </div>

            <div className='lg:w-full lg:h-12  xl:w-[1240px] xl:h-[41px] xl:mt-[62px] xl:ml-[100px]  hidden lg:block'>

                <div className="flex justify-between items-center">
                    <div className='w-40 h-[22px]'>
                        {/* Logo */}
                        <h1 className="font-integral font-bold text-[32px] leading-[38.4px]">SHOP.CO</h1>
                    </div>

                    <div>
                        {/* Links */}
                        <HeaderLinks />
                    </div>

                    <div>
                        {/* Search */}
                        <Search />
                    </div>

                    {/* ************* Cart *********** */}
                    <div className="w-[52px] h-8 gap-3.5 flex justify-between items-center">


                        {/* ************ cart ******** */}
                            <Link href={"/cart"} className="relative">
                        
                                <span className="w-6 h-6 flex flex-col justify-center items-center ">
                                    <Image src={"/header/cart.png"} alt="cart" width={22.13} height={20.25}  className="top-[1.88px]"></Image>
                                </span>
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 text-[8px] lg:text-xs bg-red-600 text-white rounded-full w-3.5 h-3.5 flex justify-center items-center">
                                        {totalItems}
                                    </span>
                                )}

                            </Link>


                        {/* ************ login icons *********** */}
                        <div >
                            {
                                !session && (
                                    <div onClick={() => signIn()} className="w-6 h-6 cursor-pointer">
                                        <Image src={"/header/login.png"} alt="login" width={20.25} height={20.25} className="top-[1.88px] left-[1.88px]"></Image>
                                        <p className="text-[10px] xl:text-xs">Login</p>
                                    </div>
                                )
                            }
                            {/* Logout */}
                            {
                                session && (
                                    <div onClick={() => signOut()} className="flex flex-col justify-center items-center cursor-pointer">
                                        <Image src={"/header/login.png"} alt="login" width={20.25} height={20.25} className="top-[1.88px] left-[1.88px]"></Image>
                                        <p className="text-xs xl:text-sm">Logout</p>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Header


