package com.tigersystemseller.rest.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tigersystemseller.model.Product;
import com.tigersystemseller.model.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	  @Autowired
	  private ProductRepository repository;
	
	  @PostMapping
      public ProductFormRequest saveProduct(@RequestBody ProductFormRequest product) {
		  
		  Product entityProduct = new Product(
				  product.getName(), 
				  product.getDescription(), 
				  product.getPrice(),
				  product.getSku());
		  
		  repository.save(entityProduct);
		  
    	  System.out.println(entityProduct);
    	  return product;
      }
}
