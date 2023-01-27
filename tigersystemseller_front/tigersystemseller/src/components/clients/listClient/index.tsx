import { Client } from "app/models/clients";
import { Input, InputCPF } from "components/common";
import { Layout } from "components/layout";
import { useFormik } from "formik";
import { useState } from "react";
import { DataTable, DataTablePageParams } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Page } from "app/models/common/page";
import { confirmDialog } from "primereact/confirmdialog";
import { useClientService } from "app/services";
import Router from "next/router";
interface SearchClientsForm {
  name?: string;
  cpf?: string;
}

export const ListClients: React.FC = () => {
  const service = useClientService();
  const [loading, setLoading] = useState<boolean>(false);
  const [clients, setClients] = useState<Page<Client>>({
    content: [],
    first: 0,
    number: 0,
    size: 10,
    totalElements: 0,
  });
  const handleSubmit = (filter: SearchClientsForm) => {
    handlePage(null);
  };
  const {
    handleSubmit: formikSubmit,
    values: filter,
    handleChange,
  } = useFormik<SearchClientsForm>({
    onSubmit: handleSubmit,
    initialValues: { name: "", cpf: "" },
  });

  const handlePage = (event: DataTablePageParams) => {
    setLoading(true);
    service
      .findPageDataClient(filter.name, filter.cpf, event?.page, event?.rows)
      .then((result) => {
        setClients({ ...result, first: event?.first });
      })
      .finally(() => setLoading(false));
  };
  const deleteClientId = (client: Client) => {
    service.deleteClient(client.id).then((result) => {
      return handlePage(null);
    });
  };
  const actionTemplate = (register: Client) => {
    const url = `/registers/clients?id=${register.id}`;
    return (
      <div>
        <Button
          label="Editar"
          className="p-button-rounded p-button-info"
          onClick={(e) => Router.push(url)}
        />
        ;
        <Button
          label="Excluir"
          className="p-button-rounded p-button-danger"
          onClick={(event) => {
            confirmDialog({
              message: "Tem certeza que deseja excluir esse registro?",
              acceptLabel: "Sim",
              rejectLabel: "Não",
              accept: () => deleteClientId(register),
              header: "Confirmação",
            });
          }}
        />
        ;
      </div>
    );
  };
  return (
    <Layout title="Clientes">
      <form onSubmit={formikSubmit}>
        <div className="columns">
          <Input
            label="Nome"
            id="name"
            name="name"
            autoComplete="off"
            onChange={handleChange}
            value={filter.name}
            columnClass="is-half"
          />
          <InputCPF
            label="CPF"
            id="cpf"
            onChange={handleChange}
            autoComplete="off"
            name="cpf"
            value={filter.cpf}
            columnClass="is-half"
          />
        </div>
        <div className="field is-grouped">
          <div className="control is-link">
            <button className="button is-success" type="submit">
              Consultar
            </button>
          </div>
          <div className="control is-link">
            <button
              className="button is-warning"
              type="submit"
              onClick={(e) => Router.push("/registers/clients")}
            >
              Novo
            </button>
          </div>
        </div>
      </form>
      <br />
      <div className="columns">
        <div className="is-full">
          <DataTable
            value={clients.content}
            totalRecords={clients.totalElements}
            lazy={true}
            paginator={true}
            first={clients.first}
            rows={clients.size}
            onPage={handlePage}
            loading={loading}
            emptyMessage="Nenhum registro"
          >
            <Column field="id" header="Código" />
            <Column field="name" header="Nome" />
            <Column field="cpf" header="CPF" />
            <Column field="email" header="Email" />
            <Column body={actionTemplate} />
          </DataTable>
        </div>
      </div>
    </Layout>
  );
};
