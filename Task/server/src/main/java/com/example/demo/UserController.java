package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController	
@RequestMapping("/")
public class UserController {
	private final UserRepository userRepository;
	
	public UserController(UserRepository userRepo) {
		this.userRepository = userRepo;
	}
	@PostMapping("user")
	 public UserModel addUser(@RequestBody UserModel model) {
		System.out.println(model);
    	return userRepository.save(model);
		
    }
	
	@GetMapping("user")
	public List<UserModel> getAllUsers() {
		return userRepository.findAll();
	}
	
}
