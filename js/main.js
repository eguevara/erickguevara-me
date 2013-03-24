var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7b579bda632e39cb538cd2a0f1545023&user_id=60671792%40N02&tags=me&format=json&nojsoncallback=1";

$.getJSON(url + "&format=json&jsoncallback=?", function(data){
 var dataLen = data.photos.photo.length;
 var randomPhoto = Math.floor(Math.random() * data.photos.photo.length);
 var item = data.photos.photo[randomPhoto]; 
 var caption = "<p> " + item.title + "</p>";

 src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_z_d.jpg";
 var imgSrc = '<img id="main_photo" src="' + src + '" >';

 console.log(imgSrc);

 $("#images").append(imgSrc);
 $("#images_caption").append(caption);
 $('#images_caption').css({opacity: 0.7}).animate({height: '30px'},500 );;


})
.complete(function() {
    $('#loader').hide();
    $('#images_caption').show();

})
.error(function() { 
     $("<img/>").attr("src", "http://erickguevara.me/images/default.jpg").appendTo("#images");
})
;