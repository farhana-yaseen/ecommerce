import Image from "next/image"

const Reviews = () => {
    return (
        <div className="flex justify-between items-center gap-14 my-5">
            <div className="flex gap-1 lg:gap-2">
                {/* All Reviews */}
                <div className="w-[114px] h-[27px] top-[1212px] ml-4 lg:w-[135px] lg:h-8 lg:top-[896px] lg:left-[100px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">All Reviews</h1>
                </div>

                {/* (451) */}
                <div className="w-[29px] h-2.5 top-[1223px] mt-1 lg:mt-0 left-[126px] lg:w-[33px] lg:h-[11px] lg:top-[910px] lg:left-[233px] opacity-60">
                    <h1 className="font-figtree font-m text-sm lg:text-2xl leading-[22px] lg:leading-[32.4px]">(451)</h1>
                </div>
            </div>

            <div className="flex justify-between items-center gap-4">
                {/* symbol */}
                <div className="w-10 h-10 top-[1206px] left-[213px] px-2.5 py-2.5 lg:w-12 lg:h-12 bg-searchColor rounded-[62px] lg:px-3 lg:py-3">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 flex justify-center items-center">
                        <Image src={"/productDetail/frame.png"} alt="frame" width={20} height={19} layout="responsive" className="w-[16.88px] h-[15.63px] top-[2.19px] left-[1.56px] lg:w-full lg:h-full lg:top-[2.63px] lg:left-[1.88px] object-contain"></Image>
                    </div>
                </div>

                {/* Write a Review */}
                <div className="w-[113px] h-10 top-[1206px] left-[261px] px-4 py-3.5 lg:w-[166px] lg:h-12  rounded-[62px] lg:px-4 lg:py-5  bg-black flex items-center justify-between">
                    {/* Text */}
                    <h1 className="w-[81px] h-4 lg:w-[109px] lg:ml-4 lg:h-[22px] font-figtree font-medium text-xs lg:text-base leading-[16.2px] lg:leading-[21.6px] text-white">Write a Review</h1>
                </div>


                {/* Latest text */}
                <div className="hidden lg:block w-[120px] h-12  rounded-[62px] px-4 py-5  bg-searchColor">
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-[43px] h-[22px]">
                            <h1 className="font-figtree font-medium text-base leading-[21.6px]">Latest</h1>
                        </div>

                        {/* symbol) */}
                        <div className="w-4 h-6">
                            <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={6.5} className="w-[11.5px] h-[6.5px] top-[5.25px] left-[2.25px]"></Image>
                        </div>
                    </div>
                </div>

            </div>














        </div>
    )
}

export default Reviews
