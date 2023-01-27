import { Product } from "app/models/products";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { confirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";

interface TableProductsProps {
  product: Array<Product>;
  onEdit: (product: any) => void;
  onDelete: (product: any) => void;
}

export const TableProducts: React.FC<TableProductsProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const actionTemplate = (register: Product) => {
    return (
      <div>
        <Button
          label="Editar"
          className="p-button-rounded p-button-info"
          onClick={(e) => onEdit(register)}
        />
        <Button
          label="Excluir"
          className="p-button-rounded p-button-danger"
          onClick={(event) => {
            confirmDialog({
              message: "Tem certeza que deseja excluir esse produto?",
              acceptLabel: "Sim",
              rejectLabel: "Não",
              accept: () => onDelete(register),
              header: "Confirmação",
            });
          }}
        />
      </div>
    );
  };
  return (
    <DataTable value={product} paginator rows={5}>
      <Column field="id" header="Código" />
      <Column field="SKU" header="SKU" />
      <Column field="name" header="Nome" />
      <Column field="price" header="Preço" />
      <Column header="" body={actionTemplate} />
    </DataTable>
  );
};
