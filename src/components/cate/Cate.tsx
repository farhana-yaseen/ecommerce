
// "use client"

// import { IoMdClose } from "react-icons/io"
// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { getProduct } from "@/helper"
// import { Product } from "@/type"
// import Link from "next/link"


// const FilterItems = async () => {

//     const [productOfferList, setProductOfferList] = useState<Product[]>([]) // Manage product list
//     const [categories, setCategories] = useState<string[]>([]) // Manage categories
//     const [selectedCategory, setSelectedCategory] = useState<string | null>(null) // Manage selected category

//     useEffect(() => {
//         const fetchData = async () => {
//             const products = await getProduct() // Fetch product data
//             setProductOfferList(products) // Store products in state

//             // Extract unique categories
//             // Get unique categories and display the first product for each category 
//                 //  The Set constructor is used directly to get unique categories in one step. 
//                 // Array.from is a built-in JavaScript method used to Convert an array-like object to an array:
//             const uniqueCategories:string[] = Array.from(new Set(products.map((product:Product) => product.category)))
//             setCategories(uniqueCategories) // Store categories in state
//         }

//         fetchData()
                
//     }, [])


//     // Function to handle category click
//     const handleCategoryClick = (category: string) => {
//         setSelectedCategory(category)
//     }

//     // Filter products by selected category
//     const filteredProducts = selectedCategory
//         ? productOfferList.filter((product: Product) => product.category === selectedCategory)
//         : []

//     return (
//         <div>
//             <div className="w-[353px] h-[27px] top-5 left-[19px] lg:w-[247px] lg:h-[27px]  mb-5">

//                 <div className="flex justify-between items-center">
//                     {/* Text */}
//                     <div className="w-[57px] h-[27px]">
//                         <h1 className="font-figtree font-bold text-[20px] leading-[27px]">Filters</h1>
//                     </div>

//                     {/* close sign */}
//                     <div className='lg:hidden w-6 h-6'>
//                         <IoMdClose className="w-[15.76px] h-[15.76px] mt-[4.12] ml-[4.12] text-black opacity-40" />
//                     </div >

//                     {/*  sign */}
//                     <div className='hidden lg:block w-6 h-6'>
//                         <Image src={"/productDetail/frame.png"} alt="symbol" width={20.25} height={18.75} className="w-full h-full top-[2.63px] left-[1.88px] object-contain opacity-40"></Image>
//                     </div >

//                 </div>
//             </div>

//             {/* Line */}
//             <div className="w-[353px] top-[63px] left-[19px] border-[1px] border-opacity-10 lg:w-[247px] mb-5"></div>



//             {/* Items */}
//             <div className="w-[353px] lg:w-[247px] h-[160px] top-[83px] left-[19px] gap-5 flex flex-col justify-between mb-8">

//                 {/* T-Shirts */}
//                 <div className="w-[353px] h-4 lg:w-[247px] lg:h-4">

//                     <div className="flex justify-between items-center">

//                         {
//                             categories.map((category: string, index: number) => (
//                                 <div key={index} >

//                                     <div onClick={() => handleCategoryClick(category)} className="w-[353px] h-4 lg:w-[247px] lg:h-4">
//                                         {/* Text */}
//                                         <div className="w-[45px] h-[11px] lg:w-[45px] lg:h-[11px] opacity-60">
//                                             <h1 className="font-figtree font-normal lg:font-bold lg:text-[20px] text-base leading-[21.6px]">{category}</h1>
//                                         </div>

//                                         {/* dropdown sign */}
//                                         <div className='w-4 h-4 opacity-60 cursor-pointer'>
//                                             <Image src={"/header/dropdown.png"} alt="dropdown" width={13.75} height={5.25} className="w-[11.5px] h-[6.5px] lg:w-full lg:h-full top-[13.75px] left-[5.25px] object-contain"></Image>
//                                         </div >

//                                     </div>
//                                 </div>
//                             ))
//                         }

//                     </div>
//                 </div>
//             </div>



//             {/* Line */}
//             <div className="w-[353px] top-[267px] left-[19px] border-[1px] lg:w-[247px] border-opacity-10"></div>

//             {/* If category is selected, show products from that category */}
//             {
//                 selectedCategory && (
//                     <div>
//                         {
//                             filteredProducts.map((product: Product, index: number) => (
//                                 <div key={index} className="product-item">
//                                     <Link href={`/product/${product._id}`} className="flex flex-col items-center">
//                                         <Image
//                                             src={product.imageUrl}
//                                             alt={product.name}
//                                             width={295}
//                                             height={295}
//                                             layout="responsive"
//                                             className="product-image"
//                                         />
//                                         <p className="product-name text-center font-bold">{product.name}</p>
//                                         <p className="product-price text-center">{product.price}</p>
//                                     </Link>
//                                 </div>
//                             ))
//                         }

//                     </div>
//                 )
//             }



//         </div>
//     )

// }

// export default FilterItems
