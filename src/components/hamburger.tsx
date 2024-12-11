import Image from "next/image"



const hamburger = () => {
    return (
        <div className="flex justify-between items-center">

<div className="flex justify-start items-center gap-5">
            <div className="w-6 h-6">
                {/* hamburger  */}
                <Image src={"/hamburger.png"} alt="hamburger" width={18.75} height={14.25} className="top-[4.88px] left-[2.63px]"></Image>
            </div>

            <div className='w-[126px] h-[18px] top-[57px] left-[56px]'>
                {/* Logo */}
                <h1 className="font-integral font-bold   text-[25.2px] leading-[30.24px]">SHOP.CO</h1>
            </div>
            </div>

            <div className="w-[96px] h-6 gap-3 left-[278px] top-[54px] flex justify-between items-center">

                <div className="w-6 h-6">
                    {/* search  */}
                    <Image src={"/header/search.png"} alt="search" width={20.27} height={20.27} className="top-[1.86px] left-[1.86px]"></Image>
                </div>

                <div className="w-6 h-6">
                    {/* cart  */}
                    <Image src={"/header/cart.png"} alt="cart" width={22.13} height={20.25} className="top-[1.88px]"></Image>
                </div>

                <div className="w-6 h-6">
                    {/* login icons */}
                    <Image src={"/header/login.png"} alt="login" width={20.25} height={20.25} className="top-[1.88px] left-[1.88px]"></Image>
                </div>
            </div>


        </div>
    )
}

export default hamburger
