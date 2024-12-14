import Image from "next/image"

const ProductItem = () => {
    return (
        <div>

            {/* Display Image */}
            <div className="w-[358px] h-[290px] top-[157px] left-4 lg:w-[444px] lg:h-[530px] lg:top-[216px] lg:left-[266px] rounded-[20px] bg-newArravialbg">
                <Image src={"/producDetail/display.png"} alt="T-Shirt" width={444} height={530} className="object-contain"></Image>
            </div>

            {/* 3 Images */}
            <div>
            {/* Image 1 */}
            <div className="w-[111px] h-[106px] top-[459px] left-4 border-[1px] lg:w-[152px] lg:h-[167px] lg:top-[216px] lg:left-[100px] rounded-[20px] bg-productbg">
                <Image src={"/producDetail/display.png"} alt="T-Shirt" width={152} height={167} className="object-contain"></Image>
            </div>


            {/* Image 2 */}
            <div className="w-[112px] h-[106px] top-[459px] left-[139px] lg:w-[152px] lg:h-[168px] lg:top-[397px] lg:left-[100px] rounded-[20px] bg-newArravialbg">
                <Image src={"/producDetail/2.png"} alt="T-Shirt" width={152} height={168} className="object-contain"></Image>
            </div>


            {/* Image 3 */}
            <div className="w-[111px] h-[106px] top-[459px] left-[263px] lg:w-[152px] lg:h-[167px] lg:top-[579px] lg:left-[100px] rounded-[20px] bg-productbg3">
                <Image src={"/producDetail/2.png"} alt="T-Shirt" width={152} height={167} className="object-contain"></Image>
            </div>

            </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        </div>
    )
}

export default ProductItem
