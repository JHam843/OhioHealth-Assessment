package com.example.demo;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
 
@Entity
@Table(name = "users")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String firstname;
     
    private String cityname;
     
    private String joinyear;
    
    public UserModel() {
    	
    }
    
    public UserModel(String firstname, String cityname, String joinyear) {
    	this.firstname = firstname;
    	this.cityname = cityname;
    	this.joinyear = joinyear;
    }
    public int getId() {
    	return id;
    }
    public void setId(int id) {
    	this.id = id;
    }
    public String getFirstname() {
    	return firstname;
    }
    
    public void setFirstname(String firstname) {
    	this.firstname = firstname;
    }
	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}

	public String getJoinyear() {
		return joinyear;
	}

	public void setJoinyear(String joinyear) {
		this.joinyear = joinyear;
	}
     
}