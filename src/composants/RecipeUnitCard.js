import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles/RecipeUnitCard.scss'

function RecipeUnitCard(props) {
    return (
        <Fragment>
            <div className="recipe--unit-container">
                <Link className="recipe--unit-img--link" to={props.info.lien}>
                    <div className="recipe--unit-img--container">
                        <div className="dr1">
                            <div className="dr1--1">
                                <img className='image' src={props.info.image} alt={props.info.titre} loading='lazy' />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="feature--details recipe--unit-details">
                    <h2 className="feature--headline recipe--unit-headline">
                        <Link className="feature--headline-link" to={props.info.lien}>
                            {props.info.titre}
                        </Link>
                    </h2>
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeUnitCard