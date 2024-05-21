package com.example.sample;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer>{
	
	List<Person> findById(int Id);
	List<Person> findByDay(String day);
	List<Person> findByItemname(String itemname);
	List<Person> findByMoney(int money);
	List<Person> findByCategory(String category);
	List<Person> findByPorm(String porm);
	
}