import Stripe from "stripe";

export function CreateProductForm() {
  async function createProduct(formData: FormData) {
    "use server";

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


    const name = formData.get("name") as string;
    const price = Number(formData.get("price"))

    const Stripeproduct = await stripe.products.create({
        name
    });

    const stripePrice = await stripe.prices.create({
        product: Stripeproduct.id,
        unit_amount: price,
        currency: "usd"
    });

    console.log({Stripeproduct, stripePrice});
  }
  return (
    <form action={createProduct}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>

      <div>
        <label htmlFor="Price"> Price</label>
        <input type="number" id="price" name="price" />
      </div>

      <div>
        <label htmlFor="">image</label>
        <input type="file" id="image" name="image" />
      </div>

      <button type="submit">subimt</button>
    </form>
  );
}
