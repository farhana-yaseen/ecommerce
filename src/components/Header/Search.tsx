import Image from "next/image"

const Search = () => {
    return (
        <div className='lg:w-[377px] xl:w-[577px] h-12 rounded-[62px] px-4 py-3 gap-3 bg-searchColor flex items-center'>

            <div className="w-6 h-6">
            <Image src={"/header/search.png"} alt="close" width={50} height={50} className="w-[20.27px] h-[20.27px] top-[1.86px] left-[1.86px]"></Image>
            </div>

            <h1 className="w-[151px] h-[22px] font-figtree font-normal text-base leading-[21.6px]  text-black opacity-40 ">Search for products..</h1>

            </div>

            )
}

            export default Search
