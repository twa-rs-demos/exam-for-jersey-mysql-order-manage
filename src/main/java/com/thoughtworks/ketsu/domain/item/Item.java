package com.thoughtworks.ketsu.domain.item;

import java.util.HashMap;
import java.util.Map;

public class Item {
    private int id;
    private double price;
    private String name;
    private Integer categoryId;


    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Object> toMap() {
        Map<String, Object> result = new HashMap<>();

        result.put("id", getId());
        result.put("name", getName());
        result.put("price", getPrice());
        result.put("categoryId", getCategoryId());
        result.put("categoryUri", "categories/" + getCategoryId());

        return result;
    }
}
