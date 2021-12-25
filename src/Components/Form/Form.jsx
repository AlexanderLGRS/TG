import React, { useState } from "react";
import './Styles/Form.css'

let players =[]
export default function Form(props) {

    const [playerName, setPlayerName] = useState('')

    const waitPlayerHandler = (event) => {
        setPlayerName(event.target.value)
    }
    const addPlayerHandler = (event) => {
        event.preventDefault()
        players = [playerName, ...players]
        props.onSavePlayers(players)
        setPlayerName('')
    }

    return (
        <React.Fragment>
            <form onSubmit={addPlayerHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Escribe uno a uno los nombres de los jugadores</label>
                    <input type="text" value={playerName} onChange={waitPlayerHandler} className="form-control" id="exampleInputPassword1" autoFocus required />
                </div>
                <button type="submit" className="btn btn-success">Añadir</button>
                <h2 href="">Agregaremos a: {playerName}</h2>
            </form>

        </React.Fragment>
    )
}