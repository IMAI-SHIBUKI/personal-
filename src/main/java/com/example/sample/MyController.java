package com.example.sample;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MyController {
	@Autowired
	Myservice service;
	@Autowired
	PersonRepository personrepository;

	@GetMapping("/Report")
	public String gethome(@RequestParam(value = "keyword", required = false) String keyword, Model model) {
		List<Person> list;
		if (keyword != null) {
			list = personrepository.findByPorm(keyword);

		} else {
			list = personrepository.findAll();
		}
		model.addAttribute("num", list);
		return "Report";
	}
	//---------------

	@GetMapping("/Test")
	public String Test(Model model) {
		return "Test";
	}

	//---------------
	@GetMapping("/Test")
	public String submitForm(@RequestParam("day") String day,
			@RequestParam("item") String item,
			@RequestParam("money") int money,
			@RequestParam("category") String category,
			@RequestParam("aors") String aors,
			Model model) {
		Person plus = new Person(day,item,money,category,aors);
		personrepository.save(plus);
		System.out.println(plus);
		return "Test";
	}
}
