package com.softwareplex.demo.model;

/**
 * This class is the Login Info class
 *
 * @author Ayeshmantha Wijayagunathilaka (ID: 2018072)
 */

public class LoginInfo {
    private String username;    //This is the username
    private String password;    //This is the password

    //This is the constructor
    public LoginInfo(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    //These are the getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        if (InputValidator.stringWithNumbersAndLetters(username)) {
            this.username = username;
        }
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        if (InputValidator.passwords(password)) {
            this.password = password;
        }
    }

    //This is the toString method
    @Override
    public String toString() {
        return "LoginInfo{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}