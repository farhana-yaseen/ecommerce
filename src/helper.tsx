import { client } from "./sanity/lib/client";


export const getProduct = async () =>{

    const products = await client.fetch(
      `*[_type == "products"]{
        _id,
        name,
        price,
        discountPercent,
        "imageUrl": image.asset->url,
        description,
        category,
        isNew,
        colors,
        sizes 
        }`
  );
      return products
  }



//   for New Arrival
export const getNewArrival = async () =>{

    const products = await client.fetch(
      `*[_type == "products" && isNew==true]{
        _id,
        name,
        price,
        discountPercent,
        "imageUrl": image.asset->url,
        description,
        category,
        isNew,
        colors,
        sizes 
        }`
  );
      return products
  }


//   for Top selling
export const getTopSelling = async () =>{

    const products = await client.fetch(
      `*[_type == "products" && isNew==false]{
        _id,
        name,
        price,
        discountPercent,
        "imageUrl": image.asset->url,
        description,
        category,
        isNew,
        colors,
        sizes 
        }`
  );
      return products
  }



  //Category
  export const categoryWiseItems = async () =>{

    const category = await client.fetch(
      ` *[_type == "product" && category === category]{
       title,
    price,
    name 
        }`
  );
      return category
  }
 

 
  