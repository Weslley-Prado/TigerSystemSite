export interface DashboardData {
  products?: number;
  clients?: number;
  sales?: number;
  saleForMonth?: Array<SaleForMonth>;
}

export interface SaleForMonth {
  mes?: number;
  valor?: number;
}
