
import ChooseSize from "./ChooseSize"
import { DetailProps } from "./DetailOfProduct"


const ItemDetail = ({singleProduct}:DetailProps) => {
    
    const discountPercentage = singleProduct.price * singleProduct.discountPercent/100
    const discountedPrice = singleProduct.price-discountPercentage
    
    return (
        <div className="md:mx-52 lg:mx-0">
            <div className="flex flex-col gap-4 lg:gap-6 mt-10 lg:mt-0">
        
                <div className="w-[267px] h-[56px] top-[585px] ml-4 lg:w-[650px] lg:h-[48px] lg:top-[216px] lg:left-[750px]">
                    <h1 className="font-fjalla font-bold text-[28px] lg:text-[38px] leading-[28px] lg:leading-[48px] uppercase">{singleProduct.name}</h1>
                </div>


                {/* price */}
                <div className="w-[205px] h-8 top-[684px] ml-4  gap-2.5 lg:gap-5 flex justify-start items-center ">
                    <div className="w-[61px] h-8 lg:w-[81px] lg:h-[43px]">
                        <p className="font-figtree font-bold text-2lg lg:text-[32px] leading-[32.4px] lg:leading-[43.2px]">${discountedPrice}</p>
                    </div>

                    {/* price strike */}
                    <div className="w-[62px] lg:w-[83px] lg:h-[42px]">
                        <h1 className="font-figtree font-bold text-lg lg:text-2lg leading-[32.4px] lg:leading-[43.2px] line-through text-black opacity-40">${singleProduct.price}</h1>
                    </div>

                    {/* -20% */}
                    <div className="w-[62px] h-[31px] lg:w-[72px] lg:h-[34px] lg:top-[321px] lg:left-[938px] rounded-[62px] px-3 py-1.5 bg-percentage bg-opacity-10">
                        <h1 className="w-[38px] h-[19px] lg:w-[44px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-percentage">-20%</h1>
                    </div>

                </div>

            {/* Description */}
            <div className="w-[358px] h-[50px] top-[736px] ml-4 lg:w-[590px] lg:h-[33px] lg:top-[380px] lg:left-[750px] opacity-60">
                <p className="font-figtree font-normal text-sm lg:text-base leading-[16.2px] lg:leading-[18.9px] text-justify">{singleProduct.description}</p>
            </div>
        

            {/* line */}
            <div className="w-[358px] top-[810px] ml-4 mt-32 border-[1px] border-black lg:w-[590px] lg:top-[549px] lg:left-[750px] opacity-10 lg:mt-24"></div>

            {/* <SelectColor/> */}
            <ChooseSize singleProduct={singleProduct}/>   
        
            </div>
        </div>
    )
}

export default ItemDetail
