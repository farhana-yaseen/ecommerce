import Image from "next/image"
import SortBy from "./SortBy"

const Casual = () => {
    return (
        <div>
            {/* Casual */}
            <div className="w-full flex justify-around items-center my-8">
                <div className="w-[76px] h-8 top-[149px] left-[100px]  lg:w-[101px] lg:h-[43px]  lg:top-[204px] lg:left-[415px]">
                    <h1 className="font-figtree font-normal text-2xl lg:text-[32px] lg:leading-[43px]">Casual</h1>
                </div>


              {/* for large screen */ }
              <SortBy/>

                {/* for mobile screen */}
                <div className="lg:hidden">
                    <div className="flex justify-between gap-10 items-center">
                        {/* showing product */}
                        <div className="w-[190px] h-2.5 top-[164px] left-[100px]">
                            <h1 className="font-figtree font-normal text-sm  leading-[18.9px]  opacity-60">Showing 1-10 of 100 Products</h1>
                        </div>
                        {/*  sign */}
                        <div className=" w-8 h-8 top-[149px] left-[342px] px-2.5 py-2.5 bg-searchColor rounded-[62px]">
                            <div className="w-4 h-4 flex justify-center items-center">
                                <Image src={"/productDetail/frame.png"} alt="frame" width={14} height={13} layout="responsive" className="top-[1.75px] left-[1.25px] object-contain"></Image>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default Casual
