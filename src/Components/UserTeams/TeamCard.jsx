import React from "react";
import './Styles/TeamCard.css'

export default function TeamCard(props) {
    const { team, players } = props
    const userPlayers = (sessionStorage.getItem('players').split(','))
    return (
        <React.Fragment>
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    {team}
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <ul>
                        {
                            userPlayers.map((player) =>
                                <li key={Math.random()}>{player}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment >
    )
}