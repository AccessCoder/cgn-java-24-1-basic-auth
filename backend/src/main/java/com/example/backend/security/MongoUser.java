package com.example.backend.security;

import lombok.Builder;

@Builder
public record MongoUser(String id, String username, String password) {
}
