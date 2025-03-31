package com.example.stock.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stock.model.User;
import com.example.stock.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")  // Ensure frontend can access the backend
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User user) {
        String response = authService.registerUser(user);

        if ("User already exists!".equals(response)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", response));
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", response));
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        String response = authService.loginUser(user);

        if ("Invalid credentials!".equals(response) || "User not found!".equals(response)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", response));
        }

        return ResponseEntity.ok(Map.of("message", response));
    }
}
