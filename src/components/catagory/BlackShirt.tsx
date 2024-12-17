import Image from "next/image"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const BlackShirt = () => {
    return (
         <div className="flex flex-col justify-between gap-1 lg:gap-2 ml-4">
        
                    {/* Image */}
                    <div className="w-[172px] h-[174px] top-[491px] left-4 rounded-[13.42px] bg-newArravialbg lg:w-[295px] lg:h-[298px] lg:top-[263px] lg:left-[1045px] lg:rounded-[20px] overflow-hidden">
                        <Image src={"/catagory/blackstriped.png"} alt="Black T-Shirt" width={296} height={444} layout="responsive" className="w-[172px] h-[258px] lg:w-full lg:h-full top:[-42px] lg:top-[-73px] left-[1px] object-contain"></Image>
                    </div>
        
                    <div className="w-[150px] h-[22px] top-[375px] left-4 lg:w-[200px] lg:h-[27px] lg:top-[577px] lg:left-[1045px]">
                        <h1 className="font-figtree font-bold text-sm lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">Black Striped T-shirt</h1>
                    </div>
        
        
                    {/* star & price */}
                    <div className="w-[117px] h-4 top-[701px] left-4 gap-[11px] lg:w-[160px] lg:h-[19px] lg:top-[612px] lg:left-[1045px] lg:gap-[13px] flex justify-between items-center">
                        <div className="w-[75px] h-[15.47px] gap-[4.44px] lg:w-[114px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-start items-center">
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
                    <div className="w-[144px] h-[27px] top-[721px] left-4 gap-[5px] lg:w-[188px] lg:h-8 lg:top-[639px] lg:left-[1445px] lg:gap-[10px] flex justify-center items-center">
        
                        {/* $120 */}
                    <div className="w-[46px] h-[27px] lg:w-[55px] lg:h-[32px]">
                        <h1 className="font-figtree font-bold text-xl leading-[27px]">$120</h1>
                    </div>
        
                        {/* $150 */}
                        <div className="w-[48px] h-[27px] lg:w-[55px] lg:h-8">
                            <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-32.4 line-through text-black opacity-40">$150</h1>
                        </div>
        
                        {/* -30% */}
                        <div className="w-[42px] h-5 rounded-[62px] px-3.5 py-1.5 gap-3 lg:w-[58px] lg:h-7 bg-percentage bg-opacity-10">
                            <h1 className="w-[26px] h-3.5 lg:w-8 lg:4 font-figtree font-medium text-[10px] lg:text-xs leading-[13.5px] text-percentage ">-30%</h1>
                        </div>
                    </div>
        
        
                </div>
    )
}

export default BlackShirt
