package com.thoughtworks.ketsu.web;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thoughtworks.ketsu.domain.user.UserRole;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CreateUserRequestBean {
    @JsonProperty
    private String name;
    @JsonProperty
    private String id;
    @JsonProperty
    private String email;
    @JsonProperty
    private UserRole role;
    @JsonProperty
    private String password;

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public UserRole getRole() {
        return role;
    }

    public String getPassword() {
        return password;
    }
}
