import Image from "next/image"

const Count = () => {
    return (
        <div className="w-[259px] h-9 top-[1073px] left-[15px] rounded-xl md:w-[500px] xl:w-[920px] xl:h-10  xl:top-[1611px] xl:left-[415px] mt-5 xl:mt-10 flex justify-between items-center gap-2 md:mx-16">
            {/* previous button */}
            <div className="w-[90px] h-9 top-[1073px] ml-[15px] border-[1px] border-opacity-10 px-3.5 py-2  rounded-xl xl:w-[110px] xl:h-9  xl:top-[1611px] bg-white xl:left-[415px] flex justify-between items-center">

                <div className='w-4 h-4 xl:w-5 xl:h-5'>
                    {/* arrow */}
                    <Image src={"/catagory/pre.png"} alt="previous" width={12} height={12} className="w-[9.33px] h-[9.33px] mt-[3.33px] left-[3.33] xl:mt-[4.17px] xl:left-[4.17px] object-contain"></Image>
                </div >
                <div className="w-[46px] xl:w-[54px] h-5">
                    {/* text */}
                    <h1 className="font-figtree font-medium text-xs leading-5 xl:text-sm text-black">Previous</h1>
                </div>

            </div>



            {/* counting */}
            <div className="xl:w-[292px] xl:h-10 xl:gap-[2px] flex items-center justify-center">

                {/* Pagination numbers */}
                <div className="w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl bg-searchColor bg-opacity-6 ">
                    {/* Pagination number 1 */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">1</h1>
                    </div>
                </div>


                {/* Pagination numbers */}
                <div className="w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl">
                    {/* Pagination number 2 */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">2</h1>
                    </div>
                </div>


                {/* Pagination numbers */}
                <div className="hidden md:block w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl">
                    {/* Pagination number 3 */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">3</h1>
                    </div>
                </div>


                {/* Pagination numbers */}
                <div className="w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl">
                    {/* dots */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">...</h1>
                    </div>
                </div>


                {/* Pagination numbers */}
                <div className="hidden md:blok w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl">
                    {/* Pagination number 8 */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">8</h1>
                    </div>
                </div>


                {/* Pagination numbers */}
                <div className="w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl">
                    {/* Pagination number 9 */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">9</h1>
                    </div>
                </div>


                {/* Pagination numbers */}
                <div className="w-[36px] h-[36px] top-[1073px] left-[113px] xl:w-10 xl:h-10 rounded-xl">
                    {/* Pagination number 10 */}
                    <div className="w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-xl p-3 flex justify-center">
                        {/* number */}
                        <h1 className="w-[5px] xl:w-1.5 h-5 font-figtree font-medium text-xs xl:text-sm leading-5 xl:leading-[14px] text-black">10</h1>
                    </div>
                </div>

                </div>





            {/* next button */}
            <div className="w-[73px] h-9 top-[1073px] left-[15px] border-[1px] border-opacity-10 px-3.5 py-2 gap-2 rounded-xl xl:w-[86px] xl:h-9 bg-white flex justify-center items-center">

                
                <div className="w-[25px] xl:w-[30px] h-5">
                    {/* text */}
                    <h1 className="font-figtree font-medium text-xs leading-5 xl:text-sm text-black">Next</h1>
                </div>

                <div className='w-4 h-4 xl:w-5 xl:h-5'>
                    {/* arrow */}
                    <Image src={"/catagory/pre.png"} alt="next" width={12} height={12} className="w-[9.33px] h-[9.33px] mt-[3.33px] left-[3.33] xl:mt-[4.17px] xl:ml-[4.17px] object-contain rotate-180"></Image>
                </div >

            </div>
 
        </div>
    )
}

export default Count
