import AddToCart from "@/components/productDetail/AddToCart"
import ChooseSize from "@/components/productDetail/ChooseSize"
import ItemDetail from "@/components/productDetail/ItemDetail"
import SelectColor from "@/components/productDetail/SelectColor"

const DetailOfProduct = () => {
  return (
    <div>
      <ItemDetail/>
      <SelectColor/>
      <ChooseSize/>
      <AddToCart/>
    </div>
  )
}

export default DetailOfProduct
