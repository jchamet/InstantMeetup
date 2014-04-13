var Database = function(){}

var Database.apiURL = "http://" + GlobalEnv.serverIP + ":3000/api"

// Uses GlobalEnv.phoneNumber
Database.addUser = function(){
    
}

Database.compareCode = function(){

}

// Uses GlobalEnv.currentNumberList to tell the server which people 
Database.broadcast = function(cb){
    $.mobile.loading('show');
    success_handler = function(data){
        $.mobile.loading('hide')
        var data = JSON.parse(data)
        cb(data)
    }
    error_handler = function(err){
        $.mobile.loading('hide')
        cb(null)
    }
    requestBody = "UUID=" + GlobalEnv.UUID + "&phoneNumbers=" + encodeURI(GlobalEnv.currentNumberList);
    intel.xdk.device.getRemoteData(Database.apiURL + "/broadcast", "POST", "", "success_handler", "error_handler")
}

Database.addIgnore = function(userPhone, ignorePhone){

}