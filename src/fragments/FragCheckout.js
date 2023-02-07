import React, {Fragment, useState} from 'react'
import './styles/FragCheckout.scss'
import { Link } from 'react-router-dom'

function FragCheckout() {
    const [etape, setEtape] = useState(3);

    const orderSummary =(
        <section className="checkout--order">
            <h3>Order Summary</h3>
            <table className="checkout--order-table">
                <tbody>
                    <tr className="checkout--order-row">
                        <td>Subtotal</td>
                        <td>$0.00</td>
                    </tr>
                    <tr className="checkout--order-row">
                        <td>
                            Shipping
                            <span className="checkout--order-free--shipping">Free Shipping $99+</span>
                        </td>
                        <td>$0.00</td>
                    </tr>
                    <tr className="checkout--order-row">
                        <td>Tax</td>
                        <td>$0.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="checkout--order-row checkout--order-row--total">
                        <td rowSpan='2'>Total: $0.00</td>
                    </tr>
                </tfoot>
            </table>
            <div className="checkout--order-btns">
                <button className="btn btn--default btn--secondary">Continue</button>
            </div>
        </section>
    )

    const sectEtape1 = (<div>
        <section className="checkout--set checkout--shipping">
            <h2 className="checkout--subheading">Shipping</h2>
            <div className="checkout--step-content">
                <h3>Shipping Address</h3>
                <form action="" className="chekout--form checkout--shipping-form">
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="FirstName" className="label--input">
                                    <span className="label--input-text">First Name</span>
                                </label>
                                <input id='FirstName' placeholder='' type="text" className="input--el" name='firstName'/>
                            </div>
                        </div>
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="LastName" className="label--input">
                                    <span className="label--input-text">Last Name</span>
                                </label>
                                <input id='LastName' placeholder='' type="text" className="input--el" name='lastName' />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="AddressLine1" className="label--input">
                                    <span className="label--input-text">Address Line 1</span>
                                </label>
                                <input id='AddressLine1' placeholder='' type="text" className="input--el" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="AddressLine2" className="label--input">
                                    <span className="label--input-text">Address Line 2</span>
                                </label>
                                <input id='AddressLine2' placeholder='' type="text" className="input--el" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="ZipCode" className="label--input">
                                    <span className="label--input-text">Zip Code</span>
                                </label>
                                <input id='ZipCode' name='postalCode' placeholder='' type="tel" maxLength='10' className="input--el" />
                            </div>
                        </div>
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="City" className="label--input">
                                    <span className="label--input-text">City</span>
                                </label>
                                <input id='City' name='locality' placeholder='' type="text" className="input--el" />
                            </div>
                        </div>
                        <div className="checkout--form-input checkout--shipping-state">
                            <div className="input--container">
                                <label htmlFor="State" className="label--input">
                                    <span className="label--input-text">State</span>
                                </label>
                                <select name="region" id="State" className='select--region'>
                                    <option hidden disabled></option>
                                    <option value="AK">AK</option>
                                    <option value="AL">AL</option>
                                    <option value="AR">AR</option>
                                    <option value="AZ">AZ</option>
                                    <option value="CA">CA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="PhoneNumber(optional)" className="label--input">
                                    <span className="label--input-text">Phone Number(optional)</span>
                                </label>
                                <input id='PhoneNumber(optional)' placeholder='' type="tel" className="input--el" />
                            </div>
                        </div>
                    </div>
                    <h3>Email Addrees</h3>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="ConfirmationEmail" className="label--input">
                                    <span className="label--input-text">Confirmation Email</span>
                                </label>
                                <input id='ConfirmationEmail' placeholder='' name='notificationEmail' type="email" className="input--el" />
                            </div>
                        </div>
                    </div>
                    <div className="fieldset--checkbox checkout--form-checkbox">
                        <input type="checkbox" className="receive--newsletter" id='recieveNewsletter' />
                        <label htmlFor="receiveNewsletter" className="checkbox">Yes! I'd like to hear more from Food52.</label>
                    </div>
                </form>
            </div>
        </section>
        {orderSummary}
    </div>)

    const sectEtape2 = (<div>
        <section className="checkout--step checkout--delivery">
            <h2 className="checkout--subheading">Delivery</h2>
            <div className="checkout--step-content">
                <h3>Delivery Estimates & Options</h3>
                <div className="checkout--delivery-overview">
                    <p className="checkout--delivery-policy">
                        Free Standard Shipping on Orders $99+. $9 flat rate for Standard Shipping on orders under $99.
                         If available, Express Shipping options are listed below per merchant (additional charges will be applied as specified).
                        View our shipping policy 
                        <Link className="lien checkout--btn-link" target='_blank' to=''>here</Link>
                    </p>
                    <button type='button' className="btn--link checkout--btn-outline">+ Add Gift Note</button>
                </div>
                <div className="checkout--delivery-shipments"></div>
            </div>
        </section>
        {orderSummary}
    </div>)
    
    const sectEtape3 = (<div>
        <section className="checkout--step checkout--payment">
            <h2 className="checkout--subheading">Payment</h2>
            <div className="checkout--step-content">
                <h3>Credit Card</h3>
                <form action="" className="checkout--form checkout--payment-form">

                </form>
                <p className="checkout--small-print checkout--codes-note">
                    Note: Gift cards and promo codes can be entered on the next screen. For back-up purposes, we still require a credit card for all gift card orders.
                </p>
                <div className="checkout--payment-quick">
                    <h3>Alternative Payment Methods</h3>
                    <form method="post" action="https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware/Checkout/{WVhWaGNXZEVObU5uTjJjOSBURzVpTmtKa1JUVk5SR0ZTUkVrMVkzSXRlSFYxZHowOQ==}" >
                        <input type="hidden" name="amount" value="base64(encrypt(50))"/>
                        <input type="hidden" name="orderId" value="base64(encrypt(2))"/>
                        <input type="image" name="ap_image" src="https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware/resources/assets/images/MC_button.png"/>
                    </form>
                </div>
            </div>
        </section>
        {orderSummary}
    </div>)

    const sectEtape4 = (<div>
        
    </div>)

  return (
    <Fragment>
        <div className="fragCheckout">
            <div className="checkoutMount">
                <div className="checkout checkout--container">
                    <header className="checkout--header">
                        <Link className="checkout--header-back" to='/shop'>
                            <svg className="checkout__header-arrow" aria-hidden="true" width="20" height="16" >
                                <path d="M19.384 7.62H1.3L8.27.65a.38.38 0 10-.54-.538L.112 7.73a.385.385 0 00-.083.416c.02.046.047.088.083.124l7.618 7.618a.38.38 0 10.539-.538L1.3 8.38h18.084a.381.381 0 000-.762" 
                                    fill="currentColor" 
                                    fillRule="evenodd">
                                </path>
                            </svg>
                            Back To Shop
                        </Link>

                        <div className="checout--header-title">
                            <Link className='lien' to='/'>
                                <img src="img/logo52.svg" alt="Food52 Food Community" />
                            </Link>
                            <h1 className="checkout--header-heading">Checkout</h1>
                        </div>
                        <div className="checkout--help">
                            Need Help?
                            <Link className="lien checkout--btn-link" to='' target='_blank'>Ask our Care team.</Link>
                        </div>

                        <ol className="checkout--header-steps">
                            <li>
                                <button className="checkout--header-step checkout--header-step--active" disabled>Shipping</button>
                            </li>
                            <li>
                                <button className="checkout--header-step" disabled>Delivery</button>
                            </li>
                            <li>
                                <button className="checkout--header-step" disabled>Payment</button>
                            </li>
                            <li>
                                <button className="checkout--header-step" disabled>Review</button>
                            </li>
                        </ol>
                    </header>

                    <div className="checkout--main checkout--container-main">
                        {etape===1 && sectEtape1}
                        {etape===2 && sectEtape2}
                        {etape===3 && sectEtape3}
                        {etape===4 && sectEtape4}
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </Fragment>
  )
}

export default FragCheckout