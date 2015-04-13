
$("#search").click(function(){
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: $("#searchterm").val(),
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).prependTo("#results").wrap("<a href=" + item.link + "></a>");
      if ( i == 21 ) {return false};
    });
  });
});