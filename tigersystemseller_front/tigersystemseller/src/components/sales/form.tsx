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
import { Dropdown } from "primereact/dropdown";
import { validationScheme } from "./validationScheme";
const formatterMoney = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
interface SalesFormProps {
  onSubmit: (sale: Sale) => void;
  onNewSale: () => void;
  salesExecuted: boolean;
}

const formScheme: Sale = {
  client: null,
  items: [],
  total: 0,
  payment: "",
};
export const SalesForm: React.FC<SalesFormProps> = ({
  onSubmit,
  onNewSale,
  salesExecuted,
}) => {
  const formik = useFormik<Sale>({
    onSubmit,
    initialValues: formScheme,
    validationSchema: validationScheme,
  });
  const paymentForm: String[] = ["DINHEIRO", "CARTAO"];
  const clientService = useClientService();
  const productService = useProductService();
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [listFilteredProduct, setListFilteredProduct] = useState<Product[]>([]);
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

  const salesTotal = () => {
    const totais: number[] = formik.values.items?.map(
      (is) => is.quantity * is.product.price
    );
    if (totais.length) {
      return totais.reduce(
        (sumCurrent = 0, valueItemCurrent) => sumCurrent + valueItemCurrent
      );
    } else {
      return 0;
    }
  };

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

  const handleProductAutoComplete = async (
    e: AutoCompleteCompleteMethodParams
  ) => {
    const nameProduct = e.query;
    if (!listProduct.length) {
      const productFinded = await productService.list();
      setListProduct(productFinded);
    }
    const filterProduct = listProduct.filter((product: Product) =>
      product.name?.toLocaleUpperCase().includes(nameProduct.toUpperCase())
    );
    setListFilteredProduct(filterProduct);
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
    const total = salesTotal();
    formik.setFieldValue("total", total);
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

  const executNewSale = () => {
    onNewSale();
    formik.resetForm();
    formik.setFieldValue("items", []);
    formik.setFieldTouched("items", false);
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
          <small className="p-error p-d-block">{formik.errors.client}</small>
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
              <AutoComplete
                value={product}
                field="name"
                id="product"
                name="product"
                completeMethod={handleProductAutoComplete}
                suggestions={listFilteredProduct}
                onChange={(e) => setProduct(e.value)}
              />
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
      </div>
      <div className="p-col-12">
        <DataTable
          value={formik.values.items}
          emptyMessage="Nenhum produto adicionado."
        >
          <Column
            body={(item: ItemSale) => {
              const handleRemoveItem = () => {
                const newList = formik.values.items?.filter(
                  (is) => is.product.id !== item.product.id
                );
                formik.setFieldValue("items", newList);
              };
              return (
                <Button
                  type="button"
                  label="Excluir"
                  onClick={handleRemoveItem}
                />
              );
            }}
          />
          <Column field="product.id" header="Código" />
          <Column field="product.sku" header="Sku" />
          <Column field="product.name" header="Produto" />
          <Column field="product.price" header="Preço Unitário" />
          <Column field="quantity" header="Qtd" />
          <Column
            header="Total"
            body={(is: ItemSale | any) => {
              const total = is.product.price * is.quantity;
              const totalFormatted = formatterMoney.format(total);
              return <div>{totalFormatted}</div>;
            }}
          />
        </DataTable>
        <small className="p-error p-d-block">
          {formik.touched && formik.errors.items}
        </small>
      </div>
      <div className="p-fluid p-grid">
        <div className="p-col-5">
          <div className="p-field">
            <label htmlFor="payment">Formas de pagamento</label>
            <br />
            <Dropdown
              id="payment"
              options={paymentForm}
              value={formik.values.payment}
              onChange={(e) => formik.setFieldValue("payment", e.value)}
              placeholder="Selecione..."
            />
            <small className="p-error p-d-block">
              {formik.touched && formik.errors.payment}
            </small>
          </div>
        </div>
        <div className="p-col-2">
          <div className="p-field">
            <label htmlFor="items">Itens</label>
            <InputText disabled value={formik.values.items?.length} />
          </div>
        </div>
        <div className="p-col-5">
          <div className="p-field">
            <label htmlFor="total">Total</label>
            <br />
            <InputText
              disabled
              value={formatterMoney.format(formik.values.total)}
            />
          </div>
        </div>
        {!salesExecuted && <Button type="submit" label="Finalizar" />}
        {salesExecuted && (
          <Button
            type="button"
            label="Nova venda"
            onClick={executNewSale}
            className="p-button-success"
          />
        )}
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
