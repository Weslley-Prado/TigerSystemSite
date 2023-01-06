import { Layout } from "components/layout";
import Link from "next/link";
import { TableProducts } from "./table";
import { Product } from "app/models/products";
import useSWR from "swr";
import { httpClient } from "app/http";
import { AxiosResponse } from "axios";
import { Loader } from "components/common";
import Router from "next/router";

export const ListProducts: React.FC = () => {
  const products: Product[] = [];
  const { data: result, error } = useSWR<AxiosResponse<Product[]>>(
    "/api/products",
    (url) => httpClient.get(url)
  );

  const handleEdit = (product: Product) => {
    const url = `/registers/products?id=${product.id}`;
    Router.push(url);
  };

  const handleDelete = (product: Product) => {
    console.log(product);
  };

  return (
    <Layout title="Produtos">
      <Link href="/registers/products">
        <button className="button is-warning">Novo</button>
      </Link>
      <br />
      <br />
      <Loader show={!result} />
      <TableProducts
        onEdit={handleEdit}
        onDelete={handleDelete}
        product={result?.data || []}
      />
    </Layout>
  );
};
