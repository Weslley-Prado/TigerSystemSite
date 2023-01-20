import { Client } from "app/models/clients";
import { Layout } from "components/layout";
import { useState } from "react";
import { ClientForm } from "./form";
import { useClientService } from "app/services";
import { Alert } from "components/common/message";

export const RegisterClient: React.FC = () => {
  const [client, setClient] = useState<Client>({});
  const [messages, setMessages] = useState<Array<Alert>>([]);
  const service = useClientService();

  const handleSubmit = (client: Client) => {
    console.log(client);
    if (client.id) {
      service.updateClient(client).then((response) => {
        setMessages([
          {
            type: "success",
            text: "Cliente atualizado com sucesso",
          },
        ]);
      });
    } else {
      service.saveClient(client).then((clientSave) => {
        setClient(clientSave);
        setMessages([
          {
            type: "success",
            text: "Cliente salvo com sucesso",
          },
        ]);
      });
    }
  };
  return (
    <Layout title="Clientes" messages={messages}>
      <ClientForm client={client} onSubmit={handleSubmit} />
    </Layout>
  );
};
