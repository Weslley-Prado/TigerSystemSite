import { Product } from "app/models/products";

interface TableProductsProps {
  product: Array<Product>;
}

export const TableProducts: React.FC<TableProductsProps> = ({ product }) => {
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
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

interface ProductRowProps {
  product: Product;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.sku}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button className="button is-success"> Editar </button>
        <button className="button is-danger"> Deletar </button>
      </td>
    </tr>
  );
};
