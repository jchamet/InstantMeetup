var onPageLoad = function(pageName) {
	if (pageName == 'mypagehere') {
		// Do something before the page loads/as it loads
	} else if (pageName == 'home_page'){
		initializeMap();   
	} else {
		// Page not found
	}

}
