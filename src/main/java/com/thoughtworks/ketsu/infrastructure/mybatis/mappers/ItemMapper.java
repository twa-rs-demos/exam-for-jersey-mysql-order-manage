package com.thoughtworks.ketsu.infrastructure.mybatis.mappers;


import com.thoughtworks.ketsu.domain.item.Item;

import java.util.List;

public interface ItemMapper {

    List<Item> findAll();

    Item findItemById(Integer id);

    int insertItem(Item item);

    int deleteItemById(Integer id);

    int updateItem(Item item);
}