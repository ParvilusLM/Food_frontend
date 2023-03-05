import React, {Fragment, useState, useEffect} from 'react'
import './styles/FragCheckout.scss'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useSelector } from 'react-redux'



function FragCheckout() {
    const [etape, setEtape] = useState(1);
    const total = useSelector(state => state.panier.total)

    const goToNextSect = function() {
        setEtape(etape+1);

        if(etape+1 === 2) {
            $('.step--2').addClass('checkout--header-step--active');
        }

        if(etape+1 === 3) {
            $('.step--3').addClass('checkout--header-step--active');
        }

        if(etape+1 === 4) {
            $('.step--4').addClass('checkout--header-step--active');
        }
    }

    useEffect(() => {
        $(function () {
            $('.input--1').focusin(function() {
                $('.label--1').addClass('label--onFocus');
                $('.label--text-1').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--1').val() === '') {
                    $('.label--text-1').removeClass('label--text-onFocus');
                    $('.label--1').removeClass('label--onFocus');
                }
            });

            $('.input--2').focusin(function() {
                $('.label--2').addClass('label--onFocus');
                $('.label--text-2').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--2').val() === '') {
                    $('.label--text-2').removeClass('label--text-onFocus');
                    $('.label--2').removeClass('label--onFocus');
                }
            });

            $('.input--3').focusin(function() {
                $('.label--3').addClass('label--onFocus');
                $('.label--text-3').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--3').val() === '') {
                    $('.label--text-3').removeClass('label--text-onFocus');
                    $('.label--3').removeClass('label--onFocus');
                }
            });

            $('.input--4').focusin(function() {
                $('.label--4').addClass('label--onFocus');
                $('.label--text-4').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--4').val() === '') {
                    $('.label--text-4').removeClass('label--text-onFocus');
                    $('.label--4').removeClass('label--onFocus');
                }
            });

            $('.input--5').focusin(function() {
                $('.label--5').addClass('label--onFocus');
                $('.label--text-5').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--5').val() === '') {
                    $('.label--text-5').removeClass('label--text-onFocus');
                    $('.label--5').removeClass('label--onFocus');
                }
            });

            $('.input--6').focusin(function() {
                $('.label--6').addClass('label--onFocus');
                $('.label--text-6').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--6').val() === '') {
                    $('.label--text-6').removeClass('label--text-onFocus');
                    $('.label--6').removeClass('label--onFocus');
                }
            });

            $('.input--7').focusin(function() {
                $('.label--7').addClass('label--onFocus');
                $('.label--text-7').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--7').val() === '') {
                    $('.label--text-7').removeClass('label--text-onFocus');
                    $('.label--7').removeClass('label--onFocus');
                }
            });

            $('.input--8').focusin(function() {
                $('.label--8').addClass('label--onFocus');
                $('.label--text-8').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--8').val() === '') {
                    $('.label--text-8').removeClass('label--text-onFocus');
                    $('.label--8').removeClass('label--onFocus');
                }
            });

            $('.input--9').focusin(function() {
                $('.label--9').addClass('label--onFocus');
                $('.label--text-9').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--9').val() === '') {
                    $('.label--text-9').removeClass('label--text-onFocus');
                    $('.label--9').removeClass('label--onFocus');
                }
            });

            $('.input--10').focusin(function() {
                $('.label--10').addClass('label--onFocus');
                $('.label--text-10').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--10').val() === '') {
                    $('.label--text-10').removeClass('label--text-onFocus');
                    $('.label--10').removeClass('label--onFocus');
                }
            });

            $('.input--11').focusin(function() {
                $('.label--11').addClass('label--onFocus');
                $('.label--text-11').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--11').val() === '') {
                    $('.label--text-11').removeClass('label--text-onFocus');
                    $('.label--11').removeClass('label--onFocus');
                }
            });

            $('.input--12').focusin(function() {
                $('.label--12').addClass('label--onFocus');
                $('.label--text-12').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--12').val() === '') {
                    $('.label--text-12').removeClass('label--text-onFocus');
                    $('.label--12').removeClass('label--onFocus');
                }
            });

            $('.input--13').focusin(function() {
                $('.label--13').addClass('label--onFocus');
                $('.label--text-13').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--13').val() === '') {
                    $('.label--text-13').removeClass('label--text-onFocus');
                    $('.label--13').removeClass('label--onFocus');
                }
            });

        })
  })

    const orderSummary =(
        <section className="checkout--order">
            <h3>Order Summary</h3>
            <table className="checkout--order-table">
                <tbody>
                    <tr className="checkout--order-row">
                        <td>Subtotal</td>
                        {total !== 0 && <td>${total}</td>}
                        {total === 0 && <td>$0.00</td>}
                        
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
                        {total !== 0 && <td rowSpan='2'>Total: ${total}</td>}
                        {total === 0 && <td rowSpan='2'>Total: $0.00</td>}
                    </tr>
                </tfoot>
            </table>
            {etape !== 4 && <div className="checkout--order-btns">
                <button onClick={goToNextSect} className="btn btn--secondary btn--default btn--continue">Continue</button>
            </div>}
            
            {etape===4 && <div className="checkout--order-btns checkout--order-btn--place-order">
                <button className="btn btn--default btn--place-order">
                    <div className="checkout--order-btn--default">
                        Place Order
                        {total !== 0 && <span> ${total}</span>}
                        {total === 0 && <span> $0.00</span>}
                    </div>
                </button>
            </div>}
            
        </section>
    )

    const sectEtape1 = (<div className='etape'>
        <section className="checkout--step checkout--shipping">
            <h2 className="checkout--subheading">Shipping</h2>
            <div className="checkout--step-content">
                <h3>Shipping Address</h3>
                <form action="" className="checkout--form checkout--shipping-form">
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="FirstName" className="label--input label--1">
                                    <span className="label--input-text label--text-1">First Name</span>
                                </label>
                                <input id='FirstName' placeholder='' type="text" className="input--el input--1" name='firstName'/>
                            </div>
                        </div>
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="LastName" className="label--input label--2">
                                    <span className="label--input-text label--text-2">Last Name</span>
                                </label>
                                <input id='LastName' placeholder='' type="text" className="input--el input--2" name='lastName' />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="AddressLine1" className="label--input label--3">
                                    <span className="label--input-text label--text-3">Address Line 1</span>
                                </label>
                                <input id='AddressLine1' placeholder='' type="text" className="input--el input--3" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="AddressLine2" className="label--input label--4">
                                    <span className="label--input-text label--text-4">Address Line 2</span>
                                </label>
                                <input id='AddressLine2' placeholder='' type="text" className="input--el input--4" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="ZipCode" className="label--input label--5">
                                    <span className="label--input-text label--text-5">Zip Code</span>
                                </label>
                                <input id='ZipCode' name='postalCode' placeholder='' type="tel" maxLength='10' className="input--el input--5" />
                            </div>
                        </div>
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="City" className="label--input label--6">
                                    <span className="label--input-text label--text-6">City</span>
                                </label>
                                <input id='City' name='locality' placeholder='' type="text" className="input--el input--6" />
                            </div>
                        </div>
                        <div className="checkout--form-input checkout--shipping-state">
                            <div className="input--container">
                                <label htmlFor="State" className="label--input label--onFocus">
                                    <span className="label--select-text">State</span>
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
                                <label htmlFor="PhoneNumber(optional)" className="label--input label--7">
                                    <span className="label--input-text label--text-7">Phone Number(optional)</span>
                                </label>
                                <input id='PhoneNumber(optional)' placeholder='' type="tel" className="input--el input--7" />
                            </div>
                        </div>
                    </div>
                    <h3>Email Addrees</h3>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input">
                            <div className="input--container">
                                <label htmlFor="ConfirmationEmail" className="label--input label--8">
                                    <span className="label--input-text label--text-8">Confirmation Email</span>
                                </label>
                                <input id='ConfirmationEmail' placeholder='' name='notificationEmail' type="email" className="input--el input--8" />
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
                            <div className="input--container">
                               <label htmlFor="CardNumber" className="label--input label--9">
                                    <span className="label--input-text label--text-9 input--label-text--CN">Card Number</span>
                                </label>
                                <input id='CardNumber' placeholder='' name='ccNumber' type="tel" className="input--el input--9  checkout--payment-card checkout--payment-card--default" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout--form-row">
                        <div className="checkout--form-input checkout--payment-exp">
                            <div className="input--container">
                                <label htmlFor="MM/YY" className="label--input label--10">
                                    <span className="label--input-text label--text-10 labal--input-text--CCE">MM/YY</span>
                                </label>
                                <input id='MM/YY' placeholder='' name='ccExpiration' type="tel" className="input--el input--10" />
                            </div>
                        </div>
                        <div className="checkout--form-input checkout--paymentccv-">
                            <div className="input--container">
                                <label htmlFor="CVV" className="label--input label--11">
                                    <span className="label--input-text label--text-11 labal--input-text--CVV">CVV</span>
                                </label>
                                <input id='CVV' placeholder='' name='ccCvv' type="tel" maxLength='4' className="input--el input--11" />
                            </div>
                        </div>
                        <div className="checkout--form-input checkout--payment-zip">
                            <div className="input--container">
                                <label htmlFor="BillingZip" className="label--input label--12">
                                    <span className="label--input-text label--text-12 labal--input-text--zip">Billing Zip</span>
                                </label>
                                <input id='BillingZip' placeholder='' type="tel" maxLength='5' className="input--el input--12" />
                            </div>
                        </div>
                    </div>
                </form>
                <p className="checkout--small-print checkout--small-print--strong checkout--codes-note">
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
                    <span className="checkout--shipping-summary--name">Love Marckendy Parvilus <br></br></span>
                    <span>Haiti, Cap-haitien,</span>
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
                <div className="checkout--review-section checkout--step-content">
                    <h3>Promo Code or Gift Card</h3>
                    <form action="" className="checkout--form checkout--codes-form">
                        <div className="checkout--form-row">
                            <div className="checkout--form-input">
                                <div className="input--container">
                                    <label htmlFor="EnterNumber" className='label--input label--13'>
                                        <span className="label--input-text label--text-13">Enter Number</span>
                                    </label>
                                    <input id='EnterNumber' placeholder='' type="text" className="input--el input--13" />
                                </div>
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
                            <span className='hide--sm'>Back To &nbsp;</span> Shop
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
                                <button className="checkout--header-step step--1 checkout--header-step--active" disabled>Shipping</button>
                            </li>
                            <li>
                                <button className="checkout--header-step step--2" disabled>Delivery</button>
                            </li>
                            <li>
                                <button className="checkout--header-step step--3" disabled>Payment</button>
                            </li>
                            <li>
                                <button className="checkout--header-step step--4" disabled>Review</button>
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