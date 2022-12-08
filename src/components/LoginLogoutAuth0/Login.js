import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
// krate_id = 04bf7fe9abd9c04a13d3
export default function Login(){
    const { loginWithRedirect } = useAuth0();
    return(<div>
        <h1>Journey</h1>
        <button class="btn draw-border" onClick={() => loginWithRedirect()}>Start your Journey!</button>
        </div>
    );
}
