package com.koji.ogpchecker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.koji.ogpchecker.service.OgpCheckService;
import com.koji.ogpchecker.vo.OgpCheckResult;

@Controller
public class HomeController {

	private final OgpCheckService ogpService;

	@Autowired
	public HomeController(OgpCheckService ogpService) {
		this.ogpService = ogpService;
	}

	@RequestMapping(value = "/")
	public String main() {
		return "main";
	}

	@RequestMapping(value = "/regexp", method = RequestMethod.POST)
	public String tryRegExp(@RequestBody String uri, Model model) throws JsonProcessingException {
		OgpCheckResult result = ogpService.check(uri);
		model.addAttribute("model", result);
		return "fragment";
	}

}
