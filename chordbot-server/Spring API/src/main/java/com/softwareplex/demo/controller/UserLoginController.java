package com.softwareplex.demo.controller;


import com.softwareplex.demo.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserLoginController {
    private static List<User> listOfUsers = new ArrayList<User>();

    public static List<User> getListOfUsers() {
        return listOfUsers;
    }

    public static void addUsersFromDatabase(List<User> listOfUsersFromDb) {
        listOfUsers.clear();
        System.out.println("[SERVER] - Users added to List: ");
        for (User user : listOfUsersFromDb) {
            listOfUsers.add(user);
            System.out.println(user);
        }

    }

}