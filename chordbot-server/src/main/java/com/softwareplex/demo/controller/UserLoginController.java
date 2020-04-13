package com.softwareplex.demo.controller;


import com.softwareplex.demo.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserLoginController {
    private static List<User> listOfUsers = new ArrayList<User>();

    public static List<User> getListOfUsers() {
        return listOfUsers;
    }

    public static void addCustomerFromDatabase(List<User> listOfCustomersFromDb) {
        listOfUsers.clear();
        System.out.println("Users added to List: ");
        for (User user : listOfCustomersFromDb) {
            listOfUsers.add(user);
            System.out.println(user);
        }
    }

}