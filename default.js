var request = require('request');
async function returnbranchdata(context){
	var dt;
	await request('https://cgu-api.herokuapp.com/branch?branch=COMPUTER+SCIENCE+ENGINEERING',(err,res,body) => {
	
				console.log(body);
			//	return 'body';
				
		})
		
}
//
function auser1111handler(options,event,context,callback){
	options.next_state = 'abot1111'
	csedata = returnbranchdata(context);
	options.data.handle = 'CSE - 180\n IT - 180\n ETC-120\n EE-60\n ME-60\n CIVIL-60'
	callback(options,event,context);
}

function abot1111handler(options,event,context,callback){
	callback(options,event,context);
}


function auser1112handler(options,event,context,callback){
	options.next_state = 'abot1112'
	options.data.handle = '1,56,000 Rs.'
	callback(options,event,context);
}

function abot1112handler(options,event,context,callback){
	callback(options,event,context);
}

//--

function auser1211handler(options,event,context,callback){
	options.next_state = 'abot1211'
	options.data.handle = '170'
	callback(options,event,context);
}

function abot1211handler(options,event,context,callback){
	callback(options,event,context);
}

function auser1212handler(options,event,context,callback){
	options.next_state = 'abot1212'
	options.data.handle = '1,56,000 Rs.'
	callback(options,event,context);
}

function abot1212handler(options,event,context,callback){
	callback(options,event,context);
}
//--

function auser1311handler(options,event,context,callback){
	options.next_state = 'abot1311'
	options.data.handle = '170'
	callback(options,event,context);
}


function abot1311handler(options,event,context,callback){
	callback(options,event,context);
}

function auser1312handler(options,event,context,callback){
	options.next_state = 'abot1312'
	options.data.handle = '1,56,000 Rs.'
	callback(options,event,context);
}

function abot1312handler(options,event,context,callback){
	callback(options,event,context);
}

//--

function auser1411handler(options,event,context,callback){
	options.next_state = 'abot1411'
	options.data.handle = '170'
	callback(options,event,context);
}


function abot1411handler(options,event,context,callback){
	callback(options,event,context);
}

function auser1412handler(options,event,context,callback){
	options.next_state = 'abot1412'
	options.data.handle = '1,56,000 Rs.'
	callback(options,event,context);
}

function abot1412handler(options,event,context,callback){
	callback(options,event,context);
}

//------------------COURSEWORKS ------------------------------------------

function cuser11handler(options,event,context,callback){
	options.next_state = 'cbot11';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot11handler(options,event,context,callback){
	callback(options,event,context);
}


function cuser12handler(options,event,context,callback){
	options.next_state = 'cbot12';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot12handler(options,event,context,callback){
	callback(options,event,context);
}


//
function cuser13handler(options,event,context,callback){
	options.next_state = 'cbot13';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot13handler(options,event,context,callback){
	callback(options,event,context);
}

//
function cuser14handler(options,event,context,callback){
	options.next_state = 'cbot14';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot14handler(options,event,context,callback){
	callback(options,event,context);
}
//
function cuser15handler(options,event,context,callback){
	options.next_state = 'cbot15';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot15handler(options,event,context,callback){
	callback(options,event,context);
}

//

function cuser16handler(options,event,context,callback){
	options.next_state = 'cbot16';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot16handler(options,event,context,callback){
	callback(options,event,context);
}
//
function cuser17handler(options,event,context,callback){
	options.next_state = 'cbot17';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot17handler(options,event,context,callback){
	callback(options,event,context);
}
//
function cuser18handler(options,event,context,callback){
	options.next_state = 'cbot18';
	options.data.card= card1();

	callback(options,event,context);
}

function cbot18handler(options,event,context,callback){
	callback(options,event,context);
}

//
function puser11handler(options,event,context,callback){
	options.next_state = 'pbot11';
	options.data.card= card2();

	callback(options,event,context);
}

function pbot11handler(options,event,context,callback){
	callback(options,event,context);
}

//
function puser13handler(options,event,context,callback){
	options.next_state = 'pbot13';
	options.data.card= card3();

	callback(options,event,context);
}

function pbot13handler(options,event,context,callback){
	callback(options,event,context);
}

//
function ouser11handler(options,event,context,callback){
	options.next_state = 'obot11';
	options.data.call= call1();

	callback(options,event,context);
}

function pbot11handler(options,event,context,callback){
	callback(options,event,context);
}
  

module.exports.admissions = {
	auser1111:auser1111handler,
	abot1111:abot1111handler,
	auser1112:auser1112handler,
	abot1112:abot1112handler,
	auser1211:auser1211handler,
	auser1212:auser1212handler,
	auser1311:auser1311handler,
	auser1312:auser1312handler,
	auser1411:auser1411handler,
	auser1412:auser1412handler,
	
	
}

module.exports.courseworks = {
	cuser11:cuser11handler,
	cuser12:cuser12handler,
	cuser13:cuser13handler,
	cuser14:cuser14handler,
	cuser15:cuser15handler,
	cuser16:cuser16handler,
	cuser17:cuser17handler,
	cuser18:cuser18handler,
}

module.exports.placement = {
	puser11:puser11handler,
	puser13:puser13handler,
}

module.exports.others = {
	ouser11:ouser11handler,
}
function card1(){
	 
           var catalogue = {
    "type": "catalogue",
    "msgid": "cat_212",
    "items": [{
            "title": "Computer Vision",
            "imgurl": "https://i.imgur.com/rKFswud.jpeg",
            "options": [{
                    "type": "url",
                    "title": "Goto Course",
                    "url": "https://www.tutorialspoint.com/dip/computer_vision_and_graphics.htm"
                }
               
            ]
        },
        {
            "title": "Machine Learning",
            "imgurl": "https://i.imgur.com/hPH9epu.jpeg",
            "options": [{
                    "type": "url",
                    "title": "Goto Course",
                    "url": "https://www.javatpoint.com/machine-learning-techniques"
                }
               
            ]
        },
        {
            "title": "Compiler Design",
            "imgurl": "https://i.imgur.com/Ns3e0H8.jpeg",
            "options": [{
                    "type": "url",
                    "title": "Goto Course",
                    "url": "https://www.geeksforgeeks.org/compiler-design-tutorials/"
                }
               
            ]
        },
        {
            "title": "IT Security",
            "imgurl": "https://i.imgur.com/EjIebnQ.jpeg",
            "options": [{
                    "type": "url",
                    "title": "Goto Course",
                    "url": "https:/\/www.geeksforgeeks.org/system-security/"
                }
               
            ]
        },
        {
            "title": "ACA",
            "imgurl": "https://i.imgur.com/fWeMAaC.jpeg",
            "options": [{
                    "type": "url",
                    "title": "Goto Course",
                    "url": "https://www.tutorialspoint.com/Computer-System-Architecture"
                }
               
            ]
        }
      
         ]
       };

    //  context.sendResponse(JSON.stringify(catalogue));
      return JSON.stringify(catalogue);
 
}


function card2(){
	 
           var catalogue = {
    "type": "catalogue",
    "msgid": "cat_212",
    "items": [{
            "title": "Complete Interview Preperation",
            "imgurl": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
            "options": [{
                    "type": "url",
                    "title": "Goto Course",
                    "url": "https://practice.geeksforgeeks.org/courses/complete-interview-preparation?source=google&medium=cpc&device=c&keyword=gfg&matchtype=b&campaignid=2031157862&adgroup=71863555916"
                }
               
            ]
        }
      
         ]
       };

    //  context.sendResponse(JSON.stringify(catalogue));
      return JSON.stringify(catalogue);
 
}



function card3(){
	 
           var catalogue = {
    "type": "catalogue",
    "msgid": "cat_212",
    "items": [{
            "title": "Amazon",
            "imgurl": "https://imageio.forbes.com/specials-images/imageserve/5d825aa26de3150009a4616c/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&fit=crop",
            "options": [{
                    "type": "url",
                    "title": "Goto Interview Preparation",
                    "url": "https://www.geeksforgeeks.org/amazon-interview-preparation/"
                }
               
            ]
        },
        {
            "title": "Cisco",
            "imgurl": "https://pbs.twimg.com/profile_images/1504842899631968257/cae-WIrl_400x400.jpg",
            "options": [{
                    "type": "url",
                    "title": "Goto Interview Preparation",
                    "url": "https://www.geeksforgeeks.org/cisco-interview-preparation/"
                }
               
            ]
        },
        {
            "title": "Pwc",
            "imgurl": "https://pbs.twimg.com/profile_images/1410601637756870661/wxmTG2Ni_400x400.jpg",
            "options": [{
                    "type": "url",
                    "title": "Goto Interview Preparation",
                    "url": "https://www.glassdoor.co.in/Interview/PwC-Interview-Questions-E8450.htm"
                }
               
            ]
        },
        {
            "title": "Deloitte",
            "imgurl": "https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/deloitte/us-deloitte-logo.jpg",
            "options": [{
                    "type": "url",
                    "title": "Goto Interview Preparation",
                    "url": "https://www.geeksforgeeks.org/deloitte-recruitment-process/"
                }
               
            ]
        },
        {
            "title": "Gupshup",
            "imgurl": "https://pbs.twimg.com/profile_images/1499707246149730305/8rHA6BTj_400x400.jpg",
            "options": [{
                    "type": "url",
                    "title": "Goto Interview Preparation",
                    "url": "https://www.glassdoor.co.in/Interview/Gupshup-Interview-Questions-E2228714.htm"
                }
               
            ]
        }
      
         ]
       };

    //  context.sendResponse(JSON.stringify(catalogue));
      return JSON.stringify(catalogue);
 
}


function call1(){
	    	var call = {
  "type": "survey",
  "question": "Would you like to talk with our helpline?",
  "msgid": "3er45",
  "options": [
    {
      "type": "phone_number",
      "title": "Call",
      "phone_number": "+917480846721"
    }
  ]
}
return JSON.stringify(call);
}

