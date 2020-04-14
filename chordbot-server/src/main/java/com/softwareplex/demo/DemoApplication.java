package com.softwareplex.demo;

import com.softwareplex.demo.controller.UserLoginController;
import com.softwareplex.demo.model.User;
import com.softwareplex.demo.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    private final UserRepository userRepository;

    public DemoApplication(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        //Users are read from the database and inserted to the list
        System.out.println();
        System.out.println("Users retrieved from db.");
        List<User> listOfCustomersFromDb = userRepository.findAll();
        UserLoginController.addUsersFromDatabase(listOfCustomersFromDb);
    }

}
