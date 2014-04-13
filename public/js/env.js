var GlobalEnv = function(){}

GlobalEnv.setPhone = function(phoneNumber){
    GlobalEnv.phoneNumber = phoneNumber;
    setCookie("phoneNumber", phoneNumber);
}

var setCookie = function(name, value){
    try {
        intel.xdk.cache.setCookie(name, value, -1);
    } catch(e) {
        alert("Could not save cookie");
    }
}

var getCookie = function(name) {
    return intel.xdk.cache.getCookie(name)
}

var removeCookie = function(name) {
    intel.xdk.cache.removeCookie(name);
}

GlobalEnv.serverIP = "165.225.137.91"
GlobalEnv.UUID = intel.xdk.device.uuid
GlobalEnv.phoneNumber = getCookie("phoneNumber")