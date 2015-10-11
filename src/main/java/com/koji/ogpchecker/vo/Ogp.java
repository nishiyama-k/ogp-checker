package com.koji.ogpchecker.vo;

import org.jsoup.nodes.Element;

public class Ogp {

	private Ogp(){	
	}
	
	private String element;
	private String property;
	private String content;
	
	public static Ogp of(Element elm){
		Ogp ogp = new Ogp();
		ogp.setElement(elm.outerHtml());
		ogp.setProperty(elm.attr("property").replace("og:", ""));
		ogp.setContent(elm.attr("content"));
		return ogp;
	}

	public String getElement() {
		return element;
	}

	public void setElement(String element) {
		this.element = element;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
}
