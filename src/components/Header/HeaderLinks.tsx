import Image from "next/image"

const HeaderLinks = () => {
    return (
        <div className='w-[321px] h-[22px] gap-6 flex justify-center items-center'>
            {/* Links */}

            {/* Shop */}
            <div className='w-[57px] h-[22px] gap-1 flex justify-center items-center'>
                <h1 className="w-[37px] h-[22px] font-figtree font-normal text-base leading-[21.6px] tracking-[3%]">Shop</h1>

                <div className="w-4 h-4 flex justify-center gap-2"></div>
                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[11.5px] h-[6.5px] top-[5.25px] left-[2.25px]"></Image>
            </div>
            <h1 className="w-14 h-[22px] font-satoshi font-normal text-base leading-[21.5px]  text-black ">Onsale</h1>
            <h1 className="w-[95px] h-[22px] font-figtree font-normal text-base leading-[21.6px]  text-black ">New Arrivals</h1>
            <h1 className="w-[49px] h-[22px] font-figtree font-normal text-base leading-[21.6px]  text-black ">Brands</h1>
    
        </div>

  )
}

export default HeaderLinks
