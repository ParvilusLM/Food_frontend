import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './styles/FeaturedRecipe.scss'

function FeaturedRecipe(props) {
  return (
    <Fragment>
        <div className="featured--recipe">
            <Link className="featured--recipe-img--link lien" to={props.donnees.lienImage}>
                <div className="d1">
                    <div className="d1--1">
                        <img src={props.donnees.image} loading='lazy' alt="" className='image'/>
                    </div>
                </div>
            </Link>
            <div className="featured--recipe-content">
                <Link className="tag--link lien" to={props.donnees.lienTag}>
                    {props.donnees.tag}
                </Link>
                <div className="headline--wrapper">
                    <Link className="lien headline--link" to={props.donnees.lienTitre}>
                        {props.donnees.titre}
                    </Link>
                </div> 
                <div className="dek--wrapper">
                    {props.donnees.sousTitre}
                </div>
                <Link className="cta--link lien" to={props.donnees.lienCTA}>
                    {props.donnees.cta}
                    <span className="icon--arrow icon--arrow-right"></span>
                </Link>
            </div>
        </div>
    </Fragment>
  )
}

export default FeaturedRecipe