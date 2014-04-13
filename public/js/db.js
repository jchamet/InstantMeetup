var success_handler = function(){};
var error_handler = function(){};

var Database = function(){};

var Database.apiURL = "http://" + GlobalEnv.serverIP + ":3000/api";

/* How to use these functions:
Database.addUser(function(err){
    if (err) {
        // Handle error here
    } else {
        // Handle the case where everything went fine
    }
});
*/

// Uses GlobalEnv.phoneNumber and GlobalEnv.UUID
// false if there was an error from the server
// Error object if there was an error
Database.addUser = function(cb){
    $.mobile.loading('show');
    success_handler = function(data){
        $.mobile.loading('hide');
        var data = JSON.parse(data);
        cb(data.error);
    }
    error_handler = function(err){
        $.mobile.loading('hide');
        cb(err);
    }
    requestBody = "UUID=" + GlobalEnv.UUID + "&phoneNumber=" +  GlobalEnv.phoneNumber;
    requestBody = encodeURI(requestBody);
    intel.xdk.device.getRemoteData(Database.apiURL + "/user", "POST", requestBody, "success_handler", "error_handler");
}

// Uses GlobalEnv.inputedCode
// Callback arguments:
// false if there was no error :)
// Error object if there was an error in the process
Database.compareCode = function(cb){
    $.mobile.loading('show');
    success_handler = function(data){
        $.mobile.loading('hide');
        var data = JSON.parse(data);
        cb(data.error);
    };
    error_handler = function(err){
        $.mobile.loading('hide');
        cb(err);
    };
    requestBody = "UUID=" + GlobalEnv.UUID + "&input=" + GlobalEnv.inputedCode;
    requestBody = encodeURI(requestBody);
    intel.xdk.device.getRemoteData(Database.apiURL + "/vcode", "GET", requestBody, "success_handler", "error_handler");
}

// Uses GlobalEnv.currentNumberList to tell the server which people should be broadcasted
// Callback arguments:
// false if there were no errors :)
// Error object if there was an error connecting to the server
Database.broadcast = function(cb){
    $.mobile.loading('show');
    success_handler = function(data){
        $.mobile.loading('hide');
        var data = JSON.parse(data);
        cb(data.error);
    };
    error_handler = function(err){
        $.mobile.loading('hide');
        cb(err);
    };
    requestBody = "UUID=" + GlobalEnv.UUID + "&phoneNumbers=" + GlobalEnv.currentNumberList;
    requestBody = encodeURI(requestBody);
    intel.xdk.device.getRemoteData(Database.apiURL + "/broadcast", "POST", requestBody, "success_handler", "error_handler");
}

// Uses GlobalEnv.ignorePhoneNumber
// Callback Arguments:
// true if there were no errors
// false if there was an error from the server
// Error object if there was a connection error
Database.addIgnore = function(cb){
    $.mobile.loading('show');
    success_handler = function(data){
        $.mobile.loading('hide');
        var data = JSON.parse(data);
        cb(!data.error);
    };
    error_handler = function(err){
        $.mobile.loading('hide');
        cb(err);
    };
    requestBody = "UUID=" + GlobalEnv.UUID + "&phoneNumber=" +  GlobalEnv.ignorePhoneNumber;
    requestBody = encodeURI(requestBody);
    intel.xdk.device.getRemoteData(Database.apiURL + "/ignore", "POST", requestBody, "success_handler", "error_handler");
}