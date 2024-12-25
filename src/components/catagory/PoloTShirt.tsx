import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const PoloTShirt = () => {
    return (
         <div className="flex flex-col justify-center gap-1 xl:gap-2 ml-4">
        
                    {/* Image */}
                    <div className="w-[172px] h-[174px] top-[210px] left-[202px] rounded-[13.42px] bg-newArravialbg xl:w-[295px] xl:h-[298px] xl:top-[263px] xl:left-[730px] xl:rounded-[20px] overflow-hidden">
                        <Image src={"/catagory/tipping.png"} alt="Graphic T-Shirt" width={296} height={444} layout="responsive" className="w-[172px] h-[258px] xl:w-full xl:h-full top:[-42px] xl:top-[-73px] left-[1px] object-contain"></Image>
                    </div>
        
                    <div className="w-[169px] h-[22px] top-[394px] left-[202px] xl:w-[241px] xl:h-[27px] xl:top-[577px] xl:left-[730px]">
                        <h1 className="font-figtree font-bold text-sm xl:text-xl leading-[21.6px] xl:leading-[27px] capitalize">Polo with Tipping Details</h1>
                    </div>
        
        
                    {/* star & price */}
                    <div className="w-[127px] h-4 top-[420px] left-[202px] gap-[11px] xl:w-[150px] xl:h-[19px] xl:top-[612px] xl:left-[730px] xl:gap-[13px] flex justify-between items-center">
                        <div className="w-[87px] h-[15.47px] gap-[4.44px] xl:w-[104px] xl:h-[18.49px] xl:gap-[5.31px] flex justify-start items-center">
                            {/* stars */}
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                            <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] xl:w-[18.49px] xl:h-[18.49px]" />
                        </div>
                        <div className="w-7 h-4 xl:w-[33px] xl:h-[19px]">
                            {/* rate */}
                            <h1 className="font-figtree font-normal text-xs xl:text-sm leading-[16.2px] xl:leading-[18.9px]">4.5/<span>5</span></h1>
                        </div>
                    </div>
        
                    {/* price */}
                    <div className="hidden xl:block xl:w-[56px] xl:h-8 xl:top-[639px] xl:left-[730px] xl:gap-[10px]">
                        <h1 className="font-figtree font-bold xl:text-2xl xl:leading-[32.4px]">$180</h1>
                    </div>
        
        
        
        
                    {/* price */}
                    <div className=" xl:hidden w-[147px] h-[27px] top-[439.99px] left-[202px] gap-[5px] flex justify-center items-center">
        
                        {/* $180 */}
                    <div className="w-[47px] h-[27px]">
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$145</h1>
                    </div>
        
                        {/* $242 */}
                        <div className="w-[48px] h-[27px]">
                            <h1 className="font-figtree font-bold text-xl leading-[27px] line-through text-black opacity-40">$242</h1>
                        </div>
        
                        {/* -20% */}
                        <div className="w-[42px] h-5 rounded-[62px] px-3.5 py-1.5 gap-3 bg-percentage bg-opacity-10">
                            <h1 className="w-[26px] h-3.5 font-figtree font-medium text-[10px] xl:text-xs leading-[13.5px] text-percentage ">-20%</h1>
                        </div>
                    </div>
        
        
                </div>
    )
}

export default PoloTShirt
