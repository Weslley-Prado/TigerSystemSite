import { Client } from "../clients";
import { Product } from "../products";

export interface Sale {
  client?: Client | null;
  items?: Array<ItemSale>;
  payment?: string;
  total: number;
}

export interface ItemSale {
  product: Product;
  quantity: number;
}
