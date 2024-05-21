package com.example.sample;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Myservice {
	@Autowired
	PersonRepository personRepository; 
	public ArrayList<Person>GetPersonList(){
		
		ArrayList<Person> Arr=(ArrayList<Person>) personRepository.findAll();
		return Arr;
	}
	
}
