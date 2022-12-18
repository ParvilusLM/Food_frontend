import React, {Fragment} from 'react'
import './styles/SFNewestProduct.scss'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const ProductCard = loadable(() => import('../../composants/ProductCard'))

const produits = [
    { 'lien': '', 'image': 'img/e1.jpg', 'titre': 'Hand-Embroidered Holiday Napkins (Set of 2)', 'prix': '50', 'variantTexte': 'more sizes' },
    { 'lien': '', 'image': 'img/e2.jpg', 'titre': 'Hand-Embroidered Holiday Cocktail Napkins (Set of 4)', 'prix': '45', 'variantTexte': 'more sizes' },
    { 'lien': '', 'image': 'img/e3.jpg', 'titre': 'COCO Single-Origin Chocolate Advent Calendar', 'prix': '80', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e4.jpg', 'titre': 'Whittard of Chelsea Hot CHocolate Advent Calendar for Two', 'prix': '100', 'variantTexte': '' }
]

function SFNewestProduct(props) {
  return (
    <Fragment>
        <section className="recipe--new-arrivals--container content--container">
            <div className="new--arrivals">
                <div className="new--arrivals-header">
                    <h3 className="new--arrivals-heading">
                        <span>The Shop</span>
                    </h3>
                    <h3 className="new--arrivals__heading nah--shop">
                        {props.donnees.titre}
                    </h3>
                    
                    <Link className="view--more cta--desktop" to=''>
                        {props.donnees.cta}
                        <span className="icon--arrow icon--arrow-right"></span>
                    </Link>
                </div>
                <div className="new--arrivals-content">
                    <ul className="new--arrivals-products">
                        {produits.map((item, index) => (
                            <li key={index} className="produit--el">
                                <ProductCard produit={item} />
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="view--more cta--mobile" to=''>
                    {props.donnees.cta}
                    <span className="icon--arrow icon--arrow-right"></span>
                </Link>
            </div>
        </section>

    </Fragment>
  )
}

export default SFNewestProduct