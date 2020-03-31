package com.softwareplex.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * This class is the Customer class
 *
 * @author Ayeshmantha Wijayagunathilaka (ID: 2018072)
 */
@Data
@Document(collection = "Customers")
public class Customer {
    @Id
    private String Id;  //This stores the customer id

    @Field("customerName")
    private String customerName;//This is the customer name
    @Field("emailAddress")
    private String emailAddress;//This is the customer email address
    @Field("username")
    private String username;    //This is the username
    @Field("password")
    private String password;    //This is the password


    public Customer( String customerName, String emailAddress, String username, String password) {
        this.customerName = customerName;
        this.emailAddress = emailAddress;
        this.username = username;
        this.password = password;
    }

    public String getId() {
        return Id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
