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

export interface CharacterType {
  results: Character[];
}
export interface CharacterWithPrice extends Character {
  price: number;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
