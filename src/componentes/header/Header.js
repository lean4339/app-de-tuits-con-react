import React from "react";
import "./header.scss";
import TwitterLogo from "../../assets/images/twitter-logo.png";

export default function Header (){
    return (
        <div className="header">
            <img src={TwitterLogo}/>
            <h1>Simulador de tuits</h1>
        </div>
    )
}

