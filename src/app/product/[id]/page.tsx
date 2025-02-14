
import DetailOfProduct from "@/components/productDetail/DetailOfProduct"
import {  getProduct } from "@/helper"
import { Product } from "@/type"
import { notFound } from "next/navigation"


const ProductDetailPage = async ({params}:{params:{id:string}}) => {

  const productData = await getProduct()
  const singleProduct = productData.find((f:Product)=>f._id === params.id)

  if (!singleProduct) {
    notFound(); // This triggers the built-in 404 page

  }



  return (
    <div>
      {/* <Detail singleProduct={singleProduct}/> */}
      <DetailOfProduct singleProduct={singleProduct}/>
      
    </div>
  )
}

export default ProductDetailPage



