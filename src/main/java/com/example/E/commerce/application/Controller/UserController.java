package com.example.E.commerce.application.Controller;

import com.example.E.commerce.application.DTO.LoginDTO;
import com.example.E.commerce.application.Entity.User;
import com.example.E.commerce.application.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/authentication")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> RegisterUser(@RequestBody User user){

        return userService.addUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> LoginUser(@RequestBody LoginDTO user){
        return userService.authenticateUser(user);
    }

}

