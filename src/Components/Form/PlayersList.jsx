import React from "react";
import './Styles/PlayersList.css'
export default function PlayersList(props) {
    const { data } = props
    const names = data
    return (
        <React.Fragment>
            <div className="playersList">
                {names.map((player) => <li key={Math.random()}>{player}</li>)}
            </div>
        </React.Fragment>
    )
}