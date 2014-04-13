var alert = function(msg, title, buttonText){
    if (title === undefined){
        title = "Error";
    }
    if (buttonText === undefined){
        buttonText = "Got it!";
    }
    intel.xdk.notification.alert(msg, title, buttonText);
};

alert("test1");

var getLocation = function(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
      alert("Geolocation is disabled! Please enable it.");
  }
};

function initialize(){
    getLocation();
    var mapProp = {
      center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
      zoom:5,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var onDeviceReady=function(){
    intel.xdk.device.hideSplashScreen();
};

document.addEventListener("intel.xdk.device.ready",onDeviceReady,false);

alert("no js errors");