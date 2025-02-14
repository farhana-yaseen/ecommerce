
import Rectangle2 from "@/components/heroSection/Rectangle2";
import TopSelling from "@/components/sellingItems/TopSelling";
import HappyCustomers from "@/components/happyCustomers/HappyCustomers";
import DressStyle from "@/components/dressStyle/DressStyle";
import NewArrivals from "@/components/arrivalItems/NewArrivals";
import {  getProduct} from "@/helper";





export default async function Home() {
  const products = await getProduct()
  
  
  return (
    <div className="m-auto">
      <Rectangle2 />
      <div>
      <NewArrivals products={products}/>
      </div>
      <div className="">
      <TopSelling products={products} />
      </div>
      <div className="">
      <DressStyle/>
      </div>
      <HappyCustomers/>
      
  
    </div>
  );
}
