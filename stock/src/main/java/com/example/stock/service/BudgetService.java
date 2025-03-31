package com.example.stock.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stock.model.Budget;
import com.example.stock.repository.BudgetRepository;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    // Create Budget
    public Budget createBudget(Budget budget) {
        budget.setCreatedAt(LocalDateTime.now());
        budget.setUpdatedAt(LocalDateTime.now());
        return budgetRepository.save(budget);
    }

    // Get All Budgets
    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    // Get Budget By ID
    public Optional<Budget> getBudgetById(String id) {
        return budgetRepository.findById(id);
    }

    // Update Budget
    public Budget updateBudget(String id, Budget updatedBudget) {
        return budgetRepository.findById(id).map(budget -> {
            budget.setName(updatedBudget.getName());
            budget.setTotalAmount(updatedBudget.getTotalAmount());
            budget.setExpenses(updatedBudget.getExpenses());
            budget.setUpdatedAt(LocalDateTime.now());
            return budgetRepository.save(budget);
        }).orElse(null);
    }

    // Delete Budget
    public void deleteBudget(String id) {
        budgetRepository.deleteById(id);
    }
}
