import React from "react";
import { useNavigate } from "react-router-dom";

import './menu-item.style.scss'


const MeunItem = ({title, imageUrl, size, link}) => {
    let navigate = useNavigate()

    return(
        <div className={`${size} menu-item`} onClick={() => navigate(link)}>
        <div className="background-image"
   
        style={{
           backgroundImage: `url(${imageUrl})`
        }}
       
        
        />
       <div className="content">
           <h1 className="title">{title.toUpperCase()}</h1>
           <span className="subtitle">SHOP NOW</span>
       </div>
   </div>
   

    )

}
   


export default MeunItem