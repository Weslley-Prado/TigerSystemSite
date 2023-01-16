package com.tigersystemseller.model.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.tigersystemseller.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
