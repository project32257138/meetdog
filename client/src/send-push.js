import React, {useEffect} from "react"
require('dotenv').config({path:__dirname + "/../.env"})

 
const OSID = process.env.REACT_APP_ONE_SIGNAL_ID;
const OSKEY = "Basic " + process.env.REACT_APP_ONE_SIGNAL_KEY

function Push(props) {

  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  useEffect(() => {

    console.log(props)

    // trying to use this message, but it doesn't work
    let message = { 
      app_id: OSID,
      headings: {"en": "Puppy Love"},
      contents: {"en": `You matched with ${props.dog?.name}`},
      channel_for_external_user_ids: "push",
      include_external_user_ids: props.dog?.email? [props.email,props.dog?.email] : [props.email] 
    };

    OneSignal.push(()=> {
      if (props.match) OneSignal.sendSelfNotification("Puppy Love", `You matched with ${props.dog?.name}`, "http://localhost:3000")

    });
    
  })

  return (
    <></>
  );
}

export default Push