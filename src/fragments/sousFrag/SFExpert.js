import React, {Fragment} from 'react'
import './styles/SFExpert.scss'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'

const Slideshow = loadable(() => import('../../composants/Slideshow'))

const produitsExp = [
    { 'lien': '', 'image': 'img/e8.jpg', 'titre': 'Mirzam Chocolate Advent Calendar', 'prix': '45', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e9.jpg', 'titre': 'Amedei Tuscany Chocolate Advent Calendar', 'prix': '190', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e10.jpg', 'titre': 'Sugarfina Eight Nights of Hanukkah Candy Collection', 'prix': '30', 'variantTexte': '' },
    { 'lien': '', 'image': 'img/e11.jpg', 'titre': 'Goodio Vegan Chocolate Advent Calendar', 'prix': '65', 'variantTexte': '' }
]

function SFExpert() {
  return (
    <Fragment>
        <div className="expert">
            <div className="expert--container shop--index-container">
                <div className="expert--info">
                    <div>
                        <h3 className="expert--info-headline">Our Expert Picks</h3>
                        <p className="expert--info-dek">
                            Peter's the buyer behind all the advent calendars in our Shop. From handmade chocolate to Danish licorice, here's what he's scooping up this season.
                        </p>
                    </div>
                    <Link className="lien expert--link" to=''>
                        <div className="expert--avatar">
                            <div className="d1">
                                <div className="1--1">
                                    <img src="img/t5.jpg" alt="" className='image'/>
                                </div>
                            </div>
                        </div>
                        <div className="expert--nom">Peter Themistocles</div>
                        <div className="expert--status">Senior Buyer</div>
                    </Link>
                </div>
                <div className="expert--products">
                    <div className="expert--products-container">
                        <Slideshow produits={produitsExp} />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SFExpert