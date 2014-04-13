var homepage = $(this).('div[id="homepage"]');
var lists = $(this).('div[id="lists"]');
$(document).on("swiperight", 'div.ui-page', function(){
    var nextpage = $(this).next('div[data-role="page"]');
    if (nextpage.length > 0) {
        $.mobile.changePage(lists, {transition:"slide", reverse:true}, true, true);
    }
});
/*$(document).on("swipeleft", 'div.ui-page', function(){
    var nextpage = $(this).next('div[data-role="page"]');
    if (nextpage.length > 0) {
        $.mobile.changePage(nextpage, {transition:"slide"}, false, true);
    }
});
$(document).on("swiperight", 'div.ui-page', function(){
    var prevpage = $(this).prev('div[data-role="page"]');
    if (prevpage.length > 0) {
        $.mobile.changePage(prevpage, {transition: "slide",
        reverse: true}, true, true);
    }
});*/