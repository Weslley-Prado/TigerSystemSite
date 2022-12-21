import { httpClient } from "app/http";
import { Product } from "app/models/products";
import { AxiosResponse } from "axios";
const resourceUrl: string = "/api/products";

export const useProductService = () => {
  const saveProduct = async (product: Product): Promise<Product> => {
    const response: AxiosResponse<Product> = await httpClient.post<Product>(
      resourceUrl,
      product
    );
    return response.data;
  };

  return {
    saveProduct,
  };
};
