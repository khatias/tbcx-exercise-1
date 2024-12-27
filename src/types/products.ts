export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category?: string;
  image: string;
  stripe_price_id: string;
}

export interface Order {
  id: string;
  name: string;
  price: number;
  status: string;
  created_at: string;
  payment_id: string;
  stripe_price_id: string;
}