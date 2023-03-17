import React, {Fragment} from 'react'
import './styles/SFSeeAllCollection.scss'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'

const ProductCard = loadable(() => import('../../composants/ProductCard'))

const produits = [
    { 'lien': '', 'image': '/img/t1.jpg', 'titre': 'Chapon Chocolate Advent Calendar', 'prix': '110', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/t1-1.jpg', 'titre': 'Dally and Whiz Danish Wine Gum Advent Calendar', 'prix': '50', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/t1-2.jpg', 'titre': 'Venchi Artisanal Italian Chocolate Advent Calendar', 'prix': '99', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/t1-3.jpg', 'titre': 'La Maison du Chocolat Advent Calendar', 'prix': '90', 'variantTexte': '' }
]

function SFSeeAllCollection() {
    return(
        <Fragment>
            <div className="see--all-collection--container">
                <Link className="see--all-collection--lien lien" to=''>
                    <div className="d1">
                        <div className="d1--1">
                            <img src="/img/s1.jpg" loading='lazy' alt="" className='image'/>
                        </div>
                    </div>
                </Link>
                <div className="see--all-collection--content">
                    <div className="see--all-collection--text">
                        <h3 className="see--all-collection--headline">They're Finally Here</h3>
                        <p className="see--all-collection--dek">The advent calendars we waited all year for—chocolate, licorice, tea & more.</p>
                        <Link className="btn btn--small btn--secondary lien" to=''>Shop Collection</Link>
                    </div>
                    <ul className="see--all-collection--products">
                        {produits.map((item, index) => (
                            <li key={index} className="produit--el">
                                <ProductCard produit={item}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default SFSeeAllCollection