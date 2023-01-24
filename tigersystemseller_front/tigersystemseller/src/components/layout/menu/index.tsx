import Link from "next/link";
import { MenuItem } from "./menuItem";

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Minhas vendas</p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/search/products" label="Produtos" />
        <MenuItem href="/search/clients" label="Clientes" />
        <MenuItem href="/" label="Config" />
        <MenuItem href="/" label="Sair" />
      </ul>
    </aside>
  );
};
