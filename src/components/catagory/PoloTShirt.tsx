import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const PoloTShirt = () => {
    return (
         <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">
        
                    {/* Image */}
                    <div className="w-[172px] h-[174px] top-[210px] left-[202px] rounded-[13.42px] bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[263px] lg:left-[730px] lg:rounded-[20px] overflow-hidden">
                        <Image src={"/catagory/tipping.png"} alt="Graphic T-Shirt" width={296} height={444} layout="responsive" className="w-[172px] h-[258px] lg:w-full lg:h-full top:[-42px] lg:top-[-73px] left-[1px] object-contain"></Image>
                    </div>
        
                    <div className="w-[169px] h-[22px] top-[394px] left-[202px] lg:w-[241px] lg:h-[27px] lg:top-[577px] lg:left-[730px]">
                        <h1 className="font-figtree font-bold text-sm lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">Polo with Tipping Details</h1>
                    </div>
        
        
                    {/* star & price */}
                    <div className="w-[127px] h-4 top-[420px] left-[202px] gap-[11px] lg:w-[150px] lg:h-[19px] lg:top-[612px] lg:left-[730px] lg:gap-[13px] flex justify-between items-center">
                        <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[104px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-start items-center">
                            {/* stars */}
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                            <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                        </div>
                        <div className="w-7 h-4 lg:w-[33px] lg:h-[19px]">
                            {/* rate */}
                            <h1 className="font-figtree font-normal text-xs lg:text-sm leading-[16.2px] lg:leading-[18.9px]">4.5/<span>5</span></h1>
                        </div>
                    </div>
        
                    {/* price */}
                    <div className="hidden lg:block lg:w-[56px] lg:h-8 lg:top-[639px] lg:left-[730px] lg:gap-[10px]">
                        <h1 className="font-figtree font-bold lg:text-2xl lg:leading-[32.4px]">$180</h1>
                    </div>
        
        
        
        
                    {/* price */}
                    <div className=" lg:hidden w-[147px] h-[27px] top-[439.99px] left-[202px] gap-[5px] flex justify-center items-center">
        
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
                            <h1 className="w-[26px] h-3.5 font-figtree font-medium text-[10px] lg:text-xs leading-[13.5px] text-percentage ">-20%</h1>
                        </div>
                    </div>
        
        
                </div>
    )
}

export default PoloTShirt
