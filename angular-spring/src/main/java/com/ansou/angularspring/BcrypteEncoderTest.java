package com.ansou.angularspring;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcrypteEncoderTest {

    public static void main(String[] argv) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        System.out.println(bCryptPasswordEncoder.encode("simon"));
    }

}
