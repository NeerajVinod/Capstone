package com.example.E.commerce.application.Controller;

import com.example.E.commerce.application.Entity.Product;
import com.example.E.commerce.application.Exception.ProductNotFoundException;
import com.example.E.commerce.application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        Product newProduct=productRepository.save(product);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product=productRepository.findById(id).orElseThrow(()->new ProductNotFoundException(id,Product.class));
        return ResponseEntity.ok(product);
    }
    @GetMapping("/byname/{name}")
    public ResponseEntity<Product> getProductByName(@PathVariable String name)
    {
        Product product = productRepository.findByName(name);
        if(product==null)
        {
            throw new ProductNotFoundException(name, Product.class);
        }
        return ResponseEntity.ok(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,@RequestBody Product updatedProduct)
    {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(()-> new ProductNotFoundException(id, Product.class));
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setDescription(updatedProduct.getDescription());
        existingProduct.setProductPrice(updatedProduct.getProductPrice());

        Product savedProduct=productRepository.save(existingProduct);
        return ResponseEntity.ok(savedProduct);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id){
        Product product= productRepository.findById(id).orElseThrow(()->new ProductNotFoundException("Product not found"));
        productRepository.delete(product);
        return ResponseEntity.noContent().build();
    }

}

