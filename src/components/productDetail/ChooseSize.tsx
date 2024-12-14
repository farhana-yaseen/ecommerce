

const ChooseSize = () => {
    return (
        <div className="w-[353px] h-[65px] top-[947px] left-4 flex flex-col gap-4 lg:gap-6">
                
                {/* Heading */}
                <div className="w-[80px] h-2.5 ml-4 lg:w-[87px] lg:h-[11px] lg:top-[573px] lg:left-[750px] opacity-60">
                    <h1 className="font-figtree font-normal text-[14px] lg:text-sm leading-[18.9px] lg:leading-[21.6px]">Choose Size</h1>
                </div>

            <div className="w-[353px] h-[39px] ml-4 gap-2 lg:w-[420px] lg:h-[46px] lg:top-[600px] lg:left-[750px] lg:gap-3 flex justify-around items-center">
                {/* small */}
                <div className="w-[74px] h-[39px] rounded-[62px] px-5 py-2.5 bg-searchColor lg:w-[86px] lg:h-[46px] lg:px-6 lg:py-3">
                    <h1 className="w-[34px] h-[19px] lg:w-[38px] lg:h-[22px] font-figtree font-normal text-[14px] lg:text-base leading-[18.9px] lg:leading-[21.6px] opacity-60">Small</h1>
                </div>


                {/* medium */}
                <div className="w-[90px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor lg:w-[105px] lg:h-[46px] lg:px-6 lg:py-3">
                    <h1 className="w-[50px] h-[19px] lg:w-[57px] lg:h-[22px] font-figtree font-normal text-[14px] lg:text-base leading-[18.9px] lg:leading-[21.6px] opacity-60">Medium</h1>
                </div>


                {/* large */}
                <div className="w-[76px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-black lg:w-[89px] lg:h-[46px] lg:px-6 lg:py-3">
                    <h1 className="w-[36px] h-[19px] lg:w-[41px] lg:h-[22px] font-figtree font-normal text-[14px] lg:text-base leading-[18.9px] lg:leading-[21.6px] text-white">Large</h1>
                </div>

                {/* x-large */}
                <div className="w-[89px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor lg:w-[104px] lg:h-[46px] lg:px-6 lg:py-3">
                    <h1 className="w-[49px] h-[19px] lg:w-[56px] lg:h-[22px] font-figtree font-normal text-[14px] lg:text-base leading-[18.9px] lg:leading-[21.6px] opacity-60">X-Lage</h1>
                </div>

            </div>

             {/* line */}
             <div className="w-[358px] top-[1036px] ml-4 border-[1px] border-black opacity-10 lg:w-[590px] lg:top-[670px] lg:left-[750px]"></div>
      
        </div>
    )
}

export default ChooseSize


