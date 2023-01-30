import { Client } from "app/models/clients";
import { Page } from "app/models/common/page";
import { Sale } from "app/models/sales";
import { useClientService, useProductService } from "app/services";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import {
  AutoComplete,
  AutoCompleteChangeParams,
  AutoCompleteCompleteMethodParams,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { useState } from "react";
import { Product } from "app/models/products";

interface SalesFormProps {
  onSubmit: (sale: Sale) => void;
}

const formScheme: Sale = {
  client: null,
  products: [],
  total: 0,
  payment: "",
};
export const SalesForm: React.FC<SalesFormProps> = ({ onSubmit }) => {
  const formik = useFormik<Sale>({
    onSubmit,
    initialValues: formScheme,
  });
  const clientService = useClientService();
  const productService = useProductService();
  const [product, setProduct] = useState<Product>();
  const [codeProduct, setCodeProduct] = useState<string>("");
  const [listClients, setListClients] = useState<Page<Client>>({
    content: [],
    first: 0,
    number: 0,
    size: 0,
    totalElements: 0,
  });

  const handleClientAutoComplete = (e: AutoCompleteCompleteMethodParams) => {
    const name = e.query;
    clientService
      .findPageDataClient(name, "", 0, 20)
      .then((clients) => setListClients(clients));
  };
  const handleClientChange = (e: AutoCompleteChangeParams) => {
    const clientSelected: Client = e.value;
    formik.setFieldValue("client", clientSelected);
  };

  const handleCodeProductSelected = (event) => {
    productService
      .loadProduct(codeProduct)
      .then((productFinded) => setProduct(productFinded))
      .catch((error) => console.log(error));
  };

  const handleAddProduct = () => {
    console.log(product);
    const productAlreadyAdded = formik.values.products;
    productAlreadyAdded.push(product);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="client">Client: *</label>
          <AutoComplete
            suggestions={listClients.content}
            value={formik.values.client}
            field="name"
            completeMethod={handleClientAutoComplete}
            id="client"
            name="client"
            onChange={handleClientChange}
          />
        </div>
        <div className="p-grid">
          <div className="p-col-2">
            <span className="p-float-label">
              <InputText
                id="codeProduct"
                onBlur={handleCodeProductSelected}
                value={codeProduct}
                onChange={(e) => setCodeProduct(e.target.value)}
              />
              <label htmlFor="codeProduct">Código</label>
            </span>
          </div>
          <div className="p-col-6">
            <div className="p-field">
              <AutoComplete value={product} field="name" />
            </div>
          </div>
          <div className="p-col-2">
            <div className="p-field">
              <span className="p-float-label">
                <InputText id="qtdProduct" />
                <label htmlFor="qtdProduct">Quantidade</label>
              </span>
            </div>
          </div>
          <div className="p-col-2">
            <div className="p-field">
              <Button label="Adicionar" onClick={handleAddProduct} />
            </div>
          </div>
        </div>
        <Button type="submit" label="Finalizar" />
      </div>
    </form>
  );
};
