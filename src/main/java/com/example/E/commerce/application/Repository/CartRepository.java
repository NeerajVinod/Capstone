package com.example.E.commerce.application.Repository;

import com.example.E.commerce.application.Entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Product,Long> {
    Product findByName(String name);
}

