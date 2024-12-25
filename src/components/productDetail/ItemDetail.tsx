import { BsStarFill, BsStarHalf } from "react-icons/bs"
import SelectColor from "./SelectColor"
import ChooseSize from "./ChooseSize"
import AddToCart from "./AddToCart"


const ItemDetail = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 xl:gap-6 m-auto mt-10 xl:mt-0">
        
                <div className="w-[267px] h-[56px] top-[585px] ml-4 xl:w-[600px] xl:h-[48px] xl:top-[216px] xl:left-[750px]">
                    <h1 className="font-fjalla font-bold text-[28px] xl:text-[40px] leading-[28px] xl:leading-[48px] uppercase">One Life Graphic T-shirt</h1>
                </div>

                {/* star & price */}
                <div className="w-[154px] h-[19px] top-[653px] ml-4 gap-[11px] xl:w-[193px] xl:h-[24.71px] xl:top-[278px] xl:left-[750px] flex justify-center items-center">
                    <div className="w-[105px] h-[18.67px] gap-[5.36px] xl:w-[139px] xl:h-[24.71px] xl:gap-[7.1px] flex justify-center items-center">
                        {/* stars */}
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] xl:w-[24.71px] xl:h-[24.71px]" />
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] xl:w-[24.71px] xl:h-[24.71px]" />
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] xl:w-[24.71px] xl:h-[24.71px]" />
                        <BsStarFill className="text-starColor w-[18.67px] h-[18.67px] xl:w-[24.71px] xl:h-[24.71px]" />
                        <BsStarHalf className="text-starColor w-[18.67px] h-[18.67px] xl:w-[24.71px] xl:h-[24.71px]" />
                    </div>
                    <div className="w-[33px] h-[19px] xl:w-[38px] xl:h-[22px]">
                        {/* rate */}

                        <h1 className="font-figtree font-normal text-xs xl:text-sm leading-[16.2px] xl:leading-[18.9px]">4.5/<span className="opacity-60">5</span></h1>
                    </div>

                </div>


                {/* price */}
                <div className="w-[205px] h-8 top-[684px] ml-4  gap-2.5 xl:gap-5 flex justify-start items-center ">
                    <div className="w-[61px] h-8 xl:w-[81px] xl:h-[43px]">
                        <h1 className="font-figtree font-bold text-2xl xl:text-[32px] leading-[32.4px] xl:leading-[43.2px]">$260</h1>
                    </div>

                    {/* price strike */}
                    <div className="w-[62px] xl:w-[83px] xl:h-[42px]">
                        <h1 className="font-figtree font-bold text-xl xl:text-2xl leading-[32.4px] xl:leading-[43.2px] line-through text-black opacity-40">$300</h1>
                    </div>

                    {/* -20% */}
                    <div className="w-[62px] h-[31px] xl:w-[72px] xl:h-[34px] xl:top-[321px] xl:left-[938px] rounded-[62px] px-3 py-1.5 bg-percentage bg-opacity-10">
                        <h1 className="w-[38px] h-[19px] xl:w-[44px] xl:h-[22px] font-figtree font-medium text-sm xl:text-base leading-[18.9px] xl:leading-[21.6px] text-percentage">-40%</h1>
                    </div>

                </div>
            {/* Text */}
            <div className="w-[358px] h-[50px] top-[736px] ml-4 xl:w-[590px] xl:h-[33px] xl:top-[380px] xl:left-[750px] opacity-60">
                <h1 className="font-figtree font-normal text-sm xl:text-base leading-[16.2px] xl:leading-[18.9px]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</h1>
            </div>
        

            {/* line */}
            <div className="w-[358px] top-[810px] ml-4 border-[1px] border-black xl:w-[590px] xl:top-[549px] xl:left-[750px] opacity-10"></div>

            <SelectColor/>
            <ChooseSize/>
            <AddToCart/>
            </div>
        </div>
    )
}

export default ItemDetail
