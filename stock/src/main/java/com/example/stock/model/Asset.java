package com.example.stock.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assets")
public class Asset {

    @Id
    private String id;
    private String assetUrl;
    private String name;
    private double price;
    private double change24H;
    private double holdings;
    private double avgBuyPrice;
    private double profitLoss;

    // Constructors
    public Asset() {}

    public Asset(String assetUrl, String name, double price, double change24H, double holdings, double avgBuyPrice, double profitLoss) {
        this.assetUrl = assetUrl;
        this.name = name;
        this.price = price;
        this.change24H = change24H;
        this.holdings = holdings;
        this.avgBuyPrice = avgBuyPrice;
        this.profitLoss = profitLoss;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public String getAssetUrl() {
        return assetUrl;
    }

    public void setAssetUrl(String assetUrl) {
        this.assetUrl = assetUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getChange24H() {
        return change24H;
    }

    public void setChange24H(double change24H) {
        this.change24H = change24H;
    }

    public double getHoldings() {
        return holdings;
    }

    public void setHoldings(double holdings) {
        this.holdings = holdings;
    }

    public double getAvgBuyPrice() {
        return avgBuyPrice;
    }

    public void setAvgBuyPrice(double avgBuyPrice) {
        this.avgBuyPrice = avgBuyPrice;
    }

    public double getProfitLoss() {
        return profitLoss;
    }

    public void setProfitLoss(double profitLoss) {
        this.profitLoss = profitLoss;
    }
}
