package com.example.E.commerce.application.Controller;

import com.example.E.commerce.application.Entity.Product;
import com.example.E.commerce.application.Exception.ProductNotFoundException;
import com.example.E.commerce.application.Repository.CartRepository;
import com.example.E.commerce.application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/buy")

public class CartController {
    @Autowired
    private CartRepository cartRepository;

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        Product newProduct=cartRepository.save(product);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product=cartRepository.findById(id).orElseThrow(()->new ProductNotFoundException(id,Product.class));
        return ResponseEntity.ok(product);
    }
}
