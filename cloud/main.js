Parse.Cloud.define("sendPush", function(request,response) {

        Parse.Push.send({
                channels: [ "TEST" ],
                data: {
                        alert: "ABCD"
                }
        }, 
	{
                success: function() {
                        // Push was successful
                        response.success("Push sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendPush: " + error);
                },
                useMasterKey: true
        });
});
Parse.Cloud.define("hello",function(request,response){
	response.success("Hello");
});

	
