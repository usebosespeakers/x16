$(function() {



function Site(name, url1, url2, delimeter, category, full_url, icon){
        this.name = name;
        this.url1 = url1;
        this.url2 = url2;
        this.category = category;
        this.full_url = full_url;
        this.icon = icon;
}

var ssl_icon = 'https://www.google.com/help/hc/images/chrome_green_lock_details.png'

var sites = [
        new Site("Amazon", "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=", "", "+", ["Shopping"], "", "http://amazon.com/favicon.ico"),
		new Site("Ebay", "http://search.ebay.com/", "", "-" ["Auction","Shopping"], "", "http://ebay.com/favicon.ico"),
        new Site("Kickass", "https://kickass.to/usearch/", "/", " ", ["Torrents"], "", ssl_icon),
        new Site("The Pirate Bay","https://thepiratebay.se/search/", "", " ", "[Torrents]", "", "http://thepiratebay.se/favicon.ico"),
        new Site("Twitter", "https://twitter.com/search?q=", "&src=typd", " ", ["Social Media"], "", "http://twitter.com/favicon.ico"),
        new Site("Walmart", "http://www.walmart.com/search/?query=", "", " ", ["Shopping"], "", "http://walmart.com/favicon.ico"),
];


//Update query object for all items in sites array
function update_sites_list(query){
        $("#results").html("");
        $("#results_title").show().html(" Results for: " + query);
        for (var i in sites) {
                sites[i].full_url = sites[i].url1 + query.replace(/ /g, sites[i].delimeter) + sites[i].url2;
                $("#results").append("<img style='margin-left:1em' src='" + sites[i].icon + "' width='14px' height='14px'>" + " <b><a href='" + sites[i].full_url + "' title='"+ sites[i].full_url +"'>" + sites[i].name + "</a></b></br>");
        }
}


//Handle input changes
$(".main_search_box").on('input propertychange', function(){
          //Clear results when there is no input otherwise update list
          if ( $(".main_search_box").val() != "" ){
                update_sites_list($(".main_search_box").val());
                $("#results").show();
                $("#footer").show();
      } else {
                $("#results").hide();
                $("#results_title").hide();
                $("#footer").hide();
      }
});

//Handle submit/enter for form - do nothing!
$("#search").submit(function(){
	return false;
});

//Initial call to update site list when navigating back to the page that already has .main_search_box populated
//Check to see if it is empty first!

if ( $(".main_search_box").val() != "" ){
        update_sites_list($(".main_search_box").val());
}


});
