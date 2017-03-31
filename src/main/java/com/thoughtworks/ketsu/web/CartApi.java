package com.thoughtworks.ketsu.web;

import com.thoughtworks.ketsu.domain.cart.Cart;
import com.thoughtworks.ketsu.infrastructure.mybatis.mappers.CartMapper;
import org.apache.ibatis.session.SqlSession;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Path("/carts")
public class CartApi {

    @Inject
    private SqlSession session;

    @Inject
    private CartMapper cartMapper;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertCart(Map data) {
        Cart cart = new Cart();
        cart.setUserId((Integer) data.get("userId"));
        cartMapper.insertCart(cart);
        session.commit();

        Integer cartId = cart.getId();
        if (data.get("items") != null) {
            List<Integer> itemsId = (List<Integer>) data.get("items");
            for (Integer itemId : itemsId) {
                cartMapper.insertItemCart(itemId, cartId);
            }
        }
        Map result = new HashMap();
        result.put("cartUri", "carts/" + cartId);

        return Response.status(Response.Status.CREATED).entity(result).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteCartById(@PathParam("id") Integer id) {
        cartMapper.deleteCartById(id);
        session.commit();
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    @PUT
    @Path("/{cartId}/items/{itemId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteItemCart(
            @PathParam("cartId") Integer cartId,
            @PathParam("itemId") Integer itemId) {
        cartMapper.deleteItemCart(itemId, cartId);
        session.commit();
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateCart(
            @PathParam("id") Integer id, @QueryParam("userId") Integer userId) {
        Cart cart = new Cart();
        cart.setUserId(userId);
        cart.setId(id);

        cartMapper.updateCart(cart);
        session.commit();

        return Response.status(Response.Status.NO_CONTENT).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findCartId(
            @PathParam("id") Integer id) {
        Cart cart = cartMapper.findCartById(id);
        if (cart == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.status(Response.Status.OK).entity(cart.toMap()).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() {

        List<Cart> originCart = cartMapper.findAll();

        List<Map> carts = originCart
                .stream()
                .map(cart -> cart.toMap())
                .collect(Collectors.toList());

        Map result = new HashMap();
        result.put("items", carts);
        result.put("totalCount", carts.size());

        return Response.status(Response.Status.OK)
                .entity(result).build();
    }


}