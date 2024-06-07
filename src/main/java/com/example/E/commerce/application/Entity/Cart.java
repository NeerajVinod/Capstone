package com.example.E.commerce.application.Entity;
import com.example.E.commerce.application.Entity.User;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType. AUTO)
    private long id;

    @ManyToOne
    @JoinColumn (name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType. EAGER)
    @JoinTable(name = "product_cart",
            joinColumns = @JoinColumn (name = "cart_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn (name
                    = "product_id", referencedColumnName = "id"))
    private List<Product> products;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
