import { httpClient } from "app/http";
import { Sale } from "app/models/sales";
const resourceURL = "/api/sales";

export const useSaleService = () => {
  const executSale = async (sale: Sale): Promise<void> => {
    await httpClient.post<Sale>(resourceURL, sale);
  };

  return {
    executSale,
  };
};
