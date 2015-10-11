package com.koji.ogpchecker.service;

import com.koji.ogpchecker.vo.OgpCheckResult;

public interface OgpCheckService {
	
	OgpCheckResult check(String uri);
	
}
