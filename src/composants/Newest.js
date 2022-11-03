import React, { Fragment } from 'react'
import './styles/Newest.scss'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const RecipeUnitCard = loadable(() => import('./RecipeUnitCard'))
const ProductCard = loadable(() => import('./ProductCard'))

function Newest(props) {
    return (
        <Fragment>
            <div className='newest'>
                <h3 className="newest--headline">{props.donnees.titre}</h3>
                <div className="newest--listing">
                    {props.donnees.recipes.map((item, index) => (
                        <div key={index} className="newest--listing-feature">
                            <RecipeUnitCard info={item} />
                        </div>
                    ))}

                    {props.donnees.produits.map((item, index) => (
                        <div key={index} className="newest--listing-feature">
                            <ProductCard produit={item} />
                        </div>
                    ))}
                </div>
                <h3 className="newest--cta">
                    <Link className="newest--cta-lien lien" to={props.donnees.lienCTA}>{props.donnees.texteCTA}</Link>
                    <span className="icon--arrow icon--arrow-right"></span>
                </h3>
            </div>
        </Fragment>

    )
}

export default Newest