package com.thoughtworks.ketsu.web;

import com.thoughtworks.ketsu.support.ApiSupport;
import com.thoughtworks.ketsu.support.ApiTestRunner;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.ws.rs.core.Response;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

@RunWith(ApiTestRunner.class)
public class RootApiTest extends ApiSupport {

    @Test
    public void root_path_should_return_items_uri() throws Exception {
        Response response = target("/").request().get();
        assertThat(response.getStatus(), is(200));

        Map result = response.readEntity(Map.class);
        assertThat(result.get("items"), is("/items"));
    }


}