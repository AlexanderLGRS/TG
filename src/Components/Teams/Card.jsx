import React from 'react'
import './Styles/Card.css'
import addIcon from '../../assets/add.png'
import deleteIcon from '../../assets/delete.png'
export default function Card(props) {
    const { name, shield, country, league } = props
    return (
        <React.Fragment>
            <div className="card">
                <img src={shield} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">{name}</p>
                </div>
                <div className="card-buttons">
                <img className='card-button add' src={addIcon} />
                <img className='card-button delete' src={deleteIcon} />
                    
                </div>
            </div>
        </React.Fragment>
    )
}