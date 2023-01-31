import { Client } from "app/models/clients";
import { Page } from "app/models/common/page";
import { ItemSale, Sale } from "app/models/sales";
import { useClientService, useProductService } from "app/services";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import {
  AutoComplete,
  AutoCompleteChangeParams,
  AutoCompleteCompleteMethodParams,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { isValidElement, useState } from "react";
import { Product } from "app/models/products";
import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface SalesFormProps {
  onSubmit: (sale: Sale) => void;
}

const formScheme: Sale = {
  client: null,
  items: [],
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
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState<Product | any>();
  const [codeProduct, setCodeProduct] = useState<string>("");
  const [quantityProduct, setQuantityProduct] = useState<number>(0);
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
    if (codeProduct) {
      productService
        .loadProduct(codeProduct)
        .then((productFinded) => setProduct(productFinded))
        .catch((error) => setMessage("Produto não encontrado"));
    }
  };

  const handleAddProduct = () => {
    const itemsAdded = formik.values.items;
    const alreadyItemInSale = itemsAdded?.some((is: ItemSale) => {
      return is.product.id === product.id;
    });

    if (alreadyItemInSale) {
      itemsAdded?.forEach((is: ItemSale) => {
        if (is.product.id === product.id) {
          is.quantity = is.quantity + quantityProduct;
        }
      });
    } else {
      itemsAdded?.push({
        product: product,
        quantity: quantityProduct,
      });
    }
    setCodeProduct("");
    setProduct(null);
    setQuantityProduct(0);
  };
  const handleCloseDialogProductNotFound = () => {
    setMessage("");
    setCodeProduct("");
    setProduct(null);
    setQuantityProduct(0);
  };
  const dialogMessageFooter = () => {
    return (
      <div>
        <Button label="OK" onClick={handleCloseDialogProductNotFound} />
      </div>
    );
  };
  const disableAddProductButton = () => {
    return !product || !quantityProduct;
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
                <InputText
                  id="qtdProduct"
                  value={quantityProduct}
                  onChange={(e) => setQuantityProduct(parseInt(e.target.value))}
                />
                <label htmlFor="qtdProduct">Quantidade</label>
              </span>
            </div>
          </div>
          <div className="p-col-2">
            <div className="p-field">
              <Button
                disabled={disableAddProductButton()}
                type="button"
                label="Adicionar"
                onClick={handleAddProduct}
              />
            </div>
          </div>
        </div>
        <Button type="submit" label="Finalizar" />
      </div>
      <div className="p-col-12">
        <DataTable value={formik.values.items}>
          <Column field="product.id" header="Código" />
          <Column field="product.sku" header="Sku" />
          <Column field="product.name" header="Produto" />
          <Column field="product.price" header="Preço Unitário" />
          <Column field="quantity" header="Qtd" />
          <Column
            header="Total"
            body={(is: ItemSale | any) => {
              return <div>{is.product.price * is.quantity}</div>;
            }}
          />
        </DataTable>
      </div>

      <Dialog
        header="Atenção!"
        position="top"
        visible={!!message}
        onHide={handleCloseDialogProductNotFound}
        footer={dialogMessageFooter}
      >
        {message}
      </Dialog>
    </form>
  );
};
