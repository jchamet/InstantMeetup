var alert = function(msg, title, buttonText){
    if (title === undefined){
        title = "Error";
    }
    if (buttonText === undefined){
        buttonText = "Got it!";
    }
    intel.xdk.notification.alert(msg, title, buttonText);
};
alert("test");

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

function initialize()
{
var mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var onDeviceReady=function(){
    intel.xdk.device.hideSplashScreen();
};

document.addEventListener("intel.xdk.device.ready",onDeviceReady,false);
alert("test");

