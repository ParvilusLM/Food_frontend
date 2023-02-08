import React,{Fragment} from 'react'
import './styles/Checkout.scss'
import loadable from '@loadable/component'

const FragCheckout = loadable(() => import('../fragments/FragCheckout'))

function Checkout() {
  return (
    <Fragment>
        <FragCheckout />
    </Fragment>
  )
}

export default Checkout