package com.thoughtworks.ketsu.web;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;


@Path("/")
public class RootApi {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRootInfo() {
        Map<String, String> result = new HashMap<>();
        result.put("items", "/items");

        return Response.status(Response.Status.OK).entity(result).build();
    }
}