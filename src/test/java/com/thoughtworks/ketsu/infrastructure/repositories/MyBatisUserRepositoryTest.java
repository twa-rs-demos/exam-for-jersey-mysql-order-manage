package com.thoughtworks.ketsu.infrastructure.repositories;

import com.thoughtworks.ketsu.domain.user.UserRepository;
import com.thoughtworks.ketsu.domain.user.User;
import com.thoughtworks.ketsu.domain.user.UserId;
import com.thoughtworks.ketsu.domain.user.UserRole;
import com.thoughtworks.ketsu.support.DatabaseTestRunner;
import com.thoughtworks.ketsu.support.TestHelper;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@RunWith(DatabaseTestRunner.class)
public class MyBatisUserRepositoryTest {
    @Inject
    UserRepository userRepository;

    @Test
    public void should_create_and_get_user() throws Exception {
        User user = TestHelper.userForTest("123", "name", UserRole.DEV);
        userRepository.save(user);
        final Optional<User> fetch = userRepository.ofId(new UserId("123"));
        assertThat(fetch.isPresent(), is(true));
        final User fetchedUser = fetch.get();
        assertThat(fetchedUser, is(user));
    }
}
