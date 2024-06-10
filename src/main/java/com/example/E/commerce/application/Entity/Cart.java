package com.example.E.commerce.application.Entity;
import com.example.E.commerce.application.Entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType. AUTO)
    private long id;

    @ManyToOne
    @JoinColumn (name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToMany
    @JoinTable(name = "product_cart",
            joinColumns = @JoinColumn (name = "cart_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn (name
                    = "product_id", referencedColumnName = "id"))
    private Set<Product> products;

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

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
