package com.example.stock.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.stock.model.Budget;

public interface BudgetRepository extends MongoRepository<Budget, String> {
}

