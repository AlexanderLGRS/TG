import React from "react";
import Card from "./Card";
import LeagueTitle from "./LeagueTitle";
import './Styles/Carousel.css'

export default function Carousel(props) {
    const { data, name, flag } = props
    return (
        <React.Fragment>
            <LeagueTitle title={name} />
            <div className="carousel" style={{
                backgroundImage: `url(${flag})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                {data.map((team) => (
                    <Card
                        key={team.id}
                        name={team.name}
                        shield={team.cover}
                        country={team.country}
                        league={team.league}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}