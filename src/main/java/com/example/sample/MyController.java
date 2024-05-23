package com.example.sample;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MyController {
	@Autowired
	Myservice service;
	@Autowired
	PersonRepository personrepository;
	String [] ber = {"noname","食費","日用雑費","外食費","交際費","家賃","水道費","光費","熱費","医療費","通信費","通勤費","旅行費","ガソリン代金","衣服費","お小遣い","貯金","その他"};
	
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
	public String Demo(Model model) {
		return "Test";
	}

	

	//---------------
	@PostMapping("/Test")
	public String submitForm(@RequestParam("yy") int yy,
			@RequestParam("mm") int mm,
			@RequestParam("dd") int dd,
			@RequestParam("item") String item,
			@RequestParam("money") String money,
			@RequestParam("category") String category,
			@RequestParam("aors") String aors,
			Model model) {
		Person plus = new Person(yy,mm,dd,item,money,category,aors);
		personrepository.save(plus);
		System.out.println(plus);
		return "Test";
	}
	
	@PostMapping("/index")
	public String indexForm(
			@RequestParam("yy") int yy,
			@RequestParam("mm") int mm,
			@RequestParam("dd") int dd,
			@RequestParam("item") String item,
			@RequestParam("money") String money,
			@RequestParam("category") String category,
			@RequestParam("aors") String aors,
			Model model) {
			String tentative = category;
			for(int count=0;count<20;count++) {
				if(count == Integer.parseInt(tentative)) {
					category = ber[count];
					break;
				}
			}
			
		Person plus = new Person(yy,mm,dd,item,money,category,aors);
		personrepository.save(plus);
		System.out.println(plus);
		return "index";
	}
	
	@PostMapping("/delete/{Id}")
	public String deletebuuton(@PathVariable("Id") int Id ,Model model) {
		System.out.println(Id);
		personrepository.deleteById(Id);
		return "redirect:/Report";
	}
		
	
}
