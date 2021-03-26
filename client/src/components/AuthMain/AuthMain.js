import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Splash from "../Splash/"
import UserMain from "../UserMain/UserMain"

const AuthMain = () => {
    const { isAuthenticated } = useAuth0();
  
    return isAuthenticated ? <UserMain /> : <Splash />;
  };
  
  export default AuthMain;