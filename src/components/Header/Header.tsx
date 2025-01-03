import Image from "next/image"
import HeaderLinks from "./HeaderLinks"
import Search from "./Search"
import Hamburger from "./hamburger"
import Link from "next/link"



const Header = () => {
  return (
<div className=" px-5 py-10" >

    <div className="lg:hidden">
        <Hamburger/>
    </div>
    
    <div className='xl:w-[1240px] h-[41px] xl:mt-[62px] xl:ml-[100px]  hidden lg:block'>

        <div className="lg:gap-5 xl:gap-10 items-center justify-center flex">
        <div className='w-40 h-[22px]'>
                {/* Logo */}
                <h1 className="font-integral font-bold text-[32px] leading-[38.4px]">SHOP.CO</h1>
            </div>

            <div>
                {/* Links */}
                <HeaderLinks/>  
            </div>

            <div>
                {/* Search */}
                <Search/>
            </div>
            
            <div className="w-[52px] h-6 gap-3.5 flex justify-between items-center">
                <div className="w-6 h-6">
                    {/* cart  */}
                    <Link href={"/cart"}>
                    <Image src={"/header/cart.png"} alt="cart" width={22.13} height={20.25} className="top-[1.88px]"></Image>
                    </Link>
                   
                </div>

                <div className="w-6 h-6">
                    {/* login icons */}
                    <Image src={"/header/login.png"} alt="login" width={20.25} height={20.25} className="top-[1.88px] left-[1.88px]"></Image>
                </div>
        </div>
        </div>

           

       
</div>
     
    </div>
  )
}

export default Header


