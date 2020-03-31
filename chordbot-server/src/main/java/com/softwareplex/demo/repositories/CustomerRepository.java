package com.softwareplex.demo.repositories;

import com.softwareplex.demo.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * This class is the customer repository interface
 *
 * @author Ayeshmantha Wijayagunathilaka (ID: 2018072)
 */

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
}
