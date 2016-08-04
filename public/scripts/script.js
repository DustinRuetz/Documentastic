$(function() {
	// find internal links
	// apply smoothScroll
	$("a[href^='#']").each(function() {
		$(this).smoothScroll();
	});

	// find document title
	// use contents of <h1> to update <title> contents
	$("head title").html($("h1").html());

	// below code adapted from Vikas R. Srivastava at technotraps.com
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