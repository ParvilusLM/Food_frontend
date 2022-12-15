import React, {Fragment} from 'react'
import './styles/SFRecipeSect.scss'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const RecipeCard = loadable(() =>import('../../composants/RecipeCard'))



function SFRecipeSect(props) {
  return (
    <Fragment>
        <div className="recipe--section-wrapper">
            <div className="recipe--grid-header">
                <div>
                    <h2 className="recipes--grid-heading">{props.donnees.titre}</h2>
                    <p className="recipes--grid-dek">{props.donnees.sousTitre}</p>
                </div>
                <Link className="recipes--grid-all--link recipes--grid-all--link-desktop" to={props.donnees.lienAllRecipes}>
                    View All Recipes
                    <span className="icon__arrow icon__arrow--right"></span>
                </Link>
            </div>
            <ul className="recipes--grid-list">
                {props.donnees.listeRecipes.map((item, index) => (
                    <li key={index} className="recipes--grid-list--item">
                        <RecipeCard donneesRecipe={item} />
                    </li>
                ))}
            </ul>
            <Link className="recipes--grid-all--link recipes--grid-all--link-mobile" to={props.donnees.lienAllRecipes}>
                View All Recipes
                <span className="icon__arrow icon__arrow--right"></span>
            </Link>
        </div>
    </Fragment>
  )
}

export default SFRecipeSect