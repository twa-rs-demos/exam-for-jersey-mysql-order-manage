package com.thoughtworks.ketsu.domain.user;

public class Password {
    String password;

    public Password(String password, EncryptionService encryptionService) {
        if (password == null)
            throw new IllegalArgumentException();
        if (encryptionService == null)
            throw new IllegalArgumentException();

        this.password = encryptionService.encrypt(password);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Password)) return false;

        Password password1 = (Password) o;

        return password.equals(password1.password);

    }

    @Override
    public int hashCode() {
        return password.hashCode();
    }

    public String getPassword() {
        return password;
    }
}
