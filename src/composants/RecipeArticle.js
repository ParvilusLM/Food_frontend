import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles/RecipeArticle.scss'

function RecipeArticle(props) {
  return (
    <Fragment>
        <div className="recipe--article">
            <Link className="lien recipe--article-tag" to={props.donnees.tagLien}>
                {props.donnees.tag}
            </Link>
            <Link className="lien recipe--article-titre" to={props.donnees.articleLien}>
                <span>{props.donnees.titre}</span>
            </Link>
            <Link className="lien recipe--article-cta btn btn--default btn--secondary btn--inline" to={props.donnees.articleLien}>
                {props.donnees.cta}
            </Link>
              
        </div>   
    </Fragment>
  )
}

export default RecipeArticle