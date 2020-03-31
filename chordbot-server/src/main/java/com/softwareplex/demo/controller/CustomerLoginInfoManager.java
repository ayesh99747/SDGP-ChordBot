package com.softwareplex.demo.controller;


import com.softwareplex.demo.model.Customer;

import java.util.ArrayList;
import java.util.List;

public class CustomerLoginInfoManager {
    private static List<Customer> listOfCustomers = new ArrayList<Customer>();

    public static List<Customer> getListOfCustomers() {
        return listOfCustomers;
    }

    public static void addCustomerFromDatabase(List<Customer> listOfCustomersFromDb) {
        listOfCustomers.clear();
        System.out.println("Customers added to List: ");
        for (Customer c : listOfCustomersFromDb) {
            listOfCustomers.add(c);
            System.out.println(c);
        }
    }

}