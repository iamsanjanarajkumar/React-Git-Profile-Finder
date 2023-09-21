import React from "react";
import {Link } from 'react-router-dom'

function RepoRow(props){
   return(
    <div className="repo-container">
        <div className="repo-item">
            <Link to={`${props.html_url}`} target="_blank">
            <h3>{props.name}</h3></Link>
        </div>
     </div>
   )
}



export default RepoRow