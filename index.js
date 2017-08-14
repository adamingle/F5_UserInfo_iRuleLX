/* Import the f5-nodejs module. */
var f5 = require('f5-nodejs');
/* Import the request module from npm install previous. */
var request = require('request');
console.log('Node.js process starting.');
 
/* Create a new rpc server for listening to TCL iRule calls. */  
var ilx = new f5.ILXServer();  
  
/* Start listening for ILX::call and ILX::notify events. */  
ilx.listen();  

/* Build ilx method for inteaction with TCL script GetAddress_ilx */  
ilx.addMethod('f5GetUserInfo', function(username,response) {

    var querystring = ('http://192.168.1.1/api/contact?userName=' +  username.params(0)); // Expected TCL input is a parameter. Identify as parameter "0" of the passed object which is just the username string from TCL. 
        console.log(querystring); // Log URI used to query web API
        request(querystring, function (error, res, body) {
            console.log('error:', error); // Log the error if one occurred 
            console.log('statusCode:', res && res.statusCode); // Log the response status code if a response was received 
            var output = body.replace(/\x22/g, ''); // Create new variable to remove double quotes from email body response. \x22 is Hex for double quotes.
            console.log(output); // Log the new variable
            response.reply(output); // Respond to the RPC call with the properly formatted e-mail address and user info.
        });
});
