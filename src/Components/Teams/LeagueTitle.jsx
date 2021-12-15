import React from "react"
import './Styles/LeagueTitle.css'

export default function LeagueTitle(props) {
    const { title } = props
    return (
        <React.Fragment>
            <h2>{title}</h2>
        </React.Fragment>

    )
}