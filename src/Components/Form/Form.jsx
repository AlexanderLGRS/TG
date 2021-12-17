import React, { useState } from "react";
import './Styles/Form.css'

let players = []
export default function Form(props) {

    const [playerName, setPlayerName] = useState('')
    let newPlayer

    const waitPlayerHandler = (event) => {
        newPlayer = event.target.value
        setPlayerName(newPlayer)
    }
    const addPlayerHandler = () => {
        players.push(playerName)
        console.log(players);
    }

    return (
        <React.Fragment>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">¿Cuantos equipos vamos a crear?</label>
                    <input id="one" type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Escribe uno a uno los nombres de los jugadores</label>
                    <input type="text" onChange={waitPlayerHandler} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={addPlayerHandler} className="btn btn-success">Add</button>
                <h2 href="">{playerName}</h2>
            </form>
        </React.Fragment>
    )
}

