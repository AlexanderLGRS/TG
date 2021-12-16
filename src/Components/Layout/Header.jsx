import React from "react";
import './Styles/Header.css'

export default function Header(props) {
    return (
        <React.Fragment>
            <nav className="navbar header navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Team Generator</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/TG/leagues">Leagues</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}