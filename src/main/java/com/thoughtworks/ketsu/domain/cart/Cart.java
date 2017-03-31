package com.thoughtworks.ketsu.domain.cart;

import com.thoughtworks.ketsu.domain.item.Item;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Cart {
    private int id;
    private int userId;
    private List<Item> items;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public Map<String, Object> toMap() {
        Map<String, Object> result = new HashMap<>();
        result.put("id", getId());
        result.put("userId", getUserId());
        List<Map> items = getItems()
                .stream()
                .map(item -> item.toMap())
                .collect(Collectors.toList());

        result.put("items", items);

        return result;
    }
}
