package com.example.stock.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.stock.model.Asset;

@Repository
public interface AssetRepository extends MongoRepository<Asset, String> {
}

