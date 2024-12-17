// app/products/[id]/page.js

import { createClient } from "../../utils/supabase/server";
import Link from "next/link";
import ProductDetail from "./ProductDetail";

async function getProductById(id) {
  try {
    const supabase = await createClient();
    const { data: product, error } = await supabase
      .from("products")
      .select(
        `id,
        name,
        price,
        description,
        category_id (name),
        product_colors (
          color_id (color_name, hex_code, color_image),
          product_images (image_url, is_primary)
        ),
        product_sizes (size_id (size))`
      )
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return null;
    }
 
    return product;
    
  } catch (error) {
    console.error("Unexpected error:", error);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetail product={product} />{" "}
      {/* Pass the fetched product to the client-side component */}
    </div>
  );
}

// app/products/[id]/page.js

// import { createClient } from "../../utils/supabase/server";
// import Link from "next/link";
// import ImageSlider from "../../../../../components/ImageSlider";
// import Image from "next/image";
// import ColorButton from "../../../../../components/CollorButton"
// async function getProductById(id) {
//   try {
//     const supabase = await createClient();
//     const { data: product, error } = await supabase
//       .from("products")
//       .select(
//         `
//         id,
//         name,
//         description,
//         price,
//         category_id (name),
//         product_colors (
//          color_id (color_name, hex_code, color_image),
//           product_images (image_url, is_primary)
//         )
//       `
//       )
//       .eq("id", id)
//       .single();

//     if (error) {
//       console.error("Supabase error:", error);
//       return null;
//     }

//     return product;
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return null;
//   }
// }

// export default async function ProductPage({ params }) {
//   const { id } = params;
//   const product = await getProductById(id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="">
//       <Link href={"/"} className="bg-slate-100 text-sm p-1 ml-4">
//         {product.category_id?.name}
//       </Link>
//       <div className="pt-4">
//         <div className="px-4">
//         <h2 className="text-xl">{product.name}</h2>
//         <p className="text-sm text-gray-500 py-2">{product.description}</p>
//         <p className="text-lg"> ${product.price}</p>
//         </div>
//         <ImageSlider productColor={product.product_colors} />

//         <div>

//           <div className="flex gap-1 p-4">
//             {product.product_colors.map((color, index) => (
//               <div key={index}  >
//                 {color.color_id.color_image && (
//                   <>
//                   <Image
//                     src={color.color_id.color_image}
//                     alt={color.color_id.color_name}
//                     width={60}
//                     height={60}
//                     className="  border-gray-100"
//                   />

//                  <ColorButton color={color.color_id.color_name}>   </ColorButton>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

{
  /* <h3>Colors:</h3>
{product.product_colors.map((color) => (
  <div key={color.color_id.id}>
    <p>Color: {color.color_id.color_name}</p>
    <div>
      {color.product_images.map((image) => (
        <img
          key={image.id}
          src={image.image_url}
          alt={color.color_id.color_name}
          className="w-full"
        />
      ))}
    </div>
  </div>
))} */
}

// import { FaStar } from 'react-icons/fa';
// const URL = 'https://dummyjson.com/products';

// async function fetchProduct(id) {
//   const response = await fetch(`${URL}/${id}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// }

// export default async function ProductDetails({ params }) {
//   const { id } = params;
//   const product = await fetchProduct(id);
//   const { width, height, depth } = product.dimensions;

//   const renderStars = () => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <FaStar
//           key={i}
//           color={i <= product.rating ? '#d218f5' : 'gray'}
//         />
//       );
//     }
//     return stars;
//   };

//   return (
//     <main className="p-4">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex flex-col items-center pt-16">
//           <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
//             {product.title}
//           </h1>
//           <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
//             {product.description}
//           </p>
//         </div>
//         <div className="flex flex-col md:flex-row items-center mt-8 gap-8">
//           <img
//             src={product.images[0]}
//             alt={product.title}
//             className="max-h-96 rounded-lg"
//           />
//           <div>
//             <p className="text-lg text-gray-500 dark:text-gray-300">
//               <strong>Category:</strong> {product.category}
//             </p>
//             <p className="text-lg text-gray-500 dark:text-gray-300">
//               <strong>Price:</strong> ${product.price}
//             </p>
//             <p className="text-lg text-gray-500 dark:text-gray-300">
//               <strong>Discount Price:</strong> ${product.discountPercentage}
//             </p>
//             <div className="flex items-center text-xl text-gray-500 dark:text-gray-300">
//               {renderStars()} <span className="ml-2">{product.rating}</span>
//             </div>
//             <p className="text-lg text-gray-500 dark:text-gray-300">
//               <strong>Stock:</strong> {product.stock}
//             </p>
//             <p className="text-lg text-gray-500 dark:text-gray-300">
//               <strong>Availability Status:</strong> {product.availabilityStatus}
//             </p>
//           </div>
//         </div>
//         <div className="mt-6 text-center">
//           {product.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full px-4 py-2 text-sm mx-1"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>
//         <ul className="list-none mt-6 space-y-4">
//           <li className="bg-[#f7c1fb] dark:bg-purple-800 rounded-lg px-4 py-2">
//             <strong>Width:</strong> {width} cm
//           </li>
//           <li className="bg-[#f7c1fb] dark:bg-purple-800 rounded-lg px-4 py-2">
//             <strong>Height:</strong> {height} cm
//           </li>
//           <li className="bg-[#f7c1fb] dark:bg-purple-800 rounded-lg px-4 py-2">
//             <strong>Depth:</strong> {depth} cm
//           </li>
//         </ul>
//         <div className="mt-6">
//           <p className="text-lg text-gray-500 dark:text-gray-300">
//             <strong>Warranty:</strong> {product.warrantyInformation}
//           </p>
//           <p className="text-lg text-gray-500 dark:text-gray-300">
//             <strong>Shipping Information:</strong> {product.shippingInformation}
//           </p>
//           <p className="text-lg text-gray-500 dark:text-gray-300">
//             <strong>Return Policy:</strong> {product.returnPolicy}
//           </p>
//           <p className="text-lg text-gray-500 dark:text-gray-300">
//             <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
//           </p>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Reviews</h2>
//           {product.reviews.length === 0 ? (
//             <p className="text-gray-600 dark:text-gray-400">No reviews yet.</p>
//           ) : (
//             product.reviews.map((review, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow"
//               >
//                 <p className="text-gray-800 dark:text-gray-200">
//                   <strong>Reviewer:</strong> {review.reviewerName}
//                 </p>
//                 <p className="text-gray-800 dark:text-gray-200">
//                   <strong>Rating:</strong> {review.rating} ★
//                 </p>
//                 <p className="text-gray-800 dark:text-gray-200">
//                   <strong>Comment:</strong> {review.comment}
//                 </p>
//                 <p className="text-gray-800 dark:text-gray-200">
//                   <strong>Date:</strong>{' '}
//                   {new Date(review.date).toLocaleDateString()}
//                 </p>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="mt-6">
//           <p className="text-lg text-gray-500 dark:text-gray-300">
//             <strong>Barcode:</strong> {product.meta.barcode}
//           </p>
//           <img
//             src={product.meta.qrCode}
//             alt="QR Code"
//             className="mx-auto max-w-[150px] h-auto mt-4"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
