import React, {Fragment} from 'react'
import './styles/SFMaker.scss'
import {Link} from 'react-router-dom'

const produits = [
    {'image':'img/t7.jpg', 'lien':''},
    {'image':'img/t7-1.jpg', 'lien':''},
    {'image':'img/t7-2.jpg', 'lien':''}
]

function SFMaker() {
  return (
    <Fragment>
        <div className="maker">
            <div className="maker--container">
                <div className="maker--image">
                    <div className="d1">
                        <div className="d1--1">
                            <img src="img/t6.jpg" loading='lazy' alt="" className='image'/>
                        </div>
                    </div>
                </div>
                <div className="maker--content">
                    <div className="maker--content-titre--section">MEET THE MAKER</div>
                    <h3 className="maker--content-headline">
                        <Link className="maker--content-headline-link lien" to=''>Mepra</Link>
                    </h3>
                    <p className="maker--content-dek">Brescia, Lombardy</p>
                    <p className="maker--content-dek2">Italians certainly have style—and this tableware company is testament to that fact. With generations of crafting beautiful, elegant flatware and home goods under their belt, they're an expert in making products that elevate any average table to something special.</p>
                    <div className="maker--content-products">
                        {produits.map((item, index) => (
                            <Link key={index} className="maker--content-products--link lien" to=''>
                                <div className="d2">
                                    <div className="d2--1">
                                        <img src={item.image} loading='lazy' alt="" className='image'/>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Link className="view--more view--more-medium maker--content-cta lien">
                        Shop All Mepra
                        <span className="icon--arrow icon--arrow-right"></span>
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SFMaker