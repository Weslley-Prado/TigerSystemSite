package com.tigersystemseller.rest.dashboard;

public class DashboardData {
        private Long products;
        private Long clients;
        private Long sales;
        
        
        
		public DashboardData(Long products, Long clients, Long sales) {
			super();
			this.products = products;
			this.clients = clients;
			this.sales = sales;
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
        
        
}
