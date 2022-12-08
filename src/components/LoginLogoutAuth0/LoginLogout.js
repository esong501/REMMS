import Login from './Login'
import Logout from './Logout'
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function LoginLogout() {
    const {isLoading} = useAuth0();
    const {isAuthenticated} = useAuth0();

    if (isLoading){
      return (<html><div>
        Loading...
        </div></html>
      )}else if (isAuthenticated){
      return (<html>
          {<Navigate to="/travel" />}</html>)
      }else{
      return (<html><div>
          <Login />
          </div></html>
        )
      };
}

export default LoginLogout;