package com.example.E.commerce.application.ServiceImpl;

import com.example.E.commerce.application.DTO.LoginDTO;
import com.example.E.commerce.application.Entity.User;
import com.example.E.commerce.application.Repository.UserRepository;
import com.example.E.commerce.application.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public ResponseEntity<User> addUser(User user) {
        //user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Object> authenticateUser(LoginDTO user) {
        Optional<User> dbUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());

        if(dbUser.isPresent()){
            return ResponseEntity.ok(user);
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }


}

