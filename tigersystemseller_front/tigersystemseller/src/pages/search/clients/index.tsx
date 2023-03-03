import { ListClients, RouteAuthenticated } from "components";

export default function () {
  return (
    <RouteAuthenticated>
      <ListClients />
    </RouteAuthenticated>
  );
}
