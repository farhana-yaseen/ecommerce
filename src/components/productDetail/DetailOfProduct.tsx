
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
    <div className="w-[390px] left-[3550px] md:w-full md:left-4 xl:w-[1440px] xl:left-[2070px] gap-5">

      <Nav/>
      <div className="lg:flex justify-center lg:gap-4 xl:gap-10 items-start lg:my-12">
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
