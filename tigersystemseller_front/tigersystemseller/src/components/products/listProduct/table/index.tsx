import { Product } from "app/models/products";
import { useState } from "react";
import { boolean } from "yup";

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
  return (
    <table className="table is-striped is-hoverable">
      <thead>
        <tr>
          <th>Código</th>
          <th>SKU</th>
          <th>Nome</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {product.map((product) => (
          <ProductRow
            onDelete={onDelete}
            onEdit={onEdit}
            key={product.id}
            product={product}
          />
        ))}
      </tbody>
    </table>
  );
};

interface ProductRowProps {
  product: Product;
  onEdit: (product: any) => void;
  onDelete: (product: any) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const [dialogDelete, setDialogDelete] = useState<boolean>(false);

  const onDeleteClick = (product: Product) => {
    if (dialogDelete) {
      onDelete(product);
      setDialogDelete(false);
    } else {
      setDialogDelete(true);
    }
  };

  const exitDelete = () => setDialogDelete(false);

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.sku}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        {!dialogDelete && (
          <button
            onClick={(e) => onEdit(product)}
            className="button is-success is-rounded is-small"
          >
            Editar
          </button>
        )}

        <button
          onClick={(e) => onDeleteClick(product)}
          className="button is-danger is-rounded is-small"
        >
          {dialogDelete ? "Confirma?" : "Excluir"}
        </button>
        {dialogDelete && (
          <button onClick={exitDelete} className="button is-rounded is-small">
            Cancelar
          </button>
        )}
      </td>
    </tr>
  );
};
