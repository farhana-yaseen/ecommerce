import CheckredShirt from "./CheckredShirt"
import GraphicTShirt from "./GraphicTShirt"
import SkinnyFitJeans from "./SkinnyFitJeans"




const YourCart = () => {
    return (
        <div >

            <div className=" w-[358px] h-[389px] top-[203px] ml-4 lg:w-[715px] lg:h-[508px] lg:top-[276px] lg:ml-[100px] rounded-[20px] border-[1px] border-opacity-10 p-3.5 lg:px-6 lg:py-5 ">
                <div className="flex flex-col justify-center items-center gap-8 lg:gap-12">

                    <div>
                        {/* Gradiant Graphic T-Shirt */}
                        <GraphicTShirt />
                    </div>

                    <div>
                        {/* Checkedred Shirt */} 
                        <CheckredShirt />
                    </div>
                    <div>
                        {/* Skinny Fit Jeans */}
                        <SkinnyFitJeans/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default YourCart
