

const MiddleNav = () => {
    return (
        <div className="my-10">
            <div className="w-full flex justify-between items-center">
                {/* Product Detail */}
                <div className="w-[127px] h-[11px] top-[1154.5px] ml-4 xl:w-[147px] xl:h-3.5 xl:top-[826px] xl:left-[240px] opacity-60">
                    <h1 className="font-figtree font-bold text-base lg:text-xl leading-[22px]">Product Details</h1>
                </div>


                {/* Rating & Review */}
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="w-[143px] h-3 top-[1154.5px] left-[168px] lg:w-[168px] lg:h-3.5 lg:top-[826px] lg:left-[642px] ">
                        <h1 className="font-figtree font-bold text-base lg:text-xl leading-[22px]">Rating & Reviews</h1>
                    </div>
                    {/* line */}
                    <div className="w-[143px] top-[1186px] left-[168px] border-2 border-black lg:w-[414px] lg:top-[864px] lg:left-[513px] "></div>
                </div>


                {/* FAQs */}
                <div className="w-[38px] h-[11px] top-[1154.5px] left-[336px] lg:w-[47px] lg:h-3.5 lg:top-[826px] lg:left-[1110px] opacity-60 mx-2">
                    <h1 className="font-figtree font-bold text-base lg:text-xl leading-[22px]">FAQs</h1>
                </div>
            </div>

        </div>
    )
}

export default MiddleNav
