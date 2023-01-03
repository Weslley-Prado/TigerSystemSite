import { Layout } from "components/layout";
import Link from "next/link";

export const ListProducts: React.FC = () => {
  return (
    <Layout title="Produtos">
      <Link href="/registers/products">
        <button className="button is-warning">Novo</button>
      </Link>
      <br />
    </Layout>
  );
};
