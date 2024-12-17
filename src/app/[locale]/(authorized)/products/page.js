import { createClient } from "../utils/supabase/server";

async function getProducts() {
  try {
    const supabase = await createClient();
    const { data: products, error } = await supabase
    .from('products')
    .select(`
      id,
      name,
      description,
      price,
      category_id (name),
      product_colors (
        color_id (color_name, hex_code),
        product_images (image_url, is_primary)
      )
    `);

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    console.log("Fetched products with colors and photos:", products);
    return products;
  } catch (error) {
    console.error("Unexpected error:", error);
    return [];
  }
}
export default async function Products() {
  const products = await getProducts();

  if (products.length === 0) {
    
    return <div>No products found</div>;
  }

  return (
    <div>
    <h1>Products</h1>
    {products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category_id.name}</p>
        <div>
          <h3>Colors:</h3>
          {product.product_colors.map((color) => (
            <div key={color.color_id.id}>
              <p>Color: {color.color_id.color_name}</p>
              <div>
                {color.product_images.map((image) => (
                  <img
                    key={image.id}
                    src={image.image_url}
                    alt={color.color_id.color_name}
                    style={{ width: 100 }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  );


  
}
