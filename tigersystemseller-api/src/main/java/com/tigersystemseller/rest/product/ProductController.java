package com.tigersystemseller.rest.product;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	@GetMapping
	public List<ProductFormRequest> getListProduct(){
		return repository.findAll().stream()
				.map(ProductFormRequest::fromModel) // Object of reference, only one parameter;
				.collect(Collectors.toList());
	}

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
