import React, { Fragment } from 'react'
import './styles/FeaturedContent.scss'
import loadable from '@loadable/component'

const RecipeArticle = loadable(() => import('../composants/RecipeArticle'))

const recipeArticles = [
  { 'tag':'GARLIC','titre':'Our Garlickiest Garlic Recipes','lienArticle':'','cta':'View Article'},
  { 'tag': 'BIG LITTLE RECIPES','titre': 'Our Easiest Dessert Recipes Only Need 5 Ingredients (or Fewer)', 'lienArticle': '' ,'cta':'View Article'},
  { 'tag':'ARTICHOKE','titre':'We Heart These Artichoke Recipes','lienArticle':'','cta':'View Article'},
]

function FeaturedContent(props) {
  return (
    <Fragment>
      <div className="featured--content">
        <div className="featured--content-header">
          <h2 className="featured--content-headline">
            <span>{props.donnees.titre}</span>
          </h2>
          <div className="featured--content-dek">{props.donnees.sousTitre}</div>
        </div>
        <ul className="featured--content-article--list">
          {recipeArticles.map((item, index) => (
            <li key={index} className="featured--content-article--item">
              <RecipeArticle donnees={item} />
            </li> 
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default FeaturedContent