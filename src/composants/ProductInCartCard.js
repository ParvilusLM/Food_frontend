import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import './styles/ProductInCartCard.scss'

function ProductInCartCard(props) {
  return (
    <Fragment>
        <div className="productInCartCard">
            <div className="produitInCart">
                <button className="btn--link btn--supprimer">
                    <span className="icon--remove"></span>
                </button>
                <Link className="lien lien--image" to=''>
                    <img src={props.donnees.produit.image} loading='lazy' alt="" className='image'/>
                </Link>
                <div className="contenu">
                    <h6 className="contenu--titre">
                        <Link className="lien lien--titre-produit">
                            {props.donnees.produit.titre}
                        </Link>
                    </h6>
                    <div className="contenu--sect">
                        <div className="action--quantite">
                            <button className="btn--link btn--dim-quantite">-</button>
                            <span className="current--quantity">{props.donnees.quantite}</span>
                            <button className="btn--link btn--aug-quantite">+</button>
                        </div>
                        <div className="prix">${props.donnees.produit.prix}</div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductInCartCard