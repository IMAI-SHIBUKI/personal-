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
	private int yy;
	private int mm;
	private int dd;
	private String itemname;
	private String money; 
	private String category;
	private String porm;
	
	public Person(int yy,int mm,int dd,String itemname, String money,String category,String porm) {
		this.yy = yy;
		this.mm = mm;
		this.dd = dd;
		this.itemname = itemname;
		this.money = money;
		this.category = category;
		this.porm = porm;
	}
	
	
}

