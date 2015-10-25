package com.koji.ogpchecker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestfulController {
	
	@RequestMapping(method=RequestMethod.GET, value="/rest/wakeup")
	public void wakeup(){
		System.out.println("wakeup");
	}
	
}
