package com.thoughtworks.ketsu.web;

import com.thoughtworks.ketsu.domain.item.Item;
import com.thoughtworks.ketsu.infrastructure.mybatis.mappers.ItemMapper;
import org.apache.ibatis.session.SqlSession;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Path("/items")
public class ItemApi {

    @Inject
    private SqlSession session;

    @Inject
    private ItemMapper itemMapper;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllItems() {

        Map<String, Object> result = new HashMap<>();

        List<Item> originItems = itemMapper.findAll();

        List<Map> items = originItems
                .stream()
                .map(item -> item.toMap())
                .collect(Collectors.toList());

        result.put("items", items);
        result.put("totalCount", items.size());

        return Response.status(Response.Status.OK).entity(result).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getItemsById(@PathParam("id") Integer id) {
        Item item = itemMapper.findItemById(id);
        if (item == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.status(Response.Status.OK).entity(item.toMap()).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertItem(Map data) {

        Double price = (Double) data.get("price");
        String name = (String) data.get("name");
        Integer categoryId = 1;
        if(data.get("categoryId") != null) {
            categoryId = (Integer) data.get("categoryId");
        }

        Item item = new Item();
        item.setPrice(price);
        item.setName(name);
        item.setCategoryId(categoryId);

        itemMapper.insertItem(item);
        Integer id = item.getId();

        session.commit();
        Map result = new HashMap();
        result.put("itemUri", "items/" + id);

        return Response.status(Response.Status.CREATED).entity(result).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertItem(@PathParam("id") Integer id) {
        System.out.println(itemMapper.deleteItemById(id));
        session.commit();
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateItem(
            @PathParam("id") Integer id,
            Map data) {
        Item item = new Item();
        item.setId(id);
        item.setName((String) data.get("name"));
        item.setPrice((Double) data.get("price"));
        item.setCategoryId((Integer) data.get("categoryId"));

        itemMapper.updateItem(item);
        session.commit();
        return Response.status(Response.Status.NO_CONTENT).build();
    }

}
