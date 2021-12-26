import React, { useState } from "react";
import Form from "../Components/Form/Form";
import PlayersList from "../Components/Form/PlayersList";

let playersRegistered = []
export default function Register() {
    const [playersList, setPlayersList] = useState(playersRegistered)
    const savePlayersHandler = (enteredPlayers) => {
        playersRegistered=(enteredPlayers)
        setPlayersList(playersRegistered)
        console.log(enteredPlayers);
    }
    return (
        <React.Fragment>
            <Form onSavePlayers={savePlayersHandler} />
            <PlayersList data={playersList} />
        </React.Fragment>
    )
}