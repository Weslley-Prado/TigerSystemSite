import { Layout } from "components/layout";
import Link from "next/link";
import { TableProducts } from "./table";
import { Product } from "app/models/products";
import useSWR from "swr";
import { httpClient } from "app/http";
import { AxiosResponse } from "axios";

export const ListProducts: React.FC = () => {
  const products: Product[] = [];
  const { data: result, error } = useSWR<AxiosResponse<Product[]>>(
    "/api/products",
    (url) => httpClient.get(url)
  );
  if (!result) {
    return <div> Carregando </div>;
  }
  return (
    <Layout title="Produtos">
      <Link href="/registers/products">
        <button className="button is-warning">Novo</button>
      </Link>
      <br />
      <TableProducts product={result.data} />
    </Layout>
  );
};
