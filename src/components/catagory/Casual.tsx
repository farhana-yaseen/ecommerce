import Image from "next/image"

const Casual = () => {
    return (
        <div>
            {/* Casual */}
            <div className="flex justify-between items-center mb-5 mx-4">
                <div className="w-[76px] h-8 top-[149px] left-[100px] lg:w-[101px] lg:h-[43px]  lg:top-[204px] lg:left-[415px] ">
                    <h1 className="font-figtree font-normal text-2xl lg:text-[32px] lg:leading-[43px]">Casual</h1>
                </div>
<div className="flex items-center justify-end gap-5">

                {/* showing product */}
                <div className="w-[190px] h-2.5 top-[164px] left-[100px] lg:w-[220px] lg:h-[11px] flex justify-between gap-10 items-center">
                    <h1 className="font-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6] opacity-60">Showing 1-10 of 100 Products</h1>
                </div>

                
                    <div className="hidden lg:block" >
                <div className=" w-[175px] h-4  lg:w-[209px] lg:h-[11px]" >

                        <div className="flex justify-center items-center gap-2" >
                            {/* Text */}
                            <div className="w-[155px] h-4 opacity-60">
                                <h1 className="font-figtree font-normal text-sm lg:text-base leading-[21.6px]">Sort by: <span className="font-medium text-black text-opacity-100 ">Most Popular</span></h1>
                            </div>

                            {/* dropdown sign */}
                            <div className='w-4 h-4 opacity-60 top-6'>
                                <Image src={"/header/dropdown.png"} alt="dropdown" width={11.5} height={7} className="object-contain"></Image>
                            </div >
                        </div >
                    </div>
                </div>



                    {/*  sign */}
                <div className="lg:hidden w-8 h-8 top-[149px] left-[342px] px-2.5 py-2.5 bg-searchColor rounded-[62px]">
                    <div className="w-4 h-4 flex justify-center items-center">
                        <Image src={"/productDetail/frame.png"} alt="frame" width={14} height={13} layout="responsive" className="top-[1.75px] left-[1.25px] object-contain"></Image>
                    </div>
                </div>




            </div>



</div>



        </div>
    )

}

export default Casual
