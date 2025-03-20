package com.example.hr_portal.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hr")
public class HRController {

    private static final String HR_EMAIL = "hr@example.com";
    private static final String HR_PASSWORD = "password123";

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        if (HR_EMAIL.equals(email) && HR_PASSWORD.equals(password)) {
            return "Login successful!";
        } else {
            return "Invalid email or password.";
        }
    }
}
