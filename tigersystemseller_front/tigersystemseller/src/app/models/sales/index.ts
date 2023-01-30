import { Client } from "../clients";
import { Product } from "../products";

export interface Sale {
  client?: Client | null;
  products?: Array<Product>;
  payment?: string;
  total: number;
}
