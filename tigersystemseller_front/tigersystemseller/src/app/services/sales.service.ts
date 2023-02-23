import { httpClient } from "app/http";
import { Sale } from "app/models/sales";
import { AxiosResponse } from "axios";
const resourceURL = "/api/sales";
const resourceUrlReportSales = "/api/report-sales";

export const useSaleService = () => {
  const executSale = async (sale: Sale): Promise<void> => {
    await httpClient.post<Sale>(resourceURL, sale);
  };

  const executeReportSales = async (
    idClient: number | string = "",
    dataInit: string = "",
    dataEnd: string = ""
  ): Promise<Blob> => {
    const url = `${resourceUrlReportSales}?id=${idClient}&init=${dataInit}&end=${dataEnd}`;
    const response: AxiosResponse = await httpClient.get(url, {
      responseType: "blob",
    });
    const bytes = response.data;
    return new Blob([bytes], { type: "application/pdf" });
  };

  return {
    executSale,
    executeReportSales,
  };
};
