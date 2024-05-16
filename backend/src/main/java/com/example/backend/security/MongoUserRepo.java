package com.example.backend.security;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MongoUserRepo extends MongoRepository<MongoUser, String> {

    Optional<MongoUser> findByUsername(String username);

}
