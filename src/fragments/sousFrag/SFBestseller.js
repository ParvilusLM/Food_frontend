import React, {Fragment} from 'react'
import './styles/SFBestseller.scss'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'

const Slideshow = loadable(() => import('../../composants/Slideshow'))

const produits = [
    { 'lien': '', 'image': 'img/r1.jpg', 'titre': 'Cody Foster Vintage-Inspired Food Ornaments', 'prix': '63', 'variantTexte': 'more options' },
    { 'lien': '', 'image': 'img/r2.jpg', 'titre': 'Food52 x Dansk Kobenstyle Saucepan & Butter Warmer', 'prix': '95', 'variantTexte': 'more options' },
    { 'lien': '', 'image': 'img/r3.jpg', 'titre': 'Five Two Everyday Soft Cotton Cloth Napkins', 'prix': '30', 'variantTexte': 'more colors' },
    { 'lien': '', 'image': 'img/r4.jpg', 'titre': 'Palais des Thés Parisian Tea Advent Calendar', 'prix': '36', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e5.jpg', 'titre': 'Whittard of Chelsea Tea Advent Calendar for Two', 'prix': '105', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e6.jpg', 'titre': 'Venchi Artisanal Italian Chocolate Advent Calendar', 'prix': '99', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e7.jpg', 'titre': 'Food52 x Maison Boissier Parisian Advent Calendar', 'prix': '99', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e8.jpg', 'titre': 'Mirzam Chocolate Advent Calendar', 'prix': '45', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e9.jpg', 'titre': 'Amedei Tuscany Chocolate Advent Calendar', 'prix': '190', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e10.jpg', 'titre': 'Sugarfina Eight Nights of Hanukkah Candy Collection', 'prix': '30', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e11.jpg', 'titre': 'Goodio Vegan Chocolate Advent Calendar', 'prix': '65', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e12.jpg', 'titre': 'Sugarfina Advent Calendar', 'prix': '60', 'variantTexte': '' }
]

function SFBestseller() {
    return(
        <Fragment>
            <div className="bestseller--container">
                <div className="bestseller--header">
                    <h3 className="bestseller--header-headline">Best Sellers</h3>
                    <p className="bestseller--header-dek">The items you can’t stop grabbing up and that we can’t stop talking about</p>
                    <Link className="bestseller--header-cta lien" to=''>
                        VIEW ALL BEST SELLERS
                        <span className="icon--arrow icon--arrow-right"></span>
                    </Link>
                </div>
                <div className="bestseller--content">
                    <Slideshow produits={produits} />
                </div>
            </div>

        </Fragment>
    )
}

export default SFBestseller