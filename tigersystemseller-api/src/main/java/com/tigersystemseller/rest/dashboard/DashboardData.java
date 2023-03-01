package com.tigersystemseller.rest.dashboard;

import java.util.List;

import com.tigersystemseller.model.repository.projections.SaleForMonth;

public class DashboardData {
        private Long products;
        private Long clients;
        private Long sales;
        private List<SaleForMonth> saleForMonth;
        
        
		public DashboardData(Long products, Long clients, Long sales,  List<SaleForMonth> saleForMonth) {
			super();
			this.products = products;
			this.clients = clients;
			this.sales = sales;
			this.saleForMonth = saleForMonth;
		}
		public Long getProducts() {
			return products;
		}
		public void setProducts(Long products) {
			this.products = products;
		}
		public Long getClients() {
			return clients;
		}
		public void setClients(Long clients) {
			this.clients = clients;
		}
		public Long getSales() {
			return sales;
		}
		public void setSales(Long sales) {
			this.sales = sales;
		}
		public List<SaleForMonth> getSaleForMonth() {
			return saleForMonth;
		}
		public void setSaleForMonth(List<SaleForMonth> saleForMonth) {
			this.saleForMonth = saleForMonth;
		}	
        
        
}
