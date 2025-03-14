import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles/ProductCard.scss'
import { useDispatch } from 'react-redux'
import { ajoutProduit } from '../store/cartSlice'

function ProductCard(props) {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(ajoutProduit(props.produit))
    }

    return (
        <Fragment>
            <div className="product--container">
                <Link className="product--lien" to={props.produit.lien}>
                    <div className="product--image">
                        <div className="e1">
                            <div className="e1--1">
                                <img className='image' src={props.produit.image} alt="" loading='lazy' />
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
                <button onClick={handleAddToCart} className='produit--bouton' type='button'>
                    <span className="produit--bouton-icon fa-solid fa-cart-shopping"></span>
                </button>
            </div>
        </Fragment>
    )
}

export default ProductCard