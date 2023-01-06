import { Product } from "app/models/products";

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
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.sku}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button
          onClick={(e) => onEdit(product)}
          className="button is-success is-rounded is-small"
        >
          {" "}
          Editar{" "}
        </button>
        <button
          onClick={(e) => onDelete(product)}
          className="button is-danger is-rounded is-small"
        >
          {" "}
          Deletar{" "}
        </button>
      </td>
    </tr>
  );
};
