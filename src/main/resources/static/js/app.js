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
    $('input:visible').first().focus();
    this.initializePlugins_();
    this.bindEvent_();
    this.urlPattern_ = new RegExp(
        '^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$',
        'i');
    this.latestUrl_ = null;
};

/**
 * @private
 */
com.ogpcheck.App.prototype.initializePlugins_ = function() {
    this.refreshAutocomplete_('https://www.evernote.com/');
    this.refreshAutocomplete_('http://ogp.me/');
    var source = JSON.parse(localStorage.getItem('autocomplete'));
    $('#uri').autocomplete({
        source: [source],
        openOnFocus: true
    });
};

/**
 * bind event
 * 
 * @private
 */
com.ogpcheck.App.prototype.bindEvent_ = function() {
    $('#uri').keypress($.proxy(function(e) {
        if (e.which == 13) { // enter
            this.onClickCheckOgp_();
        }
    }, this));
    $('#uri').blur($.proxy(function() {
        if (this.latestUrl_ === $('#uri').val()) {
            if ($('.container').find('#result').length !== 0) {
                console.log('same url on blur');
                return;
            }
        }
        this.onClickCheckOgp_();
    }, this));
};

/**
 * @private
 */
com.ogpcheck.App.prototype.onClickCheckOgp_ = function() {
    var url = $('#uri').val();
    if (!this.urlPattern_.test(url)) {
        console.log('unmatch url:' + url);
        return;
    }

    this.disposeResult_();
    this.latestUrl_ = url;
    $('#loader').addClass('shown');
    $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        'type': 'POST',
        'url': 'regexp',
        'data': url,
        'success': $.proxy(this.onSubmitResult_, this),
        'error': $.proxy(this.onSubmitError_, this)
    });
};

/**
 * @param{string} response
 * @private
 */
com.ogpcheck.App.prototype.onSubmitResult_ = function(response) {
    $('#loader').removeClass('shown');
    $('.container').append($(response)[1]);
    $('.container').find('#result').show('blind', {}, 500);
    this.refreshAutocomplete_();
    var source = JSON.parse(localStorage.getItem('autocomplete'));
    $('#uri').autocomplete('setSource', [source]);
    this.bindResult_();
};

/**
 * @private
 */
com.ogpcheck.App.prototype.disposeResult_ = function() {
    $('.container').find('#result').hide('fold', {}, 300, function() {
        $('.container').find('#result').remove();
    });
};

/**
 * @private
 */
com.ogpcheck.App.prototype.bindResult_ = function() {
    $('.close-result').click($.proxy(this.disposeResult_, this));
};

/**
 * @para{string} url
 * @private
 */
com.ogpcheck.App.prototype.refreshAutocomplete_ = function(url) {
    var source = JSON.parse(localStorage.getItem('autocomplete'));
    if (!source) {
        source = [];
    }
    var newUri = url ? url : $('#uri').val();
    for (var i = 0; i < source.length; i++) {
        if (source[i] === newUri) {
            source.splice(i, 1);
            break;
        }
    }
    source.unshift(newUri);
    localStorage.setItem('autocomplete', JSON.stringify(source));
};

/**
 * @param{string} response
 * @private
 */
com.ogpcheck.App.prototype.onSubmitError_ = function(response) {
    $('#loader').addClass('shown');
    alert(response.responseJSON.message);
};
