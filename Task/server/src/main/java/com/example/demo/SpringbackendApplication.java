package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class SpringbackendApplication {
	
	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(SpringbackendApplication.class, args);
	}
}
