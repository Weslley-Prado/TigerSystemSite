import { Client } from "../clients";
import { Product } from "../products";

export interface Sale {
  client?: Client | null;
  product?: Array<Product>;
  payment?: string;
  total: number;
}
