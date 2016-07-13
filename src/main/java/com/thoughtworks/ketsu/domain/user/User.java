package com.thoughtworks.ketsu.domain.user;

import com.thoughtworks.ketsu.domain.AssertionConcern;
import com.thoughtworks.ketsu.infrastructure.records.Record;
import com.thoughtworks.ketsu.web.jersey.Routes;

import java.util.HashMap;
import java.util.Map;

import static java.util.Arrays.asList;

public class User extends AssertionConcern implements Record {
    private UserId userId;
    private String name;
    private String email;
    private UserRole role;
    private String password;

    public User(UserId id, String name, String email, UserRole role, String password) {
        setUserId(id);
        setName(name);
        setEmail(email);
        setRole(role);
        setPassword(password);
    }

    private User() {

    }

    public UserId getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    private void setUserId(UserId userId) {
        if (userId == null) {
            throw new IllegalArgumentException();
        }
        this.userId = userId;
    }

    private void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException();
        }
        this.name = name;
    }

    private void setEmail(String email) {
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException();
        }
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;

        User user = (User) o;

        return getUserId().equals(user.getUserId());

    }

    @Override
    public int hashCode() {
        return getUserId().hashCode();
    }

    @Override
    public Map<String, Object> toRefJson(Routes routes) {
        return new HashMap<String, Object>() {{
            put("id", getUserId().id());
            put("name", getName());
            put("email", getEmail());
            put("role", role);
            put("links", asList(
                    new HashMap<String, Object>() {{
                        put("rel", "self");
                        put("uri", routes.userUrl(User.this));
                    }}
            ));
        }};
    }

    @Override
    public Map<String, Object> toJson(Routes routes) {
        return toRefJson(routes);
    }

    private void setRole(UserRole role) {
        assertArgumentNotNull(role, "user must have a role");
        this.role = role;
    }

    public UserRole getRole() {
        return role;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }
}
