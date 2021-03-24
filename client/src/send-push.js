import OneSignal, { useOneSignalSetup } from 'react-onesignal';

require('dotenv').config({path:__dirname + "/../.env"})
 
// require(__dirname + '/../../OneSignal-Web-SDK-HTTPS-Integration-Files/')

const OSID = process.env.REACT_APP_ONE_SIGNAL_ID;
const OSKEY = "Basic " + process.env.REACT_APP_ONE_SIGNAL_KEY

// OneSignal.initialize(OSID,{ 
//   notifyButton: {
//     enable: true,
//     text: {
//       test: "test"
//     }
//   }
// })

// // OneSignal.getOneSignalInstance()
// console.log(OneSignal)

// const AppProps = {
//   user: {
//     id: OSID,
//     email: "natasha.fray9@gmail.com",
//   },
// };


// OneSignal.setEmail('natasha.fray9@gmail.com++')
// const test = (props = AppProps) => {
//     const { user } = props;
//     useOneSignalSetup(()=> {
//     console.log(OneSignal)
//     OneSignal.setEmail(user.email);
//     OneSignal.setExternalUserId(user.id);
//     // OneSignal.registerForPushNotifications()
//     // OneSignal.sendTag("Active Users","hello")
//   }
// )}

// const Test = () => {
//   useOneSignalSetup((props = AppProps)=> {
//     const { user } = props;
//     OneSignal.setEmail(user.email);
//     OneSignal.setExternalUserId(user.id);
//   })

//   return (<div>r</div>)
// }



// const test = () => {
//   OneSignal.getEmailId()
//   .then(emailId => console.log(emailId))
// }


// var sendNotification = function(data) {
//   var headers = {
//     "Content-Type": "application/json; charset=utf-8",
//     "Authorization": OSKEY
//   };
  
//   var options = {
//     host: "onesignal.com",
//     port: 443,
//     path: "/api/v1/notifications",
//     method: "POST",
//     headers: headers
//   };
  
//   var https = require('https');
//   var req = https.request(options, function(res) {  
//     res.on('data', function(data) {
//       console.log("Response:");
//       console.log(JSON.parse(data));
//     });
//   });
  
//   req.on('error', function(e) {
//     console.log("ERROR:");
//     console.log(e);
//   });
  
//   req.write(JSON.stringify(data));
//   req.end();
// };

// var message = { 
//   app_id: OSID,
//   contents: {"en": "English Message"},
//   channel_for_external_user_ids: "push",
//   include_email_tokens: ["natasha.fray9@gmail.com"],
//   email_subject: "Welcome to Cat Facts!",
//   email_body: "<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>"

//   // include_external_user_ids: ["6392d91a-b206-4b7b-a620-cd68e32c3a76","76ece62b-bcfe-468c-8a78-839aeaa8c5fa","8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86"]
// };

// sendNotification(message);



const execute = (callback) => {
  if (OneSignal.getOneSignalInstance()) {
    callback();
  } else {
    const intervalHandler = setInterval(() => {
      if (OneSignal.getOneSignalInstance()) {
        clearInterval(intervalHandler);
        callback();
      }
    }, 1000);
  }
};
// export default Test;
export default execute