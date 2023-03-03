import { RegisterProducts, RouteAuthenticated } from "components";

export default function () {
  return (
    <RouteAuthenticated>
      <RegisterProducts />
    </RouteAuthenticated>
  );
}
