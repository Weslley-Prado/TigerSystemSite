package com.tigersystemseller.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tigersystemseller.model.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
