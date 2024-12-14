import { BsStarFill, BsStarHalf } from "react-icons/bs"


const ItemDetail = () => {
    return (
        <div>
            <div className="flex flex-col gap-1 lg:gap-4">
        
                <div className="w-[267px] h-[56px] top-[585px] ml-4 lg:w-[600px] lg:h-[48px] lg:top-[216px] lg:left-[750px]">
                    <h1 className="font-fjalla font-bold text-[28px] lg:text-[40px] leading-[28px] lg:leading-[48px] uppercase">One Life Graphic T-shirt</h1>
                </div>

                {/* star & price */}
                <div className="w-[154px] h-[19px] top-[653px] ml-4 gap-[11px] lg:w-[193px] lg:h-[24.71px] lg:top-[278px] lg:left-[750px] flex justify-center items-center">
                    <div className="w-[105px] h-[18.67px] gap-[5.36px] lg:w-[139px] lg:h-[24.71px] lg:gap-[7.1px] flex justify-center items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] lg:w-[24.71px] lg:h-[24.71px]" />
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] lg:w-[24.71px] lg:h-[24.71px]" />
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] lg:w-[24.71px] lg:h-[24.71px]" />
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] lg:w-[24.71px] lg:h-[24.71px]" />
                        <BsStarHalf className="text-starColor w-[18.67px] h-[18.67px] lg:w-[24.71px] lg:h-[24.71px]" />
                    </div>
                    <div className="w-[33px] h-[19px] lg:w-[38px] lg:h-[22px]">
                        {/* rate */}

                        <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">4.5/<span className="opacity-60">5</span></h1>
                    </div>

                </div>


                {/* price */}
                <div className="w-[205px] h-8 top-[684px] ml-4  gap-2.5 lg:gap-5 flex justify-start items-center ">
                    <div className="w-[61px] h-8 lg:w-[81px] lg:h-[43px]">
                        <h1 className="font-figtree font-bold text-2xl lg:text-[32px] leading-[32.4px] lg:leading-[43.2px]">$260</h1>
                    </div>

                    {/* price strike */}
                    <div className="w-[62px] lg:w-[83px] lg:h-[42px]">
                        <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[32.4px] lg:leading-[43.2px] line-through text-black opacity-40">$300</h1>
                    </div>

                    {/* -20% */}
                    <div className="w-[62px] h-[31px] lg:w-[72px] lg:h-[34px] lg:top-[321px] lg:left-[938px] rounded-[62px] px-3 py-1.5 bg-percentage bg-opacity-10">
                        <h1 className="w-[38px] h-[19px] lg:w-[44px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-percentage">-40%</h1>
                    </div>
                </div>


            {/* Text */}
            <div className="w-[358px] h-[50px] top-[736px] ml-4 lg:w-[590px] lg:h-[33px] lg:top-[380px] lg:left-[750px] opacity-60">
                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[16.2px] lg:leading-[18.9px]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</h1>
            </div>
            </div>
        

            {/* line */}
            <div className="w-[358px] top-[810px] left-4 border-[1px] lg:w-[590px] lg:top-[549px] lg:left-[750px] opacity-10"></div>



        </div>
    )
}

export default ItemDetail
