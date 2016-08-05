$(function() {
	// find all internal links (href starts with #)
	$("a[href^='#']").each(function() {
		// apply smoothScroll to each item
		$(this).smoothScroll();
	});
});