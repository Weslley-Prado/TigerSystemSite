import { Layout } from "components/layout";
import { useFormik } from "formik";
import {
  AutoComplete,
  AutoCompleteChangeParams,
  AutoCompleteCompleteMethodParams,
} from "primereact/autocomplete";
import { Page } from "app/models/common/page";
import { Client } from "app/models/clients";
import { useState } from "react";
import { useClientService, useSaleService } from "app/services";
import { Button } from "primereact/button";
import { InputDate } from "components";

interface ReportSalesForm {
  client: Client | null;
  dataInit: string;
  dataEnd: string;
}

export const ReportSales: React.FC = () => {
  const salesService = useSaleService();
  const clientService = useClientService();
  const [listClients, setListClients] = useState<Page<Client>>({
    content: [],
    first: 0,
    number: 0,
    size: 20,
    totalElements: 0,
  });
  const handleSubmit = (formData: ReportSalesForm) => {
    salesService
      .executeReportSales(
        formData.client?.id,
        formData.dataInit,
        formData.dataEnd
      )
      .then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      });
  };
  const formik = useFormik<ReportSalesForm>({
    onSubmit: handleSubmit,
    initialValues: { client: null, dataInit: "", dataEnd: "" },
  });

  const handleClientAutoComplete = (e: AutoCompleteCompleteMethodParams) => {
    const name = e.query;
    clientService
      .findPageDataClient(name, "", 0, 20)
      .then((clients) => setListClients(clients));
  };
  return (
    <Layout title="Relatório de vendas">
      <form onSubmit={formik.handleSubmit}>
        <div className="p-fluid">
          <div className="p-grid">
            <div className="p-col-12">
              <AutoComplete
                suggestions={listClients.content}
                completeMethod={handleClientAutoComplete}
                value={formik.values.client}
                field="name"
                id="client"
                onChange={(e: AutoCompleteChangeParams) => {
                  formik.setFieldValue("client", e.value);
                }}
              />
            </div>
            <div className="p-col-6">
              <InputDate
                id="dataInit"
                label="Data Inicial"
                name="dataInit"
                value={formik.values.dataInit}
                onChange={formik.handleChange}
              />
            </div>
            <div className="p-col-6">
              <InputDate
                id="dataEnd"
                label="Data Final"
                name="dataEnd"
                value={formik.values.dataEnd}
                onChange={formik.handleChange}
              />
            </div>
            <div className="p-col">
              <Button label="Gerar Relatório" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
