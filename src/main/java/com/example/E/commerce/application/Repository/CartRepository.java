package com.example.E.commerce.application.Repository;

import com.example.E.commerce.application.DTO.CartDTO;
import com.example.E.commerce.application.Entity.Cart;
import com.example.E.commerce.application.Entity.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

    @Query("SELECT c FROM Cart c WHERE c.user.id = :userId")
    List<Cart> findCartsByUserId(@Param("userId") Long userId);

    @Query("SELECT c.id,p.id FROM Cart c JOIN c.products p JOIN c.user u WHERE u.id = :userId AND p.id = :productId")
    List<Object> findFirstByUserIdAndProductId(Long userId, Long productId);

    @Query("SELECT c.id,p.id FROM Cart c JOIN c.products p JOIN c.user u WHERE u.id = :userId AND p.id = :productId")
    List<Object[]> findFirstByUserIdAndProductId2(Long userId, Long productId);


}




