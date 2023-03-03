import { ListProducts, RouteAuthenticated } from "components";

export default function () {
  return (
    <RouteAuthenticated>
      <ListProducts />
    </RouteAuthenticated>
  );
}
