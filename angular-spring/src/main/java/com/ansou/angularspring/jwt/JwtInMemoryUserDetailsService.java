package com.ansou.angularspring.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "simon",
        "$2a$10$x3xFnW62bswXYDhg4xwVtu1iIAZ13O.nxM8qE0wQp4pBPj6g8cUqu", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


        //"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU1OTY4ODM5NywiaWF0IjoxNTU5MDgzNTk3fQ.OejmLdqA8Lytl5xfPp-0Bo06WGHhZe-cUfZgofjKtI3rUNaW3iEP4WArNUzMjLb1_uWxEO5_vyDG3qEMzNObTg"

        //"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU1OTcyMzkwNiwiaWF0IjoxNTU5MTE5MTA2fQ.dQ4336fDTAUOOEXAlk_Bj_Gg9ZXYxYKwJyFjikfAC_3dgzpomMp9XWUiFZYZOPKzgP1-R4SHxgr-IpNBKU6uRg"
