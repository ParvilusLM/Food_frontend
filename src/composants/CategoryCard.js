import React, {Fragment} from 'react'
import './styles/CategoryCard.scss'
import {Link} from 'react-router-dom'

function CategoryCard(props) {
  return (
    <Fragment>
        <div className="category--card">
            <Link className="categorie--lien" to={props.categorie.lien}>
                <div className="categorie--image">
                    <div className="ca1">
                        <div className="ca1-1">
                            <img className='image' src={props.categorie.image} alt="" />
                        </div>
                    </div>
                </div>
                <span>{props.categorie.titre}</span>
            </Link>
        </div>
    </Fragment>
  )
}

export default CategoryCard