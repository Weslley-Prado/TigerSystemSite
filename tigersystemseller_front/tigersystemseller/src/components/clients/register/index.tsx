import { Client } from "app/models/clients";
import { Layout } from "components/layout";
import { useState } from "react";
import { ClientForm } from "./form";

export const RegisterClient: React.FC = () => {
  const [client, setClient] = useState<Client>({
    name: "Fulano",
    cpf: "0000000000",
  });

  const handleSubmit = (client: Client) => {
    console.log(client);
  };
  return (
    <Layout title="Clientes">
      <ClientForm client={client} onSubmit={handleSubmit} />
    </Layout>
  );
};
