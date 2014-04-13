$(document).on("swipeleft", 'div.ui-page', function(){
    var nextpage = $(this).next('div[data-role="page"]');
    if (nextpage.length > 0) {
        if($.mobile.activePage == "home_page"){
            alert("test");
        }
        else{
            $.mobile.changePage(nextpage, {transition:"slide"}, false, true);
        }
    }
});
$(document).on("swiperight", 'div.ui-page', function(){
    var prevpage = $(this).prev('div[data-role="page"]');
    if (prevpage.length > 0) {
        $.mobile.changePage(prevpage, {transition: "slide",
        reverse: true}, true, true);
    }
});