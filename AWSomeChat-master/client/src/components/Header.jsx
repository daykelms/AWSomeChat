import React, { Component } from "react";
import logo from "../img/sflogo.png"

class Header extends Component{
    render(){
        return(
            <div id="header-background">
                <img id="sflogo" className="col-2 mt-4 " src={logo}/>
            </div>
        )
    }
} 
export default Header