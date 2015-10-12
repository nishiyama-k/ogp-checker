package com.koji.ogpchecker.vo;

import java.util.ArrayList;
import java.util.List;

/**
 * http://ogp.me/
 */
public class OgpCheckResult {
	public OgpCheckResult() {
	}

	private Boolean isNoData = true;

	// Basic
	private Ogp title;
	private Ogp type;
	private Ogp image;
	private Ogp url;

	// Optional
	private Ogp audio;
	private Ogp description;
	private Ogp determiner;
	private Ogp locale;
	private Ogp localeAlternate;
	private Ogp siteName;
	private Ogp video;

	// Structured image
	private Ogp imageUrl;
	private Ogp imageSecureUrl;
	private Ogp imageType;
	private Ogp imageWidth;
	private Ogp imageHeight;

	// Structured video
	private Ogp videoSecureUrl;
	private Ogp videoType;
	private Ogp videoWidth;
	private Ogp videoHeight;

	// Structured audio
	private Ogp audioSecureUrl;
	private Ogp audioType;
	
	// facebook
	private Ogp fbAdmins;
	private Ogp fbAppId;
	private Ogp fbPageId;

	// unknown
	private List<Ogp> unknownTags = null;

	public boolean isNoData() {
		return isNoData;
	}

	public void setNoData(Boolean isNoData) {
		this.isNoData = isNoData;
	}

	public Ogp getTitle() {
		return title;
	}

	public void setTitle(Ogp title) {
		this.title = title;
	}

	public Ogp getType() {
		return type;
	}

	public void setType(Ogp type) {
		this.type = type;
	}

	public Ogp getImage() {
		return image;
	}

	public void setImage(Ogp image) {
		this.image = image;
	}

	public Ogp getUrl() {
		return url;
	}

	public void setUrl(Ogp url) {
		this.url = url;
	}

	public Ogp getAudio() {
		return audio;
	}

	public void setAudio(Ogp audio) {
		this.audio = audio;
	}

	public Ogp getDescription() {
		return description;
	}

	public void setDescription(Ogp description) {
		this.description = description;
	}

	public Ogp getDeterminer() {
		return determiner;
	}

	public void setDeterminer(Ogp determiner) {
		this.determiner = determiner;
	}

	public Ogp getLocale() {
		return locale;
	}

	public void setLocale(Ogp locale) {
		this.locale = locale;
	}

	public Ogp getLocaleAlternate() {
		return localeAlternate;
	}

	public void setLocaleAlternate(Ogp localeAlternate) {
		this.localeAlternate = localeAlternate;
	}

	public Ogp getSiteName() {
		return siteName;
	}

	public void setSiteName(Ogp siteName) {
		this.siteName = siteName;
	}

	public Ogp getVideo() {
		return video;
	}

	public void setVideo(Ogp video) {
		this.video = video;
	}

	public Ogp getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(Ogp imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Ogp getImageSecureUrl() {
		return imageSecureUrl;
	}

	public void setImageSecureUrl(Ogp imageSecureUrl) {
		this.imageSecureUrl = imageSecureUrl;
	}

	public Ogp getImageType() {
		return imageType;
	}

	public void setImageType(Ogp imageType) {
		this.imageType = imageType;
	}

	public Ogp getImageWidth() {
		return imageWidth;
	}

	public void setImageWidth(Ogp imageWidth) {
		this.imageWidth = imageWidth;
	}

	public Ogp getImageHeight() {
		return imageHeight;
	}

	public void setImageHeight(Ogp imageHeight) {
		this.imageHeight = imageHeight;
	}

	public Ogp getVideoSecureUrl() {
		return videoSecureUrl;
	}

	public void setVideoSecureUrl(Ogp videoSecureUrl) {
		this.videoSecureUrl = videoSecureUrl;
	}

	public Ogp getVideoType() {
		return videoType;
	}

	public void setVideoType(Ogp videoType) {
		this.videoType = videoType;
	}

	public Ogp getVideoWidth() {
		return videoWidth;
	}

	public void setVideoWidth(Ogp videoWidth) {
		this.videoWidth = videoWidth;
	}

	public Ogp getVideoHeight() {
		return videoHeight;
	}

	public void setVideoHeight(Ogp videoHeight) {
		this.videoHeight = videoHeight;
	}

	public Ogp getAudioSecureUrl() {
		return audioSecureUrl;
	}

	public void setAudioSecureUrl(Ogp audioSecureUrl) {
		this.audioSecureUrl = audioSecureUrl;
	}

	public Ogp getAudioType() {
		return audioType;
	}

	public void setAudioType(Ogp audioType) {
		this.audioType = audioType;
	}

	public Ogp getFbAdmins() {
		return fbAdmins;
	}

	public void setFbAdmins(Ogp fbAdmins) {
		this.fbAdmins = fbAdmins;
	}

	public Ogp getFbAppId() {
		return fbAppId;
	}

	public void setFbAppId(Ogp fbAppId) {
		this.fbAppId = fbAppId;
	}

	public Ogp getFbPageId() {
		return fbPageId;
	}

	public void setFbPageId(Ogp fbPageId) {
		this.fbPageId = fbPageId;
	}

	public List<Ogp> getUnknownTags() {
		return unknownTags;
	}

	public void setUnknownTags(List<Ogp> unknownTags) {
		this.unknownTags = unknownTags;
	}

	public void addUnknownTags(Ogp ogp) {
		if (this.unknownTags == null) {
			this.unknownTags = new ArrayList<>();
		}
		this.unknownTags.add(ogp);
	}
}
