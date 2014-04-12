var alert = function(msg, title, buttonText){
    if (title == undefined){
        title = "Error"
    }
    if (buttonText == undefined){
        buttonText = "Got it!"   
    }
    intel.xdk.notification.alert(msg, title, buttonText)
}

var onDeviceReady=function(){
    intel.xdk.device.hideSplashScreen();
};

document.addEventListener("intel.xdk.device.ready",onDeviceReady,false);


