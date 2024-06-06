package com.example.E.commerce.application.Exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id,Class<?> entity){
        super("The"+ entity.getSimpleName().toLowerCase() +" with id "+id+"not present.");
    }
    public UserNotFoundException(String msg){
        super(msg);
    }

}
