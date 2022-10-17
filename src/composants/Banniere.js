import React,{Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles/Banniere.scss'
import $ from 'jquery'

function Banniere(props) {

  useEffect ( () => {
    if(props.typeShop === false)
    {
      $('.banniere').addClass('banniere--global-props');
    }else {
      $('.banniere').removeClass('banniere--global-props');
    }
  }, [props.typeShop]);

  return (
    <Fragment>
        <div className="banniere">
            <div>
                This rechargeable lantern is 20% off and we're *beaming*.
                <Link className="lien lien1" to='/shop'>Shop now.</Link>
                <span className="shipping">
                    Free Standard Shipping on Orders $149+ .
                </span>
                <Link className="lien lien2" to='/'>View Details</Link>
            </div>
        </div>
    </Fragment>
    
  )
}

export default Banniere