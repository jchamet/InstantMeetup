var socket = io.connect('http://' + GlobalEnv.serverIP + "");
socket.on('invites_'+intel.xdk.device.uuid, function (data) {
    // Handle invites here
    
}); 


