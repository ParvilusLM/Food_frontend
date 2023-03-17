import loadable from '@loadable/component'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles/FragNewTo.scss'

const SwiperCat = loadable(() => import('../composants/SwiperCat'))
const Slideshow = loadable(() => import('../composants/Slideshow'))


const produits = [
    { 'lien': '', 'image': '/img/e1.jpg', 'titre': 'Hand-Embroidered Holiday Napkins (Set of 2)', 'prix': '50', 'variantTexte': 'more sizes' },
    { 'lien': '', 'image': '/img/e2.jpg', 'titre': 'Hand-Embroidered Holiday Cocktail Napkins (Set of 4)', 'prix': '45', 'variantTexte': 'more sizes' },
    { 'lien': '', 'image': '/img/e3.jpg', 'titre': 'COCO Single-Origin Chocolate Advent Calendar', 'prix': '80', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e4.jpg', 'titre': 'Whittard of Chelsea Hot CHocolate Advent Calendar for Two', 'prix': '100', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e5.jpg', 'titre': 'Whittard of Chelsea Tea Advent Calendar for Two', 'prix': '105', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e6.jpg', 'titre': 'Venchi Artisanal Italian Chocolate Advent Calendar', 'prix': '99', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e7.jpg', 'titre': 'Food52 x Maison Boissier Parisian Advent Calendar', 'prix': '99', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e8.jpg', 'titre': 'Mirzam Chocolate Advent Calendar', 'prix': '45', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e9.jpg', 'titre': 'Amedei Tuscany Chocolate Advent Calendar', 'prix': '190', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e10.jpg', 'titre': 'Sugarfina Eight Nights of Hanukkah Candy Collection', 'prix': '30', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e11.jpg', 'titre': 'Goodio Vegan Chocolate Advent Calendar', 'prix': '65', 'variantTexte': '' },
    { 'lien': '', 'image': '/img/e12.jpg', 'titre': 'Sugarfina Advent Calendar', 'prix': '60', 'variantTexte': '' }
]

function FragNewTo(props) {
    return (
        <Fragment>
            <section className="new--arrivals--container content--container">
                <div className="new--arrivals">
                    <div className="new--arrivals-header">
                        <h3 className="new--arrivals-heading">
                            New To
                            <span>The Shop</span>
                        </h3>
                        <h3 className="new--arrivals__heading nah--shop">
                            New Arrivals
                        </h3>
                        <p className="new--arrivals-dek">Our newest additions that we can't stop talking about</p>
                        <Link className="view--more" to=''>
                            View All
                            <span className="icon--arrow icon--arrow-right"></span>
                        </Link>
                    </div>
                    <div className="new--arrivals-content">
                        <div className="new--arrivals-cats">
                            <SwiperCat />
                        </div>
                        <div className="new--arrivals-products">
                            <Slideshow produits={produits} />
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default FragNewTo