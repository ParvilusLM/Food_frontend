import React, {Fragment, useState} from 'react'
import './styles/FragCheckout.scss'
import { Link } from 'react-router-dom'



function FragCheckout() {
    const [etape, setEtape] = useState(1);

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
            <div className="checkout--order-btns checkout--order-btn--place-order">
                <button className="btn btn--default ">
                    <div className="checkout--order-btn--default">
                        Place Order
                        <span>$0.00</span>
                    </div>
                </button>
            </div>
        </section>
    )

    const sectEtape1 = (<div className='etape'>
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

    const sectEtape2 = (<div className='etape'>
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
    
    const sectEtape3 = (<div className='etape'>
        <section className="checkout--step checkout--payment">
            <h2 className="checkout--subheading">Payment</h2>
            <div className="checkout--step-content">
                <h3>Credit Card</h3>
                <form action="" className="checkout--form checkout--payment-form">
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="form--input-container">
                               <label htmlFor="CardNumber" className="input--label">
                                    <span className="input--label-text--CN">Card Number</span>
                                </label>
                                <input id='CardNumber' placeholder='' name='ccNumber' type="tel" className="input checkout--form-input checkout--paymentt-card--default" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input checkout--payment-exp">
                            <div className="form--input-container">
                                <label htmlFor="MM/YY" className="input--label">
                                    <span className="input--label-text--CCE">MM/YY</span>
                                </label>
                                <input id='MM/YY' placeholder='' name='ccExpiration' type="tel" className="input" />
                            </div>
                        </div>
                        <div className="checkout--form-input checkout--paymentccv-">
                            <div className="form--input-container">
                                <label htmlFor="CVV" className="input--label">
                                    <span className="input--label-text--CVV">CVV</span>
                                </label>
                                <input id='CVV' placeholder='' name='ccCvv' type="tel" maxLength='4' className="input" />
                            </div>
                        </div>
                        <div className="checkout--form-input checkout--payment-zip">
                            <div className="form--input-container">
                                <label htmlFor="BillingZip" className="input--label">
                                    <span className="input--label-text--zip">Billing Zip</span>
                                </label>
                                <input id='BillingZip' placeholder='' type="tel" maxLength='5' className="input" />
                            </div>
                        </div>
                    </div>
                </form>
                <p className="checkout--small-print checkout--codes-note">
                    Note: Gift cards and promo codes can be entered on the next screen. For back-up purposes, we still require a credit card for all gift card orders.
                </p>
                <div className="checkout--payment-quick">
                    <h3>Alternative Payment Methods</h3>
                </div>
            </div>
        </section>
        {orderSummary}
    </div>)

    const sectEtape4 = (<div className='etape'>
        <section className="checkout--step checkout--review">
            <h2 className="checkout--subheading">Review</h2>
            <div className="checkout--review-row">
                <div className="checkout--review-section">
                    <h3>Shipping Adress</h3>
                    <button type='button' className="btn--link checkout--btn-link checkout--btn-top">Edit</button>
                    <span className="checkout--shipping-summary--name">Love Marckendy Parvilus</span>
                    <span>Haiti, Cap-haitien, Charrier, rue de l'amitie no208</span>
                    <span>Anchorage, AK 85001</span>
                    <p>lovemarckendyparvilus@gmail.com</p>
                </div>

                <div className="checkout--review-section">
                    <h3>Payment Method</h3>
                    <button type='button' className="btn--link checkout--btn-link checkout--btn-top">Edit</button>
                    <button className="btn--link checkout--btn-outline">Add Payment Method</button>
                </div>
            </div>
            <div className="checkout--review-row">
                <div className="checkout--review-section">
                    <h3>Delivery Options</h3>
                    <button type='button' className="btn--link checkout--btn-link checkout--btn-top">Edit</button>
                    <ul></ul>
                    <div className="checkout--small-print">
                        Due to high package volume with UPS and USPS, 
                        processing and delivery delays may occur — 
                        we’ll keep you updated as we try to move everything along as quickly as possible.
                    </div>
                    <button type='button' className="btn--link checkout--btn-link checkout--delivery-estimates">See Shipping Estimates & Options</button>
                    <button type='button' className="btn--link checkout--btn-outline">+ Add Gift Note</button>
                </div>
            </div>
            <div className="checkout--review-row">
                <div className="checkout--review-section">
                    <h3>Promo Code or Gift Card</h3>
                    <form action="" className="checkout--form checkout--codes-form">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="" className='input--label'>
                                    <span className="input--label-text">Enter Number</span>
                                </label>
                                <input id='EnterNumber' placeholder='' type="text" className="input" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h3>Your Cart</h3>
            </div>
        </section>
        {orderSummary}
    </div>)

  return (
    <Fragment>
        <div className="fragCheckout">
            <div className="checkoutMount">
                <div className="checkout checkout--container">
                    <header className="checkout--header">
                        <Link className="lien checkout--header-back" to='/shop'>
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
                                <img src="img/logo52.svg" alt="Food52 Food Community" className='image'/>
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