import { RegisterClient, RouteAuthenticated } from "components";

export default function () {
  return (
    <RouteAuthenticated>
      <RegisterClient />
    </RouteAuthenticated>
  );
}
