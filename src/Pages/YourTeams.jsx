import React from "react";
import TeamCard from "../Components/UserTeams/TeamCard";
import '../Components/UserTeams/Styles/TeamCard.css'

export default function YourTeams() {
    const userTeams = (sessionStorage.getItem('teams').split(','))
    return (
        <React.Fragment>
            <div className="container">
                <div className="accordion-item">
                    {
                        userTeams.map((team) =>
                            <TeamCard key={Math.random()} team={team} />
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}