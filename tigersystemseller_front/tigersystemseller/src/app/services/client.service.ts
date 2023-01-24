import { httpClient } from "app/http";
import { Client } from "app/models/clients";
import { AxiosResponse } from "axios";
import { Page } from "app/models/common/page";

const resourceUrl: string = "/api/clients";

export const useClientService = () => {
  const saveClient = async (client: Client): Promise<Client> => {
    const response: AxiosResponse<Client> = await httpClient.post<Client>(
      resourceUrl,
      client
    );
    return response.data;
  };

  const updateClient = async (client: Client): Promise<void> => {
    const url: string = `${resourceUrl}/${client.id}`;
    await httpClient.put<Client>(url, client);
  };

  const loadClient = async (id: any): Promise<Client> => {
    const url: string = `${resourceUrl}/${id}`;
    const response: AxiosResponse<Client> = await httpClient.get(url);
    return response.data;
  };

  const deleteClient = async (id: any): Promise<void> => {
    const url: string = `${resourceUrl}/${id}`;
    await httpClient.delete(url);
  };

  const findPageDataClient = async (
    name: string = "",
    cpf: string = "",
    page: number = 0,
    size: number = 10
  ): Promise<Page<Client>> => {
    const url = `${resourceUrl}?name=${name}&cpf${cpf}&page=${page}&size=${size}`;
    const response: AxiosResponse<Page<Client>> = await httpClient.get(url);
    return response.data;
  };
  return {
    saveClient,
    updateClient,
    loadClient,
    deleteClient,
    findPageDataClient,
  };
};
