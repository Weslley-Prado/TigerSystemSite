import Link from "next/link";
import { MenuItem } from "./menuItem";
import { signOut } from "next-auth/client";

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Minhas vendas</p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/search/products" label="Produtos" />
        <MenuItem href="/search/clients" label="Clientes" />
        <MenuItem href="/sales/new-sale" label="Venda" />
        <MenuItem href="/sales/report-sales" label="Relatório" />
        <MenuItem href="/" label="Sair" />
      </ul>
    </aside>
  );
};
