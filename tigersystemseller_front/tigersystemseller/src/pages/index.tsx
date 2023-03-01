import Head from "next/head";
import { Layout, Dashboard } from "components";
import { useDashboardService } from "app/services";
import { DashboardData } from "app/models/dashboard";

interface HomeProps {
  dashboard: DashboardData;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Tiger System Vendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Dashboard">
        <Dashboard
          clients={props.dashboard.clients}
          products={props.dashboard.products}
          sales={props.dashboard.sales}
          salesForMonth={props.dashboard.saleForMonth}
        />
      </Layout>
    </div>
  );
};
export async function getStaticProps(context: any) {
  const service = useDashboardService();
  const dashboard: DashboardData = await service.get();
  console.log(dashboard.saleForMonth);

  return {
    props: {
      dashboard,
    },
    revalidate: 60,
  };
}

export default Home;
