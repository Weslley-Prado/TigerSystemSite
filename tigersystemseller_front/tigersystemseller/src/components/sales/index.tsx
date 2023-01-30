import { Sale } from "app/models/sales";
import { Layout } from "components/layout";
import { SalesForm } from "./form";

export const Sales: React.FC = () => {
  const handleSubmit = (sale: Sale) => {
    console.log(sale);
  };
  return (
    <Layout title="Venda">
      <SalesForm onSubmit={handleSubmit}></SalesForm>
    </Layout>
  );
};
