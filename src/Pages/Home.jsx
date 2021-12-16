import React from "react";
import Button from "../Components/Home/Button";
import HomeCard from '../Components/Home/HomeCard'
import './Styles/Home.css'

export default function Home(props) {
    
    sessionStorage.setItem('value', 'Estamos')
    return (
        <React.Fragment>
            <div className="home">
                <HomeCard>
                    <p className="cardTitle">Bienvenido a Team Generator</p>
                    <p className="cardText">¿Cansado de los equipos disparejos? nosotros organizamos aleatoreamente a tus jugadores en tus equipos favoritos.</p>
                </HomeCard>
                <HomeCard>
                    <p className="cardTitle">Equipos estrella</p>
                    <p className="cardText">Elige cualquier equipo de las principales ligas del mundo, si, la liga colombiana tambien la incluímos.</p>
                </HomeCard>
                <HomeCard>
                    <p className="cardTitle">Equipos aleatorios en minutos</p>
                    <p className="cardText">Crea la cantidad de equipos aleatorios que quieras con la misma cantidad de jugadores como un suanfonson! </p>
                </HomeCard>
                <Button />
            </div>
        </React.Fragment>
    )
}