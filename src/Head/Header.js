import React from "react";
import "../Head/Header.css";

const Header =()=>{
    return(
        <header>
         <div className="lg_1">
              <img src="./logo.png" alt="logo "/>
         </div>
         <div className="it_1">
            <li>Home</li>
            <li>Projects</li>
            <li> Services</li>
            <li>Contact us </li>
           

         </div>
          
        </header>   
    )
}
export default Header ;