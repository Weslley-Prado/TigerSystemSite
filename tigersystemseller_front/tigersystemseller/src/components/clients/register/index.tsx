import { Client } from "app/models/clients";
import { Layout } from "components/layout";
import { useState } from "react";
import { ClientForm } from "./form";
import { useClientService } from "app/services";

export const RegisterClient: React.FC = () => {
  const [client, setClient] = useState<Client>({});
  const service = useClientService();

  const handleSubmit = (client: Client) => {
    console.log(client);
    if (client.id) {
      service.updateClient(client).then((response) => {
        console.log("Atualizado");
      });
    } else {
      service.saveClient(client).then((clientSave) => {
        setClient(clientSave);
        console.log(clientSave);
      });
    }
  };
  return (
    <Layout title="Clientes">
      <ClientForm client={client} onSubmit={handleSubmit} />
    </Layout>
  );
};
