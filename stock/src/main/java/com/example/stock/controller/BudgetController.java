package com.example.stock.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stock.model.Budget;
import com.example.stock.service.BudgetService;

@RestController
@RequestMapping("/budgets")
@CrossOrigin("*")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    // Create Budget
    @PostMapping
    public Budget createBudget(@RequestBody Budget budget) {
        return budgetService.createBudget(budget);
    }

    // Get All Budgets
    @GetMapping
    public List<Budget> getAllBudgets() {
        return budgetService.getAllBudgets();
    }

    // Get Budget By ID
    @GetMapping("/{id}")
    public Optional<Budget> getBudgetById(@PathVariable String id) {
        return budgetService.getBudgetById(id);
    }

    // Update Budget
    @PutMapping("/{id}")
    public Budget updateBudget(@PathVariable String id, @RequestBody Budget updatedBudget) {
        return budgetService.updateBudget(id, updatedBudget);
    }

    // Delete Budget
    @DeleteMapping("/{id}")
    public String deleteBudget(@PathVariable String id) {
        budgetService.deleteBudget(id);
        return "Budget deleted successfully!";
    }
}
