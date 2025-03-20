package com.example.hr_portal.models;

import jakarta.persistence.*;
// import lombok.Data;

@Entity
// @Data
public class HR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;  // For simplicity, storing password as plain text (not recommended in real-world applications)
   
    // Getters and setters 
    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
