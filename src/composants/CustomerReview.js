import React, {Fragment} from 'react'
import './styles/CustomerReview.scss'
import {Link} from 'react-router-dom'


function CustomerReview(props) {
    return(
        <Fragment>
            <div className="customer--review-container">
                <span className="customer--review-content--headline-mobile"></span>
                <Link className="customer--review-link lien" to={props.review.lienImage}>
                    <div className="d1">
                        <div className="d1--1">
                            <img src={props.review.image} loading='lazy' alt="" className="image" />
                        </div>
                    </div>
                    <div className="titreImage">{props.review.titreImage}</div>
                </Link>
                <div className="customer--review-content">
                    <span className="customer--review-content--headline"></span>
                    <div className="rating">
                        {Array(props.review.etoiles).fill(0).map((item, index) => (
                            <div key={index} className="etoile--remplie">
                                <span className="fa-solid fa fa-star"></span>
                            </div>
                        ))}
                        <span className="rating--text">{props.review.etoiles} Stars</span>
                    </div>
                    <div className="commentaire">{props.review.commentaire}</div>
                    <div className="separateur">-  </div>
                    <Link className="product--link-cta lien" to={props.review.lienCTA}>
                        View More Product Details
                        <span className="icon--arrow icon--arrow-right"></span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default CustomerReview