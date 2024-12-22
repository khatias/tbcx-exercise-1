import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const supabase = createClientComponentClient(
 
)
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export async function createClient() {
//   const cookieStore = cookies();

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll();
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) =>
//               cookieStore.set(name, value, options)
//             );
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if middleware is handling session refresh.
//           }
//         },
//       },
//     }
//   );
// }

// export async function getProducts() {
//   const supabase = await createClient();

//   const { data: products, error } = await supabase.from("products").select(`
//     id,
//     name,
//     description,
//     price,
//     category_id (name),
//     product_colors (
//       color_id (color_name, hex_code, color_image),
//       product_images (image_url, is_primary)
//     )
      
//   `);

//   if (error) {
//     throw new Error(`Error fetching products: ${error.message}`);
//   }

//   return products;
// }
