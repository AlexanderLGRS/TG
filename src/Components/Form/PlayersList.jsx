import React from "react";
import './Styles/PlayersList.css'
export default function PlayersList(props) {
    const { data } = props
    return (
        <React.Fragment>
            <div className="playersList">
                <ol reversed>
                    {data.map((player) => <li key={Math.random()}>{player}</li>)}
                </ol>
            </div>
        </React.Fragment>
    )
}