package com.example.sample;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer>{
	
	List<Person> findById(int Id);
	List<Person> findByYy(int yy);
	List<Person> findByMm(int mm);
	List<Person> findByDd(int dd);
	List<Person> findByItemname(String itemname);
	List<Person> findByMoney(String money);
	List<Person> findByCategory(String category);
	List<Person> findByPorm(String porm);
	
}