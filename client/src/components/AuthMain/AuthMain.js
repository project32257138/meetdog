import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Splash from "../Splash/"
import UserMain from "../UserMain/UserMain"
import Profile from "../UserMain/Profile"

const AuthMain = () => {
    const { isAuthenticated } = useAuth0();
  
    return isAuthenticated ? <Profile /> : <Splash />;
  };
  
  export default AuthMain;