import Image from "next/image"

const Colors = () => {
    return (
        <div>
            {/* box size */}
            <div className="lg:w-[247px] lg:h-[137px] lg:gap-5 mb-5">

                {/* text */}
                <div className="w-[353px] h-[27px] lg:w-[247px] top-[417px]left-[19px]">
                    <div className="flex justify-between items-center">

                        {/* text */}
                        <div className="w-[62px] h-[27px]">
                            <h1 className="font-figtree font-bold lg:text-[20px] text-base leading-[27px]">Colors</h1>
                        </div>


                        {/* drowpdown */}
                        <div className='w-4 h-4 opacity-60'>
                            <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className=" top-[13.75px] left-[5.25px] object-contain"></Image>
                        </div>


                    </div>
                </div>





                {/* colors */}
                <div className="lg:w-[247px] lg:h-[90px] lg:gap-4 flex flex-col gap-4">

                    <div className="lg:w-[247px] lg:h-[90px] lg:gap-4">
                        {/* row 1 */}
                        <div className="flex justify-start items-center gap-4">
                            <div className="w-[37px] h-[37px] border-2 border-black bg-[#00C12B] border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-[#F50606] border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-[#F5DD06] border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-[#F57906] border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-[#06CAF5] border-opacity-20 rounded-full"></div>
                        </div>
                    </div>


                    <div className="lg:w-[247px] lg:h-[90px] lg:gap-4 flex justify-start items-center">
                        {/* row 2 */}

                        <div className="flex justify-center items-center gap-4">
                            <div className="w-[37px] h-[37px] border-2 border-black bg-[#063AF5] border-opacity-20 rounded-full">
                                {/* correction sign */}
                                
                                    <div className="w-[16.92px] h-[16.92px] mt-[10.58px] lg:w-4 lg:h-4 lg:mt-2.5 lg:ml-2.5">
                                        <Image src={"/correct.png"} alt="correction" width={13} height={9.5} className="w-[13.75px] h-[10.05px] mt-[3.97px] ml-[7.85px] lg:w-[13px] lg:h-[9.5px] lg:mt-[3.75px] lg:ml-[1.75px]"></Image>
                                    </div>
                            </div>


                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-[#7D06F5] border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-[#F506A4] border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-white border-opacity-20 rounded-full"></div>
                            <div className="w-[37px] h-[37px] border-[1px] border-black bg-black border-opacity-20 rounded-full"></div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Colors
