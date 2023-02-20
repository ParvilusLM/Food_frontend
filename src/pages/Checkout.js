import React,{Fragment} from 'react'
import './styles/Checkout.scss'
import loadable from '@loadable/component'

const FragCheckout = loadable(() => import('../fragments/FragCheckout'))

function Checkout() {
  return (
    <Fragment>
      <div className="checkout">
        <FragCheckout /> 
      </div>
    </Fragment>
  )
}

export default Checkout