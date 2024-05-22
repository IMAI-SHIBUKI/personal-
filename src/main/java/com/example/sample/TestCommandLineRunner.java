package com.example.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TestCommandLineRunner implements CommandLineRunner {
	@Autowired
	PersonRepository personRepository; 
	@Override
	public void run (String... args)throws Exception{
//		Person p1 = new Person("20240517","お米",1000,"食費","支出");
//		Person p2 = new Person("20230301","フリマアプリ",800,"日用雑貨","収入");
//		Person p3 = new Person("20220105","毎月の",7000,"水道費","支出");
//		Person p4 = new Person("20211111","毎月の",10000,"お小遣い","収入");
//		Person p5 = new Person("20242222","夏服",6370,"被服費","支出");
//		Person p6 = new Person("20230329","電車賃",14630,"通勤費","収入");
//		
//		personRepository.save(p1);
//		personRepository.save(p2);
//		personRepository.save(p3);
//		personRepository.save(p4);
//		personRepository.save(p5);
//		personRepository.save(p6);
	}
	
}
