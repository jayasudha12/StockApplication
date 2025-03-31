package com.example.stock.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.stock.model.Asset;
import com.example.stock.repository.AssetRepository;

@Service
public class AssetService {

    private final AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public List<Asset> getAllAssets() {
        return assetRepository.findAll();
    }

    public Optional<Asset> getAssetById(String id) {
        return assetRepository.findById(id);
    }

    public Asset addAsset(Asset asset) {
        return assetRepository.save(asset);
    }

    public Asset updateAsset(String id, Asset updatedAsset) {
        return assetRepository.findById(id)
                .map(asset -> {
                    asset.setAssetUrl(updatedAsset.getAssetUrl());
                    asset.setName(updatedAsset.getName());
                    asset.setPrice(updatedAsset.getPrice());
                    asset.setChange24H(updatedAsset.getChange24H());
                    asset.setHoldings(updatedAsset.getHoldings());
                    asset.setAvgBuyPrice(updatedAsset.getAvgBuyPrice());
                    asset.setProfitLoss(updatedAsset.getProfitLoss());
                    return assetRepository.save(asset);
                })
                .orElseThrow(() -> new RuntimeException("Asset not found!"));
    }

    public void deleteAsset(String id) {
        assetRepository.deleteById(id);
    }
}
