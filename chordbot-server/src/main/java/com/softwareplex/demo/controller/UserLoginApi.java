package com.softwareplex.demo.controller;


import com.softwareplex.demo.model.LoginData;
import com.softwareplex.demo.model.User;
import com.softwareplex.demo.repositories.UserRepository;
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
public class UserLoginApi {
    @Autowired
    private UserRepository userRepository;

    //This url is used if a new user is to be added
    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    @ResponseBody
    public void addNewUser(@RequestBody User user) {
        userRepository.insert(user);
        UserLoginController.addCustomerFromDatabase(userRepository.findAll());
    }

    //This url is used to check if a username is unique and returns a boolean accordingly
    @RequestMapping(value = "/isUsernamePresent", method = RequestMethod.GET)
    @ResponseBody
    public boolean isUsernamePresent(@RequestParam(value = "username", required = true) String username) {
        List<User> listOfUsers = UserLoginController.getListOfUsers();
        for (User user : listOfUsers) {
            if (username.equals(user.getUsername())) {
                return true;
            }
        }
        return false;
    }


    @RequestMapping(value = "/validateLogin", method = RequestMethod.POST)
    @ResponseBody
    public boolean validateLoginInfo(@RequestBody LoginData loginData) {
        List<User> users = UserLoginController.getListOfUsers();
        for (User user : users) {
            if ((user.getUsername().equals(loginData.getUsername()) && user.getPassword().equals(loginData.getPassword())) || (user.getEmailAddress().equals(loginData.getUsername()) && user.getPassword().equals(loginData.getPassword()))) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    }


}
