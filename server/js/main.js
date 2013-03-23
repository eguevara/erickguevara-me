
var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7b579bda632e39cb538cd2a0f1545023&user_id=60671792%40N02&tags=me&format=json&nojsoncallback=1";

$.getJSON(url + "&format=json&jsoncallback=?", function(data){
 var dataLen = data.photos.photo.length;
 var randomPhoto = Math.floor(Math.random() * data.photos.photo.length);
 var item = data.photos.photo[randomPhoto]; 

 src = "http://farm"+ item.farm +".static.flickr.com/"+ item.
 server +"/"+ item.id +"_"+ item.secret +"_z_d.jpg";
 $("<img/>").attr("src", src).appendTo("#images");

})
.complete(function() {
    $('#loader').hide();
})
.error(function() { 
     $("<img/>").attr("src", "http://erickguevara.me/images/default.jpg").appendTo("#images");
})
;
