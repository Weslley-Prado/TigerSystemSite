import { SaleForMonth } from "app/models/dashboard";
import { MONTH } from "app/util/month";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

interface DashboardProps {
  clients?: number;
  products?: number;
  sales?: number;
  salesForMonth?: SaleForMonth[];
}

export const Dashboard: React.FC<DashboardProps> = ({
  clients,
  products,
  sales,
  salesForMonth,
}) => {
  const [chartData, setChartData] = useState({});
  const loadDatas = () => {
    const labels: string[] | undefined = salesForMonth?.map((sm) => {
      const numberMonth = sm.mes;
      return MONTH[Number(numberMonth) - 1];
    });
    const values = salesForMonth?.map((sm) => sm.valor);
    const dataGraphic = {
      labels: labels,
      datasets: [
        {
          label: "Valor mensal",
          backgroundColor: "#42A5F5",
          data: values,
        },
      ],
    };
    setChartData(dataGraphic);
  };
  useEffect(loadDatas, []);

  const productCardStyle = {
    background: "red",
    color: "white",
  };
  const clientCardStyle = {
    background: "blue",
    color: "white",
  };
  const saleCardStyle = {
    background: "green",
    color: "white",
  };

  return (
    <div className="p-fluid">
      <div className="p-grid">
        <div className="p-col">
          <Card title="Produtos" style={productCardStyle}>
            <p className="p-m-0">{products}</p>
          </Card>
        </div>
        <div className="p-col">
          <Card title="Clientes" style={clientCardStyle}>
            <p className="p-m-0">{clients}</p>
          </Card>
        </div>
        <div className="p-col">
          <Card title="Vendas" style={saleCardStyle}>
            <p className="p-m-0">{sales}</p>
          </Card>
        </div>
      </div>
      <div className="p-grid">
        <div className="p-col">
          <Chart type="bar" data={chartData} className="w-full md:w-30rem" />
        </div>
      </div>
    </div>
  );
};
