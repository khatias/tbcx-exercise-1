// import { createClient } from "../utils/supabase/server";
// import productCard from './ProductCard'
// async function getProducts() {
//   try {
//     const supabase = await createClient();
//     const { data: products, error } = await supabase.from("products").select(`
//       id,
//       name,
//       description,
//       price,
//       category_id (name),
//       product_colors (
//         color_id (color_name, hex_code),
//         product_images (image_url, is_primary)
//       )
//     `);

//     if (error) {
//       console.error("Supabase error:", error);
//       return [];
//     }

//     console.log("Fetched products with colors and photos:", products);
//     return products;
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return [];
//   }
// }



// export default async function Products() {
//   const products = await getProducts();

//   if (products.length === 0) {
//     return <div>No products found</div>;
//   }

//   return (
//     <div>
//       {products.map((product) => {
//         const primaryImage = getPrimaryImage(product);
//         const colorSwatches = getColorSwatches(product);

//         return (
//           <div key={product.id}>
//             <div>
//               {primaryImage && (
//                 <img
//                   className="w-full"
//                   src={primaryImage.image_url}
//                   alt={`${product.name} - Primary Image`}
//                 />
//               )}
//             </div>

//             <div>
//               <div className="flex space-x-2">
//                 {colorSwatches.map((swatch) => (
//                   <span
//                     key={swatch.colorId}
//                     className="text-white p-2"
//                     style={{ backgroundColor: swatch.colorHex }}
//                   >
//                     {swatch.colorHex}
//                   </span>
//                 ))}
//               </div>

//               <h2>{product.name}</h2>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <p>Category: {product.category_id.name}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
import { getProducts } from "../utils/supabase/server"; 
import ProductCard from "./ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();
 

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
