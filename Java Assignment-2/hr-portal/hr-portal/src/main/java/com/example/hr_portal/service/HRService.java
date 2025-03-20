package com.example.hr_portal.service;

import com.example.hr_portal.models.HR;
import com.example.hr_portal.repository.HRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HRService {

    @Autowired
    private HRRepository hrRepository;

    public boolean authenticateHR(String email, String password) {
        System.out.println("Authenticating for email:" + email);
        Optional<HR> hrOptional = hrRepository.findByEmail(email);
        if (hrOptional.isPresent()) {
            HR hr = hrOptional.get();
    
            if(hr.getPassword().trim().equals(password.trim())){
                System.out.println("Authentication Successful");
                return true;
            } else{
                System.out.println("Password Mismatch");
            }

        } else {
            System.out.println("HR not found");
        }
            
        return false;
    }
}
