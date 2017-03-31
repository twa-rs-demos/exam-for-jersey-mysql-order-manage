package com.thoughtworks.ketsu.infrastructure.mybatis.mappers;


import com.thoughtworks.ketsu.domain.cart.Cart;

import java.util.List;

public interface CartMapper {

    List<Cart> findAll();

    int insertCart(Cart cart);

    int deleteCartById(Integer id);

    int updateCart(Cart cart);

    Cart findCartById(Integer id);

    Integer insertItemCart(Integer itemId, Integer cartId);

    Integer deleteItemCart(Integer itemId, Integer cartId);

}