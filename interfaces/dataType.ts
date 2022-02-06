export interface DataType {
  products: ProductType[];
}
export interface ProductType {
  name: string;
  slug: string;
  isFeatured?: boolean;
  category: string;
  price: number;
  rating: number;
  countInStock: number;
  featuredImage?: string;
  image: string;
  brand: string;
  numReviews: number;
  description: string;
}
