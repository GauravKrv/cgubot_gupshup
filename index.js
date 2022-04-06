var botScriptExecutor = require('bot-script').executor;
var scr_config = require('./scr_config.json');

function MessageHandler(context, event) {
	
	if(event.message=="I want result of 6th semester"||event.message=="result"||event.message=="results"||event.message=="results of 6th semester"){
		//http://115.242.197.158:8080/CVRCEResult/
	var res = 	{
  "type": "catalogue",
  "msgid": "cat_2112",
  "items": [
    {
      "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEq2U5xKCuf7_-0cgYCkPrslv-pVyINXqHQ&usqp=CAU",
      "options": [
        {
          "type": "url",
          "title": "Check Now",
          "url": "http://115.242.197.158:8080/CVRCEResult/"
        }
      ]
    }
  ]
}
context.sendResponse(JSON.stringify(res));

	}
    ScriptHandler(context, event);
}

function EventHandler(context, event) {
    context.simpledb.roomleveldata = {};
    MessageHandler(context, event);
}


function ScriptHandler(context, event){
    var options = Object.assign({}, scr_config);
    options.current_dir = __dirname;
    options.default_message = "Sorry you entered wrong query please enter a valid one";
    // You can add any start point by just mentioning the <script_file_name>.<section_name>
    options.start_section = "default.main";
    options.success = function(opm){
        context.sendResponse(JSON.stringify(opm));
    };
    options.error = function(err) {
        console.log(err.stack);
        context.sendResponse(options.default_message);
    };
    botScriptExecutor.execute(options, event, context);
}

function HttpResponseHandler(context, event) {
    if (event.geturl === "http://ip-api.com/json")
        context.sendResponse('This is response from http \n' + JSON.stringify(event.getresp, null, '\t'));
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
}

function HttpEndpointHandler(context, event) {
    context.sendResponse('This is response from http \n' + JSON.stringify(event, null, '\t'));
}

function LocationHandler(context, event) {
    context.sendResponse("Got location");
};

exports.onMessage = MessageHandler;
exports.onEvent = EventHandler;
exports.onHttpResponse = HttpResponseHandler;
exports.onDbGet = DbGetHandler;
exports.onDbPut = DbPutHandler;
if (typeof LocationHandler == 'function') { exports.onLocation = LocationHandler; }
if (typeof HttpEndpointHandler == 'function') { exports.onHttpEndpoint = HttpEndpointHandler; }
