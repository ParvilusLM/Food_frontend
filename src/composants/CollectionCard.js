import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './styles/CollectionCard.scss'

function CollectionCard(props) {
  return (
    <Fragment>
        <div className="collection--card">
            <Link className="collection--card-lien lien" to={props.donnees.lien}>
                <div className="o1">
                    <div className="o1--1">
                        <picture>
                            <source srcSet={props.donnees.image1} media='(min-width: 1024px)' />
                            <img src={props.donnees.image} alt="" className="image" />
                        </picture>
                    </div>
                </div>
            </Link>
            <div className="collection--card-content">
                <h3 className="collection--card-headline">{props.donnees.titre}</h3>
                <p className="dek">{props.donnees.sousTitre}</p>
                <Link className="collection--card-content--lien lien btn btn--small btn--secondary" to={props.donnees.lienCTA}>{props.donnees.cta}</Link>
            </div>
        </div>
    </Fragment>
  )
}

export default CollectionCard