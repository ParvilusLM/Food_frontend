import React, {Fragment} from 'react'
import './styles/SFFiveTwo.scss'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'

const Slideshow = loadable(() => import('../../composants/Slideshow'))

const produits = [
    { 'lien': '', 'image': 'img/h1.jpg', 'titre': 'Food52 Gingham Linen Pot Holders (Set of 2)', 'prix': '35', 'variantTexte': 'more colors' },
    { 'lien': '', 'image': 'img/h2.jpg', 'titre': 'Dansk Købenstyle Baker ', 'prix': '135', 'variantTexte': 'more colors' },
    { 'lien': '', 'image': 'img/h3.jpg', 'titre': 'Recycled Clay Stacked Organic Dinnerware', 'prix': '90', 'variantTexte': 'more options' },
    { 'lien': '', 'image': 'img/h4.jpg', 'titre': 'Staub Cast Iron Tall Cocotte, 5QT', 'prix': '199.9', 'variantTexte': 'more colors' }
]

function SFFiveTwo() {
    return(
        <Fragment>
            <div className="five--two-section--container">
                <div className="five--two-section--image">
                </div>
                <div className="five--two-section--content">
                    <h3 className="five--two-section--content-headline">Made by us, made with you.</h3>
                    <p className="five--two-section--content-dek">Five Two is a new line by Food52 for kitchen, home, and life, created with our community. Together, we’re setting our sights on every room in the house—and remaking everything in it.</p>
                    <Link className="lien lien--cta btn btn--secondary btn--white btn--small" to=''>Shop All Five Two</Link>
                    <div className="products--container">
                        <Slideshow produits={produits} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SFFiveTwo
