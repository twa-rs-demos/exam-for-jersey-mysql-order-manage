package com.thoughtworks.ketsu.web;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.thoughtworks.ketsu.support.ApiSupport;
import com.thoughtworks.ketsu.support.ApiTestRunner;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;


@RunWith(ApiTestRunner.class)
public class CartApiTest extends ApiSupport {

    String basePath = "/carts";

    @Test
    public void should_return_all_carts() throws Exception {

        Response response = target(basePath).request().get();
        assertThat(response.getStatus(), is(200));

        Map result = response.readEntity(Map.class);
        Gson gson = new GsonBuilder().create();

        String jsonStr = gson.toJson(result);
        assertThat(jsonStr, is("{\"totalCount\":3,\"items\":[{\"id\":2,\"userId\":2,\"items\":[{\"price\":13.1,\"categoryUri\":\"categories/1\",\"name\":\"all\",\"id\":1,\"categoryId\":1},{\"price\":5.0,\"categoryUri\":\"categories/3\",\"name\":\"pen\",\"id\":2,\"categoryId\":3}]},{\"id\":3,\"userId\":3,\"items\":[{\"price\":5.0,\"categoryUri\":\"categories/3\",\"name\":\"pen\",\"id\":2,\"categoryId\":3}]},{\"id\":4,\"userId\":1,\"items\":[{\"price\":13.1,\"categoryUri\":\"categories/1\",\"name\":\"all\",\"id\":1,\"categoryId\":1},{\"price\":5.0,\"categoryUri\":\"categories/3\",\"name\":\"pen\",\"id\":2,\"categoryId\":3}]}]}"));
    }

    @Test
    public void should_update_cart_success() throws Exception {
        Map data = new HashMap();
        Entity entity = Entity.entity(data, MediaType.APPLICATION_JSON_TYPE);
        Response response = target(basePath + "/2").queryParam("userId", 3).request().put(entity);
        assertThat(response.getStatus(), is(204));
    }

    @Test
    public void should_insert_cart_and_items_is_not_null_success() throws Exception {
        Map data = new HashMap();
        List<Integer> itemsId = new ArrayList<>();
        itemsId.add(1);
        itemsId.add(2);
        data.put("userId", 1);
        data.put("items", itemsId);

        Entity entity = Entity.entity(data, MediaType.APPLICATION_JSON_TYPE);
        Response response = target(basePath).request().post(entity);
        assertThat(response.getStatus(), is(201));

        Map result = response.readEntity(Map.class);
        assertThat(result.get("cartUri"), is("carts/4"));
    }

    @Test
    public void should_insert_cart_and_items_is_null_success() throws Exception {
        Map data = new HashMap();
        data.put("userId", 1);
        Entity entity = Entity.entity(data, MediaType.APPLICATION_JSON_TYPE);
        Response response = target(basePath).request().post(entity);
        assertThat(response.getStatus(), is(201));
    }

    @Test
    public void should_return_cart_by_Id_success() throws Exception {

        Response response = target(basePath + "/2").request().get();
        Map result = response.readEntity(Map.class);

        assertThat(response.getStatus(), is(200));
        Gson gson = new GsonBuilder().create();
        String jsonStr = gson.toJson(result);
        assertThat(jsonStr, is("{\"id\":2,\"userId\":2,\"items\":[{\"price\":13.1,\"categoryUri\":\"categories/1\",\"name\":\"all\",\"id\":1,\"categoryId\":1},{\"price\":5.0,\"categoryUri\":\"categories/3\",\"name\":\"pen\",\"id\":2,\"categoryId\":3}]}"));
    }

    @Test
    public void should_return_cart_by_Id_failure() throws Exception {
        Response response = target(basePath + "/0").request().get();
        assertThat(response.getStatus(), is(404));
    }

    @Test
    public void should_delete_cart_success() throws Exception {
        Response response = target(basePath + "/1").request().delete();
        assertThat(response.getStatus(), is(204));
    }

    @Test
    public void should_delete_items_of_carts() throws Exception {
        Map data = new HashMap();
        Entity entity = Entity.entity(data, MediaType.APPLICATION_JSON_TYPE);
        Response response = target(basePath + "/2/items/1").request().put(entity);
        assertThat(response.getStatus(), is(204));
    }

}