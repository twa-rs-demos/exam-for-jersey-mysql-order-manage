package com.thoughtworks.ketsu.web;

import com.thoughtworks.ketsu.domain.category.Category;
import com.thoughtworks.ketsu.infrastructure.mybatis.mappers.CategoryMapper;
import org.apache.ibatis.session.SqlSession;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Path("/categories")
public class CategoryApi {

    @Inject
    private SqlSession session;

    @Inject
    private CategoryMapper categoryMapper;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertCategory(Map data) {
        String name = (String) data.get("name");

        Category category = new Category();
        category.setName(name);
        categoryMapper.insertCategory(category);
        session.commit();

        Integer id = category.getId();
        Map result = new HashMap();
        result.put("categoryUri", "categories/" + id);

        return Response.status(Response.Status.CREATED).entity(result).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteCategoryById(@PathParam("id") Integer id) {
        try {
            categoryMapper.deleteCategoryById(id);
            session.commit();
        } catch (Exception e) {
            session.rollback();
            Map message = new HashMap();
            message.put("meaasge", "该分类下还有商品，不能删除！");
            return Response.status(Response.Status.PRECONDITION_FAILED).entity(message).build();
        }
        return Response.status(Response.Status.NO_CONTENT).build();
    }


    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateCategory(
            @PathParam("id") Integer id, @QueryParam("name") String name) {
        Category category = new Category();
        category.setName(name);
        category.setId(id);

        categoryMapper.updateCategory(category);
        session.commit();

        return Response.status(Response.Status.NO_CONTENT).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findCategoryId(
            @PathParam("id") Integer id) {
        Category category = categoryMapper.findCategoryById(id);
        if (category == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.status(Response.Status.OK).entity(category.toMap()).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() {
        List<Category> originCategories = categoryMapper.findAll();

        List<Map> categories = originCategories
                .stream()
                .map(category -> category.toMap())
                .collect(Collectors.toList());

        Map result = new HashMap();
        result.put("items", categories);
        result.put("totalCount", categories.size());

        return Response.status(Response.Status.OK)
                .entity(result).build();
    }


}