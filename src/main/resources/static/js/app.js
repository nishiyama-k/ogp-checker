var com = com || {};
com.ogpcheck = com.ogpcheck || {};

/**
 * Main application class
 * 
 * JavaScript doc in accordance with Closure Compiler
 * 
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler#types
 * @constructor
 */
com.ogpcheck.App = function() {
	this.initializePlugins_();
	this.bindEvent_();
};

com.ogpcheck.App.prototype.initializePlugins_ = function() {
	this.refreshAutocomplete_();
	var source = JSON.parse(localStorage.getItem('autocomplete'));
	$('#uri').autocomplete({
		source : [ source ]
	});
};

/**
 * bind event
 * 
 * @private
 */
com.ogpcheck.App.prototype.bindEvent_ = function() {
	$('#try').click($.proxy(this.onClickCheckOgp_, this));
	$('#uri').keypress($.proxy(function(e) {
		if (e.which == 13){// enter
			this.onClickCheckOgp_();
		}
	}, this));
};

com.ogpcheck.App.prototype.onClickCheckOgp_ = function() {
	$('.container').find('#result').remove();
	$.ajax({
		headers : {
			'Content-Type' : 'application/json'
		},
		'type' : 'POST',
		'url' : 'regexp',
		'data' : $('#uri').val(),
		'success' : $.proxy(this.onSubmitResult_, this),
		'error' : $.proxy(this.onSubmitError_, this)
	});
};

com.ogpcheck.App.prototype.onSubmitResult_ = function(response) {
	$('.container').append($(response)[1]);
	this.refreshAutocomplete_();
	var source = JSON.parse(localStorage.getItem('autocomplete'));
	$('#uri').autocomplete('setSource', [ source ]);

};

com.ogpcheck.App.prototype.refreshAutocomplete_ = function() {
	var source = JSON.parse(localStorage.getItem('autocomplete'));
	if (!source) {
		source = [];
	}
	var newUri = $('#uri').val();
	for (var i = 0; i < source.length; i++) {
		if (source[i] === newUri) {
			source.splice(i, 1);
			break;
		}
	}
	source.unshift($('#uri').val());
	localStorage.setItem('autocomplete', JSON.stringify(source));
};

com.ogpcheck.App.prototype.onSubmitError_ = function(response) {
	alert(response.responseJSON.message);
};
