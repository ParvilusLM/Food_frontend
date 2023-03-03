import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './styles/ShopGiftCard.scss'

function ShopGiftCard(props) {
    const giftRegistry = (
        <div className="shop--gift-content shop--gift-content--registry">
            <div className="shop--gift-headline">Wedding Registry</div>
            <p className="shop--gift-dek">
                Make the wish list of your dreams 
            </p>
            <Link className="view--more view--more-medium lien shop--gift-mobile" to={props.donnees.lienGiftRegistry}>
                Create Registry
                <span className="icon--arrow icon--arrow-right"></span>
            </Link>
            <div className="shop--gift-details">
                <p className="shop--gift-list">
                    Expertly curated products
                    <span>•</span>
                    Handy Gift tracking bonus shop discount
                </p>
                <Link className="lien btn btn--secondary btn--small" to={props.donnees.lienGiftRegistry}>Create a Registry</Link>
            </div>
        </div>
    )

    const giftContentCard = (
        <div className="shop--gift-content shop--gift-content--card">
            <div className="shop--gift-headline">Food52 E-Gift Cards</div>
            <p className="shop--gift-dek">The gift that keeps on giving</p>
            <Link className="view--more view--more-medium lien shop--gift-mobile" to={props.donnees.lienContentCard}>
                Shop E-gift Cards
                <span className="icon--arrow icon--arrow-right"></span>
            </Link>
            <div className="shop--gift-details">
                <div className="shop--gift-list--heading">Available In</div>
                <p className="shop--gift-list">
                    $25<span>•</span>$50<span>•</span>$100<span>•</span>$250<span>•</span>$500
                </p>
                <Link className="lien btn btn--secondary btn--small" to={props.donnees.lienContentCard}>Shop E-gift Cards</Link>
            </div>
        </div>
    )

  return (
    <Fragment>
        <div className="shop--gift">
            <div className="shop--gift-image">
                <div className="d1">
                    <div className="d1--1">
                        <img src={props.donnees.image} loading='lazy' alt="" className='image'/>
                    </div>
                </div>
            </div>
            {props.donnees.type && giftRegistry}
            {!props.donnees.type && giftContentCard}
        </div>
    </Fragment>
  )
}

export default ShopGiftCard