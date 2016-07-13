package com.thoughtworks.ketsu.domain.user;

public class UserId {
    private String id;

    private void setId(String id) {
        if (id == null) {
            throw new IllegalArgumentException("id should not be null");
        }
        this.id = id;
    }

    public UserId(String id) {
        setId(id);
    }

    public String id() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserId)) return false;

        UserId userId = (UserId) o;

        return id.equals(userId.id);

    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}
