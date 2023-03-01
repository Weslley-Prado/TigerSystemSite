import { httpClient } from "app/http";
import { DashboardData } from "app/models/dashboard";
import { AxiosResponse } from "axios";

const resourceUrl: string = "/api/dashboard";

export const useDashboardService = () => {
  return {
    get: async (): Promise<DashboardData> => {
      const response: AxiosResponse<DashboardData> = await httpClient.get(
        resourceUrl
      );
      return response.data;
    },
  };
};
