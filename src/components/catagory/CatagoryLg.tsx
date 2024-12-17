import Filters from "./Filters"
import ProductWithPrice from "./ProductWithPrice"


const CatagoryLg = () => {
  return (
    <div>
        <div className="lg:flex justify-center gap-16 mt-16">
        <Filters/>
        <ProductWithPrice/>
      </div>
      
    </div>
  )
}

export default CatagoryLg
