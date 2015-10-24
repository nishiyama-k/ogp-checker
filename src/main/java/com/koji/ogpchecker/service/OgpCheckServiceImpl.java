package com.koji.ogpchecker.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import com.koji.ogpchecker.vo.Ogp;
import com.koji.ogpchecker.vo.OgpCheckResult;

@Service
public class OgpCheckServiceImpl implements OgpCheckService {

	@Override
	public OgpCheckResult check(String uri) {
		System.out.println("check uri:" + uri);
		List<Element> metas = new ArrayList<>();
		try {
			Document root = Jsoup.connect(uri).get();
			metas = extractOgpMetaTags(root);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return startCheck(metas);
	}

	/**
	 * @param root
	 * @return
	 */
	private List<Element> extractOgpMetaTags(Document root) {
		Element head = root.head();
		List<Element> metas = head.getElementsByTag("meta").stream().filter(elm -> elm.hasAttr("property"))
				.filter(elm -> {
					String property = elm.attr("property");
					return property.startsWith("og:") ? true : property.startsWith("fb:");
				}).collect(Collectors.toList());
		return metas;
	}

	/**
	 * @param ogps
	 * @return
	 */
	private OgpCheckResult startCheck(List<Element> ogps) {
		OgpCheckResult result = new OgpCheckResult();
		result.setNoData(ogps.size() == 0);
		for (Element elm : ogps) {
			Ogp ogp = Ogp.of(elm);
			switch (ogp.getProperty()) {
			case "title":
				result.setTitle(ogp);
				break;
			case "type":
				result.setType(ogp);
				break;
			case "image":
				result.setImage(ogp);
				break;
			case "url":
				result.setUrl(ogp);
				break;
			case "audio":
				result.setAudio(ogp);
				break;
			case "description":
				result.setDescription(ogp);
				break;
			case "determiner":
				result.setDeterminer(ogp);
				break;
			case "locale":
				result.setLocale(ogp);
				break;
			case "locale:alternate":
				result.setLocaleAlternate(ogp);
				break;
			case "site_name":
				result.setSiteName(ogp);
				break;
			case "video":
				result.setVideo(ogp);
				break;
			case "image:url":
				result.setImageUrl(ogp);
				break;
			case "image:secure_url":
				result.setImageSecureUrl(ogp);
				break;
			case "image:type":
				result.setImageType(ogp);
				break;
			case "image:width":
				result.setImageWidth(ogp);
				break;
			case "image:height":
				result.setImageHeight(ogp);
				break;
			case "video:secure_url":
				result.setVideoSecureUrl(ogp);
				break;
			case "video:type":
				result.setVideoType(ogp);
				break;
			case "video:width":
				result.setVideoWidth(ogp);
				break;
			case "video:height":
				result.setVideoHeight(ogp);
				break;
			case "audio:secure_url":
				result.setAudioSecureUrl(ogp);
				break;
			case "audio:type":
				result.setAudioType(ogp);
				break;
			case "fb:admins":
				result.setFbAdmins(ogp);
				break;
			case "fb:app_id":
				result.setFbAppId(ogp);
				break;
			case "fb:page_id":
				result.setFbPageId(ogp);
				break;
			default:
				result.addUnknownTags(ogp);
			}
		}
		return result;
	}
}
