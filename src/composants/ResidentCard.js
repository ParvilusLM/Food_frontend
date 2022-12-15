import React, {Fragment} from 'react'
import './styles/ResidentCard.scss'
import {Link} from 'react-router-dom'

function ResidentCard(props) {
  return (
    <Fragment>
        <div className="resident">
            <div className="resident--img">
                <div className="d1">
                    <div className="d1--1">
                        <img src={props.donneesResident.image} alt="" className='image'/>
                    </div>
                </div>
            </div>
            <Link to={props.donneesResident.lienResident} className='lien lien--nom'>
                <div className="resident--nom">{props.donneesResident.nom}</div>
            </Link>
            <Link to={props.donneesResident.lienResident} className='lien lien--description'>
                <div className="resident--description">{props.donneesResident.description}</div>
            </Link>
            <Link to={props.donneesResident.lienResident} className='lien lien--cta'>
                View More
                <span className="icon__arrow icon__arrow--right"></span>
            </Link>
        </div>
    </Fragment>
  )
}

export default ResidentCard