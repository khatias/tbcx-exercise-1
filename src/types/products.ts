export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category?: string;
  image: string;
  stripe_price_id: string;
}
