package com.softwareplex.demo.controller;


import com.softwareplex.demo.model.Customer;
import com.softwareplex.demo.model.LoginInfo;
import com.softwareplex.demo.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class is the customer login info api class
 *
 * @author Ayeshmantha Wijayagunathilaka (ID: 2018072)
 */

@Controller
@RequestMapping("/api/customers")
public class CustomerLoginInfoApi {
    @Autowired
    private CustomerRepository customerRepository;

    //This url is used if a new customer is to be added
    @RequestMapping(value = "/addCustomer", method = RequestMethod.POST)
    @ResponseBody
    public void addNewCustomer(@RequestBody Customer customer) {
        customerRepository.insert(customer);
        CustomerLoginInfoManager.addCustomerFromDatabase(customerRepository.findAll());
    }

    //This url is used to check if a username is unique and returns a boolean accordingly
    @RequestMapping(value = "/isUsernamePresent", method = RequestMethod.GET)
    @ResponseBody
    public boolean isUsernamePresent(@RequestParam(value = "username", required = true) String username) {
        List<Customer> listOfCustomers = CustomerLoginInfoManager.getListOfCustomers();
        for (Customer c : listOfCustomers) {
            if (username.equals(c.getUsername())) {
                return true;
            }
        }
        return false;
    }


    @RequestMapping(value = "/validateLogin", method = RequestMethod.POST)
    @ResponseBody
    public boolean validateLoginInfo(@RequestBody LoginInfo loginInfo) {
        List<Customer> customers = CustomerLoginInfoManager.getListOfCustomers();
        for (Customer customer : customers) {
            if ((customer.getUsername().equals(loginInfo.getUsername()) && customer.getPassword().equals(loginInfo.getPassword())) || (customer.getEmailAddress().equals(loginInfo.getUsername()) && customer.getPassword().equals(loginInfo.getPassword()))) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    }


}
