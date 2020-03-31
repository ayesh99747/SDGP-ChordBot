package com.softwareplex.demo.model;

public class InputValidator {
    //This is called to validate a string with numbers only
    public static boolean stringWithNumbers(String input) {
        return (!input.equals("")) && (input != null) && (input.matches("^[0-9]*$"));
    }

    //This is called to validate a string with letters only
    public static boolean stringWithLetters(String input) {
        return (!input.equals("")) && (input != null) && (input.matches("^[a-zA-Z ]+"));
    }

    //This is called to validate a string with numbers and letters only
    public static boolean stringWithNumbersAndLetters(String input) {
        return (!input.equals("")) && (input != null) && (input.matches("^[a-zA-Z0-9 ]+"));
    }

    //This is called to validate a plate number because it has number,letters and a '-'
    public static boolean plateNumbers(String input) {
        return (!input.equals("")) && (input != null) && (input.matches("^[a-zA-Z0-9- ]+"));
    }

    //This is called to validate a integers
    public static boolean integers(int input) {
        return input > 0;
    }

    //This is called to validate big decimals
    public static boolean bigDecimals(double rate) {
        return rate > 0.00;
    }


    //This is called to validate an email address
    public static boolean emailAddress(String emailAddress) {
        return (!emailAddress.equals("")) && (emailAddress != null) && (emailAddress.matches("^[a-zA-Z0-9.@_]*$"));
    }

    //This is called to validate passwords
    public static boolean passwords(String password) {
        return (!password.equals("")) && (password != null);
    }
}

