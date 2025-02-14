import Image from "next/image"

const Size = () => {
    return (
        <div>
            {/* heading */}
            <div className="w-[353px] h-[27px] top-[590px] left-[19px] lg:w-[247px] flex justify-between items-center">

                {/* text */}
                <div className="w-[38px] h-[27px]">
                    <h1 className="font-figtree font-bold lg:text-[20px] text-base leading-[27px]">Size</h1>
                </div>

                {/* drowpdown */}
                <div className='w-4 h-4 opacity-60'>
                    <Image src={"/header/dropdown.png"} alt="dropdown" width={12} height={7} className=" top-[13.75px] left-[5.25px] object-contain rotate-180"></Image>
                </div>
            </div>




            {/* buttons/tabs */}
            <div className="w-[353px] h-[133px] top-[633px] left-[19px] gap-2 lg:gap-3 lg:w-[247px] lg:h-[227px] flex justify-start items-center flex-wrap mt-2">

                {/* xx-small */}
                <div className="w-[96px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-16 h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">XX-Small</h1>
                </div>

                {/* x-small */}
                <div className="w-[88px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-14 h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">X-Small</h1>
                </div>

                {/* small */}
                <div className="w-[74px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-[34px] h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">Small</h1>
                </div>

                {/* Medium */}
                <div className="w-[90px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-[50px] h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">Medium</h1>
                </div>

                {/* Large */}
                <div className="w-[76px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-black">
                    <h1 className="w-[36px] h-[19px] font-figtree font-normal text-sm leading-[19px] text-white">Large</h1>
                </div>

                 {/* x-Large */}
                 <div className="w-[89px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-[55px] h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">X-Large</h1>
                </div>

                 {/* xx-Large */}
                 <div className="w-[98px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-[60px] h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">XX-Large</h1>
                </div>

                 {/* 3x-Large */}
                 <div className="w-[97px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-[60px] h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">3X-Large</h1>
                </div>

                 {/* 4x-Large */}
                 <div className="w-[98px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor">
                    <h1 className="w-[60px] h-[19px] font-figtree font-normal text-sm leading-[19px] opacity-60">4X-Large</h1>
                </div>

            </div>

            {/* line */}
            <div className="w-[353px] top-[786px] left-[19px] lg:w-[247px] border-[1px] border-black opacity-10 mt-10"></div>

        </div>
    )
}

export default Size
