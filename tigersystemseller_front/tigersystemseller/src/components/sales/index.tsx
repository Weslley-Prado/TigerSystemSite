import { Sale } from "app/models/sales";
import { Layout } from "components/layout";
import { SalesForm } from "./form";
import { useSaleService } from "app/services";
import { Alert } from "components/common/message";
import { useState } from "react";

export const Sales: React.FC = () => {
  const service = useSaleService();
  const [message, setMessage] = useState<Alert[]>([]);
  const handleSubmit = (sale: Sale) => {
    console.log(sale);
    service
      .executSale(sale)
      .then((response) => {
        setMessage([{ text: "Venda realizada com sucesso", type: "success" }]);
      })
      .catch((error) => {
        console.log(error);
        setMessage([
          {
            text: "Ocorreu um erro, entre em contato com o suporte.",
            type: "danger",
          },
        ]);
      });
  };
  return (
    <Layout title="Venda" messages={message}>
      <SalesForm onSubmit={handleSubmit}></SalesForm>
    </Layout>
  );
};
