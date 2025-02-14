import Image from "next/image"

const DressStyleList = () => {
    return (
        <div>
            {/* heading */}
            <div className="w-[353px] h-[27px] top-[806px] left-[19px] lg:w-[247px] flex justify-between items-center">

                {/* text */}
                <div className="w-[113px] h-[27px]">
                    <h1 className="font-figtree font-bold lg:text-[20px] text-base leading-[27px]">Dress Style</h1>
                </div>

                {/* drowpdown */}
                <div className='w-4 h-4 opacity-60'>
                    <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className=" top-[13.75px] left-[5.25px] object-contain"></Image>
                </div>
            </div>


            <div className="w-[353px] h-[124px] top-[849px] left-[19px] gap-3 lg:w-[247px] lg:h-[171px]  flex flex-col justify-center lg:gap-4 items-center">

                {/* Casual */}
                <div className="w-[353px] h-4 lg:w-[247px]">

                    <div className="flex justify-between items-center">
                        {/* Text */}
                        <div className="w-[48px] h-[11px] opacity-60">
                            <h1 className="font-figtree font-normal text-base leading-[21.6px]">Casual</h1>
                        </div>

                        {/* dropdown sign */}
                        <div className='w-4 h-4 opacity-60'>

                            <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className="top-[13.75px] left-[5.25px] object-contain"></Image>

                        </div >
                    </div>
                </div>


                {/* Formal */}
                <div className="w-[353px] h-4 lg:w-[247px]">

                    <div className="flex justify-between items-center">
                        {/* Text */}
                        <div className="w-[49px] h-[11px] opacity-60">
                            <h1 className="font-figtree font-normal text-base leading-[21.6px]">Formal</h1>
                        </div>

                        {/* dropdown sign */}
                        <div className='w-4 h-4 opacity-60'>

                            <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className="top-[13.75px] left-[5.25px] object-contain"></Image>

                        </div >
                    </div>
                </div>


                {/* Party */}

                <div className="w-[353px] h-4 lg:w-[247px]">

                    <div className="flex justify-between items-center">
                        {/* Text */}
                        <div className="w-[36px] h-[11px] opacity-60">
                            <h1 className="font-figtree font-normal text-base leading-[21.6px]">Party</h1>
                        </div>

                        {/* dropdown sign */}
                        <div className='w-4 h-4 opacity-60'>

                            <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className="top-[13.75px] left-[5.25px] object-contain"></Image>

                        </div >
                    </div>
                </div>



                {/* Gym */}
                <div className="w-[353px] h-4 lg:w-[247px]">

                    <div className="flex justify-between items-center">
                        {/* Text */}
                        <div className="w-[33px] h-[11px] opacity-60">
                            <h1 className="font-figtree font-normal text-base leading-[21.6px]">Formal</h1>
                        </div>

                        {/* dropdown sign */}
                        <div className='w-4 h-4 opacity-60'>

                            <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className="top-[13.75px] left-[5.25px] object-contain"></Image>

                        </div >
                    </div>
                </div>

            </div>
















        </div>
    )
}

export default DressStyleList
