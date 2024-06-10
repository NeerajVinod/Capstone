package com.example.E.commerce.application.Controller;

import com.example.E.commerce.application.Entity.Cart;
import com.example.E.commerce.application.Entity.Product;
import com.example.E.commerce.application.Entity.User;
import com.example.E.commerce.application.Repository.CartRepository;
import com.example.E.commerce.application.Repository.ProductRepository;
import com.example.E.commerce.application.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/buy")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    // adding to cart function
    @PostMapping
    public ResponseEntity<Cart> addCart(@RequestParam Long userId, @RequestParam Long productId){
        Cart cart = new Cart();
        User user = userRepository.findById(userId).orElseThrow();
        Product product = productRepository.findById(productId).orElseThrow();
        int qty = product.getQty() -1;
        product.setQty(qty);
        product = productRepository.save(product);
        cart.setUser(user);
        cart.setProducts(Set.of(product));
        return ResponseEntity.ok(cartRepository.save(cart));
    }

    @GetMapping("/all")
    public List<Cart> getAllCarts(){
        return cartRepository.findAll();
    }

    // function to be called to show the cart details of the user
    @GetMapping("/get-carts")
    public List<Cart> getCartsOfUser(@RequestParam Long userId){
        return cartRepository.findCartsByUserId(userId);
    }
    @PostMapping("/remove-cart")
    public void removeCartItem(@RequestParam long userId, @RequestParam long productId) {
        List<Object> ids = cartRepository.findFirstByUserIdAndProductId(userId, productId);
        int cartId = ((Long) ids.get(0)).intValue();
        cartRepository.deleteById((long) cartId);

    }

    // function to be called when removing product from cart
    @PostMapping("/remove-cart2")
    public void removeCartItem2(@RequestParam long userId, @RequestParam long productId) {
        List<Object[]> ids = cartRepository.findFirstByUserIdAndProductId2(userId, productId);
        if(!ids.isEmpty()){
            Object[] row = ids.get(0);
            Long cartId = (Long) row[0];
            Long productIds = (Long) row[1];
            Product product = productRepository.findById(productIds).orElseThrow();
            int qty = product.getQty() + 1;
            product.setQty(qty);
            productRepository.save(product);
            cartRepository.deleteById(cartId);
        }
    }
}
