import { ReportSales, RouteAuthenticated } from "components";

export default function () {
  return (
    <RouteAuthenticated>
      <ReportSales />
    </RouteAuthenticated>
  );
}
