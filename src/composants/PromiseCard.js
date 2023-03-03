import React, {Fragment} from 'react'
import './styles/PromiseCard.scss'

function PromiseCard (props) {
    return (
        <Fragment>
            <div className="promise--card">
                <div className="promise--card-icon">
                    <img src={props.donnees.image} loading='lazy' alt="" className='image'/>
                </div>
                <div className="promise--card-content">
                    <div className="promise--card-content--headline">{props.donnees.titre}</div>
                    <div className="promise--card-content--dek">{props.donnees.sousTitre}</div>
                </div>
            </div>
        </Fragment>
    )
}

export default PromiseCard