import React, { useState } from "react";
import Form from "../Components/Form/Form";
import PlayersList from "../Components/Form/PlayersList";

const DEFAULT_PLAYERS = []
export default function Register() {
    const [playersList, setPlayersList] = useState(DEFAULT_PLAYERS)
    const savePlayersHandler = (enteredPlayers) => {
        console.log('Aca llegamos');
        setPlayersList(enteredPlayers)
        console.log(enteredPlayers);
    }
    return (
        <React.Fragment>
            <Form onSavePlayers={savePlayersHandler} />
            <PlayersList data={playersList} />
        </React.Fragment>
    )
}