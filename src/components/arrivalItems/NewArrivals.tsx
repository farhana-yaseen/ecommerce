"use client"

import { Product } from "@/type"
import Image from "next/image"
import Link from "next/link"
import {  useState } from "react"
import { useCart } from "@/CartContextProvider";

interface NewArrivalItems {
  products: Product[]
}

const NewArrivals = ({ products }: NewArrivalItems) => {

  // View button
  const [viewAll, setViewAll] = useState(false)
  const itemsToDisplay = viewAll ? products : products.slice(0, 4); // Show all or just the first 4 items

  // Add to cart button
  const { addToCart } = useCart()
  const handleAddToCart = (product: Product, color:string, size:string) => {
    // const selectedColor = color || product.colors[1]; // Use default color if not selected
    // const selectedSize = size || product.sizes[2]; // Use default size if not selected
  
    addToCart(product, color, size);  // Add item to the cart
    alert(`${product.name} has been added to your cart!`);
  };



  return (

    <div id="arrival" className="mt-52">

      <div className="w-[269px] h-[38px] top-[114px] ml-[61px] md:w-full xl:w-[403px] xl:h-[58px] xl:top-[991px] xl:ml-[518px] flex justify-center items-center ">
        <h1 className="font-fjalla font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">new arrivals</h1>
      </div>

      {/* image and detail start*/}
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12 xl:gap-16 xl:grid-cols-4">

        {
          itemsToDisplay.map((p: Product) => {
            return (
              <div key={p._id} className="w-[210px] h-[320px] top-[1217px] left-4 md:left-6 lg:w-[310px] lg:h-[420px] lg:top-[1104px] lg:left-[100px] mx-2 hover:scale-110 transition-all duration-200 ease-out shadow-md">
                <Link href={`/product/${p._id}`}>
                  {/* for image */}
                  <div className="w-[198px] h-[200.01px] top-[1217px] left-4 md:left-6 lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px] overflow-hidden mx-2">
                    <span className="p-1 lg:p-2 rounded-md font-figtree font-bold text-[10px] lg:text-sm bg-starColor text-red-600 absolute">New Arrival</span>
                    <Image src={p.imageUrl} alt={p.name} width={295} height={295} layout="responsive" className="w-full h-full top-[-73px] left-[-1px] object-contain" />
                  </div>

                </Link>
                {/* for text */}
                <div className="flex flex-col justify-center">

                  {/* for name */}
                  <div className="w-[180px]  top-[1427.01px] ml-4 lg:w-[300px] lg:top-[1418px] lg:left-[100px]">
                    <p className="font-figtree font-bold text-base lg:text-lg capitalize">{p.name}</p>
                  </div>

                  {/* Price */}
                  <div className="w-[46px] h-[27px] top-[1473px] ml-4 lg:w-[55px] lg:h-8 lg:top-[1480px] lg:left-[100px] lg:gap-[10px]">
                    <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">${p.price}</h1>
                  </div>

                  {/* Add to Cart button */}
                  <div onClick={() => handleAddToCart(p,p.sizes[2], p.colors[1])} className="mx-auto cursor-pointer">
                    <button className="font-figtree font-bold text-base lg:text-xl text-center text-red-600 bg-starColor w-40 h-7 lg:w-60 lg:h-9 rounded-lg ">Add to Cart</button>
                  </div>

                </div>

              </div>
            )
          })
        }

      </div>
      {/* image and detail end*/}


      {/* button and line */}

      {/* View All Button */}
      <div onClick={() => setViewAll(!viewAll)} className="w-[358px] h-[46px] top-[1524px] ml-16 lg:w-[218px] lg:h-[52px] lg:top-[1548px] lg:ml-[611px] border-[1px] border-opacity-10 rounded-[62px] px-[54px] flex justify-center items-center cursor-pointer lg:mb-10">
        <button className="w-[75px] h-[19px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-black text-center left-24 lg:left-6">
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>

      {/* Line */}
      <div className="w-[358px] top-[1610px] ml-6 md:w-[700px] md:ml-12 lg:w-[900px] xl:w-[1240px] xl:top-[1664px] xl:ml-[100px] border-[1px] border-opacity-10 mx-auto"></div>


    </div>
















































































    // <div className="mt-52">
    //   <div className="w-[269px] h-[38px] top-[114px] ml-[61px] md:w-full xl:w-[403px] xl:h-[58px] xl:top-[991px] xl:ml-[518px] flex justify-center items-center">
    //     <h1 className="font-fjalla font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">new arrivals</h1>
    //   </div>

    //   {/* Container for horizontal scrolling  The outer div that wraps the items has the classes overflow-x-auto and whitespace-nowrap to enable horizontal scrolling. */}
    //   <div className="overflow-x-auto py-10">
    //     <div className="whitespace-nowrap">
    //       {itemList.map((p: Product) => (

    //         <div key={p._id} className="inline-block w-[210px] h-[270px] top-[1217px] left-4 md:left-6 lg:w-[310px] lg:h-[380px] lg:top-[1104px] lg:left-[100px] mx-2">


    //          <div className="w-[198px] h-[200.01px] top-[1217px] left-4 md:left-6 lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px] overflow-hidden mx-2 relative">
    //           <span className="p-1 lg:p-2 rounded-md font-figtree font-bold text-[10px] lg:text-sm bg-starColor text-red-700 absolute z-10">New Arrival</span>
    //           <Image src={p.imageUrl} alt={p.name} width={295} height={295} layout="responsive" className="w-full h-full top-[-73px] left-[-1px] object-contain" />
    //          </div>



    //           <div className="flex flex-col justify-center">
    //             <div className="w-[180px] h-[22px] top-[1427.01px] ml-4 lg:w-[280px] lg:h-[27px] lg:top-[1418px] lg:left-[100px]">
    //               <p className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">{p.name}</p>
    //             </div>

    //             {/* Star & Price */}
    //             <div className="w-[127px] h-4 top-[1453.01px] ml-4 gap-[11px] lg:w-[160.7px] lg:h-[19px] lg:top-[2190px] lg:left-[100px] lg:gap-[13px] flex justify-center items-center">
    //               <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[113.7px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
    //                 <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
    //                 <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
    //                 <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
    //                 <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
    //                 <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
    //               </div>
    //               <div className="w-[29px] h-4 lg:w-[34px] lg:h-[19px]">
    //                 {/* Optional Rate */}
    //               </div>
    //             </div>

    //             {/* Price */}
    //             <div className="w-[46px] h-[27px] top-[1473px] ml-4 lg:w-[55px] lg:h-8 lg:top-[1480px] lg:left-[100px] lg:gap-[10px]">
    //               <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">{p.price}</h1>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* View All Button */}
    //   <div className="py-10">
    //     <div className="flex justify-center items-center">
    //       <div onClick={() => setViewAll(!viewAll)} className="w-[358px] h-[46px] top-[1524px] ml-16 lg:w-[218px] lg:h-[52px] lg:top-[1548px] lg:left-[611px] border-[1px] border-opacity-10 rounded-[62px] px-[54px] flex justify-center items-center cursor-pointer">
    //         <button className="w-[75px] h-[19px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-black text-center left-24 lg:left-6">
    //           {viewAll ? "View Less" : "View All"}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Line */}
    //   <div className="w-[358px] top-[1610px] ml-6 md:w-[700px] md:ml-12 lg:w-[900px] xl:w-[1240px] xl:top-[1664px] xl:ml-[100px] border-[1px] border-opacity-10 mx-auto"></div>
    // </div>
  )
}



export default NewArrivals
