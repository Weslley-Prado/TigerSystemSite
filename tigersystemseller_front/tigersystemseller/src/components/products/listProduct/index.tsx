import { Layout } from "components/layout";
import Link from "next/link";
import { TableProducts } from "./table";
import { Product } from "app/models/products";
import useSWR from "swr";
import { httpClient } from "app/http";
import { AxiosResponse } from "axios";
import { Loader } from "components/common";
import Router from "next/router";
import { useProductService } from "app/services";
import { useEffect, useState } from "react";
import { Alert } from "components/common/message";

export const ListProducts: React.FC = () => {
  const service = useProductService();
  const [messages, setMessages] = useState<Array<Alert>>([]);
  const [list, setList] = useState<Product[]>([]);

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
    service.deleteProduct(product.id).then((response) => {
      setMessages([
        {
          type: "success",
          text: "Excluído com sucesso",
        },
      ]);
      const alterList: Product[] = list?.filter((p) => p.id !== product.id);
      setList(alterList);
    });
  };

  useEffect(() => {
    setList(result?.data || []);
  }, [result]);

  return (
    <Layout title="Produtos" messages={messages}>
      <Link href="/registers/products">
        <button className="button is-warning">Novo</button>
      </Link>
      <br />
      <br />
      <Loader show={!result} />
      <TableProducts
        onEdit={handleEdit}
        onDelete={handleDelete}
        product={list}
      />
    </Layout>
  );
};
