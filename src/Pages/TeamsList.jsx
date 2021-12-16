import React from "react";
import Carousel from '../Components/Teams/Carousel';
import spainFlag from '../assets/Spain.jpg'
import germanyFlag from '../assets/Germany.jpg'
import englandFlag from '../assets/England.jpg'

const leagues = [
    {
        name: "LaLigaSantander - España",
        flag: spainFlag,
        key: 1,
        teams: [{
            "id": 1,
            "name": "FC Barcelona",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
            "league": "LaLiga Santander",

        },
        {
            "id": 2,
            "name": "Atletico Madrid",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/42.png",
            "league": "LaLiga Santander",

        },
        {
            "id": 3,
            "name": "Real Madrid",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png",
            "league": "LaLiga Santander",

        },
        {
            "id": 4,
            "name": "Sevilla Futbol Club",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/53.png",
            "league": "LaLiga Santander",

        }
        ]
    },
    {
        name: "Bundesliga - Alemania",
        flag: germanyFlag,
        key: 2,
        teams: [{
            "id": 5,
            "name": "Borussia Dortmund",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/87.png",
            "league": "Bundesliga",

        },
        {
            "id": 6,
            "name": "FC Bayern Munich",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/170.png",
            "league": "Bundesliga",

        },
        {
            "id": 7,
            "name": "Borussia Monchengladbach",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/536.png",
            "league": "Bundesliga",

        },
        {
            "id": 8,
            "name": "Rassenballsport Leipzig",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4281.png",
            "league": "Bundesliga",

        }
        ]
    },
    {
        name: "PremiereLeague - Inglaterra",
        flag: englandFlag,
        key: 3,
        teams: [{
            "id": 9,
            "name": "Chelsea FC",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/58.png",
            "league": "PremierLeague",

        },
        {
            "id": 10,
            "name": "Manchester United",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/67.png",
            "league": "PremierLeague",

        },
        {
            "id": 11,
            "name": "Manchester City",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/66.png",
            "league": "PremierLeague",

        },
        {
            "id": 12,
            "name": "Liverpool FC",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/65.png",
            "league": "PremierLeague",

        }
        ]
    }
]

export default function TeamsList(props) {
    console.log(sessionStorage);
    return (
        <React.Fragment>
            {leagues.map((league) => (
                <Carousel key={league.key} flag={league.flag} name={league.name} data={league.teams} />
            ))}
        </React.Fragment>
    )
}