// utils/productService.ts
'use server'
import Stripe from 'stripe';
import { createClient } from './supabase/server';

export async function createProduct(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = await createClient();

  // Get user id from Supabase
  const userResponse = await supabase.auth.getUser();
  const user_id = userResponse.data?.user?.id;

  // Get form data
  const name = formData.get('name') as string;
  const price = Number(formData.get('price'));
  const image = formData.get('image') as string;
  const brand = formData.get('brand') as string;
  const category = formData.get('category') as string;
  const description = formData.get('description') as string;

  // Check necessary data
  if (!name || !price || !image || !user_id || !brand || !category || !description) {
    console.log('Missing required fields');
    return { success: false, message: 'Missing required fields.' };
  }

  try {
    const stripeProduct = await stripe.products.create({
      name,
      description,
      images: [image],
      metadata: { brand, category },
    });

    // Create price for the product in Stripe
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price,
      currency: 'usd',
    });

    // Insert product data into Supabase
    const { data, error } = await supabase
      .from('products')
      .insert({
        name,
        price,
        image,
        user_id,
        brand,
        category,
        description,
        stripe_product_id: stripeProduct.id,
        stripe_price_id: stripePrice.id,
      })
      .single();

    if (error) {
      console.error('Error inserting into Supabase:', error);
      return { success: false, message: 'Failed to insert product into the database.' };
    }

    console.log('Product inserted into Supabase:', data);
    return { success: true, message: 'Product created successfully!' };
  } catch (error) {
    console.error('Error creating product:', error);
    return { success: false, message: 'Error creating product. Please try again.' };
  }
}
