import React from "react";
import './Styles/HomeCard.css';

export default function HomeCard(props){
    return(
        <React.Fragment>
            <div className="homeCard slide-left">
                {props.children}
            </div>
        </React.Fragment>
    )
}