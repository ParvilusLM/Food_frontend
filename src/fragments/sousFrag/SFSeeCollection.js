import React, {Fragment} from 'react'
import './styles/SFSeeCollection.scss'
import {Link} from 'react-router-dom'


function SFSeeCollection() {
  return (
    <Fragment>
        <div className="see--collection-container">
            <Link className="see--collection-image lien" to=''>
                <div className="d1">
                    <div className="d1--1">
                        <img src="img/t4.jpg" loading='lazy' alt="" className='image'/>
                    </div>
                </div>
                
            </Link>
            <div className="see--collection-content">
                <h3 className="see--collection-content-headline">You Shouldn't Have</h3>
                <p className="see--collection-content-dek">Gifts to delight the host in your life—we have them in spades.</p>
                <Link className="lien lien--cta btn btn--secondary btn--small" to=''>Shop Collection</Link>
            </div>
        </div>
    </Fragment>
  )
}

export default SFSeeCollection