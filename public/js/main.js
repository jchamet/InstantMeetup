var alert = function(msg, title, buttonText){
    if (title == undefined){
        title = "Error"
    }
    if (buttonText == undefined){
        buttonText = "Got it!"   
    }
    intel.xdk.notification.alert(msg, title, buttonText)
};

var user_latitude = position.coords.latitude;
var user_longitude = position.coords.longitude;
var getLocation = function(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
    user_latitude = position.coords.latitude;
    user_longitude = position.coords.longitude;
  }
  else{
      alert("Geolocation is disabled! Please enable it.");
  }
};

var initializeMap = function(){
    getLocation();
    var mapProp = {
      center:new google.maps.LatLng(user_latitude,user_longitude),
      zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var onDeviceReady=function(){
    intel.xdk.device.hideSplashScreen();
};

document.addEventListener("intel.xdk.device.ready",onDeviceReady,false);


