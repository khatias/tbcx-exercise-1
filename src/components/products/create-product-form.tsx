import Stripe from "stripe";
import { createClient } from "../../utils/supabase/server";

export function CreateProductForm() {
  async function createProduct(formData: FormData) {
    "use server";

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = await createClient();

    // Get user id from Supabase
    const userResponse = await supabase.auth.getUser();
    const user_id = userResponse.data?.user?.id;

    // Get form data
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const image = formData.get("image") as string;
    const brand = formData.get("brand") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;

    // Check necessary data
    if (
      !name ||
      !price ||
      !image ||
      !user_id ||
      !brand ||
      !category ||
      !description
    ) {
      console.log("Missing required fields");
      return;
    }

    try {
      const Stripeproduct = await stripe.products.create({
        name,
        description,
        images: [image],
        metadata: {
          brand,
          category,
        },
      });

      // Create price for the product in Stripe
      const stripePrice = await stripe.prices.create({
        product: Stripeproduct.id,
        unit_amount: price,
        currency: "usd",
      });

      // Insert product data into Supabase
      const { data, error } = await supabase
        .from("products")
        .insert({
          name,
          price,
          image,
          user_id,
          brand,
          category,
          description,
          stripe_product_id: Stripeproduct.id,
          stripe_price_id: stripePrice.id,
        })
        .single();

      if (error) {
        console.error("Error inserting into Supabase:", error);
        return;
      }

      console.log("Product inserted into Supabase:", data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  return (
    <div className="w-full max-w-5xl m-auto p-6">
  <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-100 mb-6">
    Create Product
  </h2>
  <form
    action={createProduct}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
  >
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="name"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customPurple dark:focus:ring-customPurple transition duration-300"
        placeholder="Enter the product name"
        required
      />
    </div>

    <div className="flex flex-col space-y-2">
      <label
        htmlFor="price"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Price
      </label>
      <input
        type="number"
        id="price"
        name="price"
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customPurple dark:focus:ring-customPurple transition duration-300"
        placeholder="Enter the product price"
        required
      />
    </div>

    <div className="flex flex-col space-y-2">
      <label
        htmlFor="brand"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Brand
      </label>
      <input
        type="text"
        id="brand"
        name="brand"
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customPurple dark:focus:ring-customPurple transition duration-300"
        placeholder="Enter the product brand"
        required
      />
    </div>

    <div className="flex flex-col space-y-2">
      <label
        htmlFor="category"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Category
      </label>
      <input
        type="text"
        id="category"
        name="category"
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customPurple dark:focus:ring-customPurple transition duration-300"
        placeholder="Enter the product category"
        required
      />
    </div>

    <div className="flex flex-col space-y-2 md:col-span-2">
      <label
        htmlFor="image"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Image URL
      </label>
      <input
        type="text"
        id="image"
        name="image"
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customPurple dark:focus:ring-customPurple transition duration-300"
        placeholder="Enter image URL"
        required
      />
    </div>



    <div className="flex flex-col space-y-2 md:col-span-2">
      <label
        htmlFor="description"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customPurple dark:focus:ring-customPurple transition duration-300"
        placeholder="Enter product description"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-customPurple text-white font-medium text-lg rounded hover:bg-purple-700 transition duration-300 focus:outline-none dark:bg-purple-700 dark:hover:bg-purple-800 md:col-span-2"
    >
      Submit
    </button>
  </form>
</div>

  )}
   