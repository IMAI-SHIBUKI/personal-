package com.example.sample;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "test")
@NoArgsConstructor
public class Person {
	@Id
	@GeneratedValue
	private int Id;
	private String day;
	private String itemname;
	private int money; 
	private String category;
	private String porm;
	
	public Person(String day,String itemname, int money,String category,String porm) {
		this.day = day;
		this.itemname = itemname;
		this.money = money;
		this.category = category;
		this.porm = porm;
	}
	
	
}

