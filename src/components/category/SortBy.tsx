import Image from "next/image"


const SortBy = () => {
    return (
       <div>
         
         < div className = "hidden lg:block w-[496px] h-4 top-[222px] left-[944px]" >

         <div className="flex justify-center items-center gap-2">


                {/* showing product */}
                <div className="w-[219px] h-[11px] top-[164px] flex items-center mt-1">
                    <h1 className="font-figtree font-normal text-base  opacity-60">Showing 1-10 of 100 Products</h1>
                </div>


                <div className=" w-[175px] h-4 flex justify-center items-center gap-1" >

                    {/* Text */}
                    <div className="w-[155px] h-4 opacity-60">
                        <h1 className="font-figtree font-normal text-base leading-[21.6px]">Sort by: <span className="font-medium text-black text-opacity-100 ">Most Popular</span></h1>
                    </div>

                    {/* dropdown sign */}
                    <div className='w-4 h-4 opacity-60 mt-2'>
                        <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={7} className="w-full h-full top-[5.25px] left-[252.px] object-contain"></Image>
                    </div >

                </div >

            </div>
                
         </div>



       </div>
  )
}

export default SortBy
