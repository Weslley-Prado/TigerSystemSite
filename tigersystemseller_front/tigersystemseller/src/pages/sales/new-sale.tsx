import { RouteAuthenticated, Sales } from "components";

export default function () {
  return (
    <RouteAuthenticated>
      <Sales />
    </RouteAuthenticated>
  );
}
