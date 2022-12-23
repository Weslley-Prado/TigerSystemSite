package com.tigersystemseller.rest.product;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tigersystemseller.model.Product;
import com.tigersystemseller.model.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {
	  @Autowired
	  private ProductRepository repository;
	
	  @PostMapping
      public ProductFormRequest saveProduct(@RequestBody ProductFormRequest product) {		  
		  Product entityProduct = product.toModel();
		  repository.save(entityProduct);
		  product.setId(entityProduct.getId());
    	  return ProductFormRequest.fromModel(entityProduct);
      }
	  @PutMapping("{id}")
	  public ResponseEntity<Void> updateProduct(@PathVariable Long id, @RequestBody ProductFormRequest product ) {
		  Optional<Product> existsProduct = repository.findById(id);
		  if(existsProduct.isEmpty()) {
			  return ResponseEntity.notFound().build();
		  }
		  Product entityUpdateProduct = product.toModel();
		  entityUpdateProduct.setId(id);
		  repository.save(entityUpdateProduct);
		  
		  return ResponseEntity.ok().build();
	  }
}
