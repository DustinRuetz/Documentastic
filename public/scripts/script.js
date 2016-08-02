$(function() {
	// find internal links
	// apply smoothScroll
	$("a[href^='#']").each(function() {
		$(this).smoothScroll();
	});

	// below code adapted from technotraps.com
	// http://www.technotraps.com/open-external-links-new-tab/

	// find external links (starts with http://)
	// add target="_blank" attribute
	$("a[href^='http://']").each(function() {
		$(this).attr("target", "_blank");
	});
	
	// find external links (starts with https://)
	// add target="_blank" attribute
	$("a[href^='https://']").each(function() {
		$(this).attr("target", "_blank");
	});
});