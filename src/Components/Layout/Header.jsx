import React from "react";
import './Styles/Header.css'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <React.Fragment>
            <nav className="navbar header navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/TG">
                        Team Generator
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/TG">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/TG/leagues">
                                    Ligas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/TG/generator">
                                    Generar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/TG/about">
                                    Nosotros
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}