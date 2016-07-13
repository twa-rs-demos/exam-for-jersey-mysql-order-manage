package com.thoughtworks.ketsu.domain.user;

import java.util.Optional;

public interface UserRepository {
    User save(User user);

    Optional<User> ofId(UserId id);

    User findUserByName(String userName);
}
