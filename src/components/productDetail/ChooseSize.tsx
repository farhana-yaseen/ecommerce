

const ChooseSize = () => {
    return (
        <div className="w-[353px] h-[65px] top-[947px] left-4 flex flex-col gap-4 xl:gap-6 py-5">
                
                {/* Heading */}
                <div className="w-[80px] h-2.5 ml-4 xl:w-[87px] xl:h-[11px] xl:top-[573px] xl:left-[750px] opacity-60">
                    <h1 className="font-figtree font-normal text-[14px] xl:text-sm leading-[18.9px] xl:leading-[21.6px]">Choose Size</h1>
                </div>

            <div className="w-[353px] h-[39px] ml-4 gap-2 xl:w-[420px] xl:h-[46px] xl:top-[600px] xl:left-[750px] xl:gap-3 flex justify-around items-center">
                {/* small */}
                <div className="w-[74px] h-[39px] rounded-[62px] px-5 py-2.5 bg-searchColor xl:w-[86px] xl:h-[46px] xl:px-6 xl:py-3">
                    <h1 className="w-[34px] h-[19px] xl:w-[38px] xl:h-[22px] font-figtree font-normal text-[14px] xl:text-base leading-[18.9px] xl:leading-[21.6px] opacity-60">Small</h1>
                </div>


                {/* medium */}
                <div className="w-[90px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor xl:w-[105px] xl:h-[46px] xl:px-6 xl:py-3">
                    <h1 className="w-[50px] h-[19px] xl:w-[57px] xl:h-[22px] font-figtree font-normal text-[14px] xl:text-base leading-[18.9px] xl:leading-[21.6px] opacity-60">Medium</h1>
                </div>


                {/* large */}
                <div className="w-[76px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-black xl:w-[89px] xl:h-[46px] xl:px-6 xl:py-3">
                    <h1 className="w-[36px] h-[19px] xl:w-[41px] xl:h-[22px] font-figtree font-normal text-[14px] xl:text-base leading-[18.9px] xl:leading-[21.6px] text-white">Large</h1>
                </div>

                {/* x-large */}
                <div className="w-[89px] h-[39px] rounded-[62px] px-5 py-2.5 gap-3 bg-searchColor xl:w-[104px] xl:h-[46px] xl:px-6 xl:py-3">
                    <h1 className="w-[49px] h-[19px] xl:w-[56px] xl:h-[22px] font-figtree font-normal text-[14px] xl:text-base leading-[18.9px] xl:leading-[21.6px] opacity-60">X-Lage</h1>
                </div>
            </div>


             {/* line */}
             <div className="w-[358px] top-[1036px] ml-4 border-[1px] border-black opacity-10 xl:w-[590px] xl:top-[670px] xl:left-[750px]"></div>
      
        </div>
    )
}

export default ChooseSize


