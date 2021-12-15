import React from "react";
import './Styles/Footer.css'

export default function Footer(props) {
    return (
        <React.Fragment>
            <nav className="footer navbar navbar-dark bg-dark" style={{justifyContent:"space-evenly"}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Declaración de privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Terminos de uso</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Centro de ayuda</a>
                        </li>                   
            </nav>
        </React.Fragment>
    )
}