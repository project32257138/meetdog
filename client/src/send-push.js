import React, {useEffect} from "react"
require('dotenv').config({path:__dirname + "/../.env"})
 
const OSID = process.env.REACT_APP_ONE_SIGNAL_ID;
const OSKEY = "Basic " + process.env.REACT_APP_ONE_SIGNAL_KEY

function Push(props) {

  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  useEffect(() => {


    OneSignal.push(()=> {
      console.log(props)
      if (props.match) {
      OneSignal.init(
        {
          appId: OSID,
          // requiresUserPrivacyConsent: true,
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to notify you of matches for new play dates for you.",
              acceptButtonText: "Yes!",
              cancelButtonText: "Maybe later.",
          } 
        },
        welcomeNotification: {
          "title": "Puppy Love | Creating New Play Dates",
          "message": "Thanks for subscribing!",
        } 
      },
       OneSignal.sendSelfNotification( "Puppy Love","You matched with "+ props.dog,"http://localhost:3000"
        )
      );
    }
    });
    
  })

  return (
    <></>
  );
}

export default Push