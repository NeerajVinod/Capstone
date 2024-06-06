package com.example.E.commerce.application.Service;

import com.example.E.commerce.application.DTO.LoginDTO;
import com.example.E.commerce.application.Entity.User;
import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<User> addUser(User user);
    ResponseEntity<LoginDTO> authenticateUser(LoginDTO user);
}
