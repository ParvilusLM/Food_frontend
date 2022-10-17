import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import './styles/ProductCard.scss'

function ProductCard(props) {
    return(
        <Fragment>
            <div className="product--container">
                <Link className="product--lien" to={props.produit.lien}>
                    <div className="product--image">
                        <div className="e1">
                            <div className="e1--1">
                                <img className='image' src={props.produit.image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="product--details">
                        <h3 className="product--details-heading">
                            <span className="produit--titre">{props.produit.titre} </span>
                            <span className="produit--prix">${props.produit.prix}</span>
                        </h3>
                        <span className="product--variant">{props.produit.variantTexte}</span>
                    </div>
                </Link>
                <button className='produit--bouton' type='button'>
                    <span className="produit--bouton-icon fa-solid fa-cart-shopping"></span>
                </button>
            </div>
        </Fragment>
    )
} 

export default ProductCard