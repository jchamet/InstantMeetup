var onPageLoad = function(pageName) {
	if (pageName == 'mypagehere') {
		// Do something before the page loads/as it loads
	} else if (pageName == 'home_page'){
        google.maps.event.addDomListener(window, 'load', initialize);
	} else {
		// Page not found
	}

}
