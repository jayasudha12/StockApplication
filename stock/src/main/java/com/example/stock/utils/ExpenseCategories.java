package com.example.stock.utils;

import java.util.HashMap;
import java.util.Map;

public class ExpenseCategories {
    public static Map<String, Double> getDefaultExpenses() {
        Map<String, Double> expenses = new HashMap<>();
        expenses.put("Housing", 0.0);
        expenses.put("Food", 0.0);
        expenses.put("Transportation", 0.0);
        expenses.put("Entertainment", 0.0);
        return expenses;
    }
}

