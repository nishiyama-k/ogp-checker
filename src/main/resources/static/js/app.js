var com = com || {};
com.ogpcheck = com.ogpcheck || {};

/**
 * Main application class
 * 
 * JavaScript doc in accordance with Closure Compiler 
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler#types
 * @constructor
 */
com.ogpcheck.App = function() {
	this.bindEvent_();
};

/**
 * bind event
 * 
 * @private
 */
com.ogpcheck.App.prototype.bindEvent_ = function() {
	$('#try').click($.proxy(this.onClickCheckOgp_, this));
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
	});
};

/**
 * handle submit result
 * 
 * @param{string} profileNo
 * @private
 */
com.ogpcheck.App.prototype.onSubmitResult_ = function(response) {
	$('.container').append($(response)[1]);
};
