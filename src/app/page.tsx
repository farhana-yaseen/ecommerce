
import Rectangle2 from "@/components/Rectangle2";
import NewArrivals from "@/components/arrivalItems/NewArrivals";
import TopSelling from "@/components/sellingItems/TopSelling";
import DressStyle from "@/components/DressStyle";
import HappyCustomers from "@/components/HappyCustomers";

export default function Home() {
  return (
    <div className="">
      <Rectangle2 />
      <div className="mt-40">
      <NewArrivals/>
      </div>
      <div className="mt-10 ">
      <TopSelling/>
      </div>
      <div className="py-16">
      <DressStyle/>
      </div>
      <HappyCustomers/>
  
    </div>
  );
}
