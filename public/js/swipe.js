$(document).on("swipeleft", 'div.ui-page', function(){
    var nextpage = $(this).next('div[data-role="page"]');
    if (nextpage.length > 0) {
        if($.mobile.activePage.attr('id') == "invites_page"){

        }
        else{
            $.mobile.changePage(nextpage, {transition:"slide"}, false, true);
        }
    }
});
$(document).on("swiperight", 'div.ui-page', function(){
    var prevpage = $(this).prev('div[data-role="page"]');
    if (prevpage.length > 0) {
        if($.mobile.activePage.attr('id') == "home_page"){
            prevpage = document.getElementById("list_page")
        }
        $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
    }
});