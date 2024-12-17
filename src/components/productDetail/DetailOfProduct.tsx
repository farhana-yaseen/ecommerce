
import ItemDetail from "@/components/productDetail/ItemDetail"
import MiddleNav from "./MiddleNav"
import Reviews from "./Reviews"
import LoadMore from "./LoadMore"
import AlsoLike from "./AlsoLike"
import ProductItem from "./ProductItem"
import Nav from "./Nav"
import UserReview from "./UserReview"


const DetailOfProduct = () => {
  return (
    <div className="w-[390px] h-[3553px] left-[3550px] lg:w-[1440px] lg:h-[3066px] lg:left-[2070px] flex flex-col gap-5 m-auto">

      <Nav/>
      <div className="lg:flex justify-center gap-10 items-start lg:mt-12">
      <ProductItem/>
      <ItemDetail/>
      </div>

      <MiddleNav/>
      <Reviews/>
      <UserReview/>
      <LoadMore/>
      <AlsoLike/>
    </div>
  )
}

export default DetailOfProduct
