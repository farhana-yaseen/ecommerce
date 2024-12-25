import { IoMdClose } from "react-icons/io"
import Image from "next/image"


const FilterItems = () => {
    return (
        <div>
            <div className="w-[353px] h-[27px] top-5 left-[19px] lg:w-[247px] lg:h-[27px]  mb-5">

                <div className="flex justify-between items-center">
                    {/* Text */}
                    <div className="w-[57px] h-[27px]">
                        <h1 className="font-figtree font-bold text-[20px] leading-[27px]">Filters</h1>
                    </div>

                    {/* cross sign */}
                    <div className='lg:hidden w-6 h-6'>
                        <IoMdClose className="w-[15.76px] h-[15.76px] mt-[4.12] ml-[4.12] text-black opacity-40" />
                    </div >

                    {/*  sign */}
                    <div className='hidden lg:block w-6 h-6'>
                    <Image src={"/productDetail/frame.png"} alt="symbol" width={20.25} height={18.75} className="w-full h-full top-[2.63px] left-[1.88px] object-contain opacity-40"></Image>
                    </div >

                </div>
            </div>

            {/* Line */}
            <div className="w-[353px] top-[63px] left-[19px] border-[1px] border-opacity-10 lg:w-[247px] mb-5"></div>



            {/* Items */}
            <div className="w-[353px] lg:w-[247px] h-[160px] top-[83px] left-[19px] gap-5 flex flex-col justify-between mb-8">

                    {/* T-Shirts */}
                    <div className="w-[353px] h-4 lg:w-[247px] lg:h-4">

                        <div className="flex justify-between items-center">
                            {/* Text */}
                            <div className="w-[59px] h-[11px] lg:w-[80px] opacity-60">
                                <h1 className="font-figtree font-normal lg:font-bold lg:text-[20px] text-base leading-[21.6px]">T-shirts</h1>
                            </div>

                            {/* dropdown sign */}
                            <div className='w-4 h-4 opacity-60'>

                            <Image src={"/header/dropdown.png"} alt="dropdown" width={13.75} height={5.25} className="w-[11.5px] h-[6.5px] lg:w-full lg:h-full top-[13.75px] left-[5.25px] object-contain"></Image>
                            
                            </div >
                        </div>
                    </div>


                    {/* Shorts */}
                    <div className="w-[353px] h-4 lg:w-[247px] lg:h-4">

                        <div className="flex justify-between items-center ">
                            {/* Text */}
                            <div className="w-[45px] h-[11px] lg:w-[45px] lg:h-[11px] opacity-60">
                                <h1 className="font-figtree font-normal lg:font-bold lg:text-[20px] text-base leading-[21.6px]">Shorts</h1>
                            </div>

                            {/* dropdown sign */}
                            <div className='w-4 h-4 opacity-60'>
                            <Image src={"/header/dropdown.png"} alt="dropdown" width={13.75} height={5.25} className="w-[11.5px] h-[6.5px] lg:w-full lg:h-full top-[13.75px] left-[5.25px] object-contain"></Image>
                            </div >
                        </div>
                    </div>


                    {/* Shirts */}
                    <div className="w-[353px] h-4 lg:w-[247px] lg:h-4">

                        <div className="flex justify-between items-center">
                            {/* Text */}
                            <div className="w-[39px] h-[11px] opacity-60">
                                <h1 className="font-figtree font-normal lg:font-bold lg:text-[20px] text-base leading-[21.6px]">Shirts</h1>
                            </div>

                            {/* dropdown sign */}
                            <div className='w-4 h-4 opacity-60'>
                            <Image src={"/header/dropdown.png"} alt="dropdown" width={13.75} height={5.25} className="w-[11.5px] h-[6.5px] lg:w-full lg:h-full top-[13.75px] left-[5.25px] object-contain"></Image>
                            </div >
                        </div>
                    </div>

                    {/* Hoodies */}
                    <div className="w-[353px] h-4 lg:w-[247px] lg:h-4">

                        <div className="flex justify-between items-center">
                            {/* Text */}
                            <div className="w-[51px] h-[11px] opacity-60">
                                <h1 className="font-figtree font-normal lg:font-bold lg:text-[20px] text-base leading-[21.6px]">Hoodies</h1>
                            </div>

                            {/* dropdown sign */}
                            <div className='w-4 h-4 opacity-60'>
                            <Image src={"/header/dropdown.png"} alt="dropdown" width={13.75} height={5.25} className="w-[11.5px] h-[6.5px] lg:w-full lg:h-full top-[13.75px] left-[5.25px] object-contain"></Image>
                            </div >
                        </div>
                    </div>


                    {/* Jeans */}
                    <div className="w-[353px] h-4 lg:w-[247px] lg:h-4">

                        <div className="flex justify-between items-center">
                            {/* Text */}
                            <div className="w-[41px] h-[11px] opacity-60">
                                <h1 className="font-figtree font-normal lg:font-bold lg:text-[20px] text-base leading-[21.6px]">Jeans</h1>
                            </div>

                            {/* dropdown sign */}
                            <div className='w-4 h-4 opacity-60'>
                            <Image src={"/header/dropdown.png"} alt="dropdown" width={13.75} height={5.25} className="w-[11.5px] h-[6.5px] lg:w-full lg:h-full top-[13.75px] left-[5.25px] object-contain"></Image>
                            </div >
                        </div>
                    </div>
                </div>


            {/* Line */}
            <div className="w-[353px] top-[267px] left-[19px] border-[1px] lg:w-[247px] border-opacity-10"></div>


        </div>
    )

}

export default FilterItems
