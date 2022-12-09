import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Logout.css'

// krate_id = 04bf7fe9abd9c04a13d3
export default function Logout(){
    const { logout } = useAuth0();
    return(
        <button class="btn draw-border" onClick={() => logout({ returnTo: window.location.origin,})}>Logout </button>
    );
}