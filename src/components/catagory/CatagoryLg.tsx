import Filters from "./Filters"
import ProductWithPrice from "./ProductWithPrice"


const CatagoryLg = () => {
  return (
    <div className="lg:w-[1020px] xl:w-full">
        <div className=" lg:flex justify-center gap-10 xl:gap-16 mt-16 my-10">
        <Filters/>
        <ProductWithPrice/>
      </div>
      
    </div>
  )
}

export default CatagoryLg
