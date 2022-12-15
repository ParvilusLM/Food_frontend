import React, {Fragment} from 'react'
import './styles/SFResidentSect.scss'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const ResidentCard = loadable(() => import('../../composants/ResidentCard'))

function SFResidentSect(props) {
  return (
    <Fragment>
        <div className="resident--section-wrapper">
            <div className="resident--grid-header">
                <div>
                    <h2 className="residents--grid-heading">{props.donnees.titre}</h2>
                    <p className="residents--grid-dek">{props.donnees.sousTitre}</p>
                </div>
                <Link className="residents--grid-all residents--grid-all--desktop" to={props.donnees.lienAllResidents}>
                    GO TO KNOW 'EM ALL
                    <span className="icon__arrow icon__arrow--right"></span>
                </Link>
            </div>
            <ul className="residents--grid-list">
                {props.donnees.listeResidents.map((item, index) => (
                    <li key={index} className="residents--grid-list--item">
                        <ResidentCard donneesResident={item} />
                    </li>
                ))}
            </ul>
            <Link className="residents--grid-all residents--grid-all--mobile" to={props.donnees.lienAllResidents}>
                GO TO KNOW 'EM ALL
                <span className="icon__arrow icon__arrow--right"></span>
            </Link>
        </div>
    </Fragment>
  )
}

export default SFResidentSect