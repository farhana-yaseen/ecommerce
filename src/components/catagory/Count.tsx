import Image from "next/image"

const Count = () => {
    return (
        <div className="w-[259px] h-9 top-[1073px] left-[15px] rounded-lg lg:w-[920px] lg:h-10  lg:top-[1611px] lg:left-[415px] mt-5 lg:mt-10">
            {/* previous button */}
            <div className="w-[90px] h-9 top-[1073px] left-[15px] border-[1px] border-opacity-10 px-3.5 py-2 gap-2 rounded-lg lg:w-[110px] lg:h-9  lg:top-[1611px] lg:left-[415px] flex justify-between items-center">

                <div className='w-4 h-4'>
                    {/* correct */}
                    <Image src={"/catagory/pre.png"} alt="previous" width={12} height={12} className="w-[9.33px] h-[9.33px] top-[3.33px] left-[3.33] lg:mt-[4.17px] lg:left-[4.17px] object-contain"></Image>
                </div >
                <div className="w-46px lg:w-[54px] h-5">
                    {/* text */}
                    <h1 className="font-figtree font-medium text-xs leading-5 lg:text-sm text-black">Previous</h1>
                </div>

            </div>



            {/* counting */}
            <div className="lg:w-[292px] lg:h-10 gap-[2px]"></div>

                



            {/* next button */}
            <div></div>

        </div>
    )
}

export default Count
