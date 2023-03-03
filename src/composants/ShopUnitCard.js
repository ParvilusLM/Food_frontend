import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles/ShopUnitCard.scss'

function ShopUnitCard(props) {
    return (
        <Fragment>
            <div className="shop--unit-container">
                <Link className="shop--unit-img--link" to=''>
                    <div className="shop--unit-img--container">
                        <div className='d1'>
                            <div className="d1--1">
                                <img src={props.info.image}  alt={props.info.titre} className="image" loading='lazy' />
                            </div>
                        </div>
                        <div className='ribbon ribbon--left shop--unit-ribbon'>
                            <span className="ribbon--text">in the shop</span>
                        </div>
                    </div>
                </Link>
                <div className="feature--details shop--unit-details">
                    <h2 className="feature--headline shop--unit-headline">
                        <Link className="feature--headline-link" to=''>{props.info.titre}</Link>
                    </h2>
                    <p className="feature--dek shop--unit-dek">{props.info.texte}</p>
                    <Link className="feature--cta shop--unit-cta" to={props.info.lien}>
                        Shop Now
                        <span className="icon--arrow icon--arrow-right"></span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ShopUnitCard