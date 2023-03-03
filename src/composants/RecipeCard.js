import React, {Fragment} from 'react'
import './styles/RecipeCard.scss'
import {Link} from 'react-router-dom'

function RecipeCard(props) {
  return (
    <Fragment>
        <div className="card--collectable card">
            <Link className="card--img-link lien" to={props.donneesRecipe.lienImage}>
                <div className="d1">
                    <div className="d1--1">
                        <img src={props.donneesRecipe.image} loading='lazy' alt="" className='image'/>
                    </div>
                </div>
            </Link>
            <div className="card--details">
                <h3 className="collectable--name">{props.donneesRecipe.nom}</h3>
                <div className="meta">
                    <div className="meta--author">
                        <span>by:</span>
                        <Link className="meta--author-link lien" to={props.donneesRecipe.lienAuteur}>{props.donneesRecipe.auteur}</Link>
                    </div>
                </div>
                <div className="rating">
                    {Array(props.donneesRecipe.nbEtoiles).fill(0).map((item, index) => (
                        <div key={index} className="rating--star">
                            <svg viewBox='0 0 25 23.8'>
                            <path fill="#a18f7a" d="M12.5 0l2.9 9.1H25l-7.7 5.6 2.9 9.1-7.7-5.7-7.7 5.7 2.9-9.1L0 9.1h9.6z"></path>
                            </svg>
                        </div>
                    ))}
                    <span>({props.donneesRecipe.nbEtoiles})</span>
                </div>
                <div className="collectable--footer">
                    <span className="collection--widget-root">
                        <div className="collection--widget">
                            <button className="btn-pill collection--save-caret collection--save">
                                <svg className="icon collection--save-icon">
                                    <path fill="transparent" stroke="#57696d" d="M12.5,16.5l-6-2.8l-6,2.8v-16h12V16.5z"></path>
                                </svg>
                                Save
                            </button>
                        </div>
                    </span>
                </div>

            </div>
        </div>
    </Fragment>
  )
}

export default RecipeCard