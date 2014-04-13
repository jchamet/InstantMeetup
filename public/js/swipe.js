$(document).on("swipeleft", 'div.ui-page', function(){
    if($.mobile.activePage.attr('id') == "invites_page"){
        
    }
    else if($.mobile.activePage.attr('id') == "list_page"){
        $.mobile.changePage("#home_page", {transition:"slide"}, false, true);
    }
    else{
        var nextpage = $(this).next('div[data-role="page"]');
        $.mobile.changePage(nextpage, {transition:"slide"}, false, true);
    }
});
$(document).on("swiperight", 'div.ui-page', function(){
    if($.mobile.activePage.attr('id') == "home_page"){
        $.mobile.changePage("#list_page", {transition: "slide", reverse: true}, true, true);
    }
    else if($.mobile.activePage.attr('id') == "list_page"){
        
    }
    else{
        var prevpage = $(this).prev('div[data-role="page"]');
        $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
    }
});