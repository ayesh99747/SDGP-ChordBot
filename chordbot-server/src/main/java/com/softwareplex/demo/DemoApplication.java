package com.softwareplex.demo;

import com.softwareplex.demo.controller.CustomerLoginInfoManager;
import com.softwareplex.demo.model.Customer;
import com.softwareplex.demo.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private final CustomerRepository customerRepository;

	public DemoApplication(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		//Customers are read from the database and inserted to the list
		System.out.println();
		System.out.println("Customers retrieved from db.");
		List<Customer> listOfCustomersFromDb = customerRepository.findAll();
		CustomerLoginInfoManager.addCustomerFromDatabase(listOfCustomersFromDb);
	}
}
