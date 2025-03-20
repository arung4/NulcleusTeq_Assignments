package com.example.hr_portal.controllers;

import com.example.hr_portal.service.HRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private HRService hrService;

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        System.out.println("Email: " + email + " Password: " + password);
        System.out.println("********************************");
        boolean isAuthenticated = hrService.authenticateHR(email, password);
        if (isAuthenticated) {
            return "Login successful! ✅";
        } else {
            return "Invalid email or password. ❌";
        }
    }
}
