import React, {Fragment, useEffect} from 'react'
import './styles/HotlineWelcome.scss'
import { Link } from 'react-router-dom'
import $ from 'jquery'


function HotlineWelcome() {

    useEffect(() => {
        $(() => {
            $('.toggle--hotlineDrawer,.close').on('click', function() {
                const invisible = $('.hotlineDrawer').attr('aria-hidden');
                if(invisible === 'true') {
                    $('.hotlineDrawer').attr('aria-hidden','false');
                } else {
                    $('.hotlineDrawer').attr('aria-hidden','true');
                }

            })
        })
    })

  return (
    <Fragment>
        <div className="hotlineWelcome">
            <div className="content--container hotlineWelcome--wrapper">
                <h2 className="headline">Join the Discussion!</h2>
                <p className="dek">Get help for your kitchen and home questions, share things you love, and connect with our community.</p>
                <button type='button' className="btn--link toggle--hotlineDrawer" aria-controls='hotlineDrawer' aria-expanded='true'>Ask a question or start  a discussion</button>
                <div className="hint">
                    Have a question about your shop order?
                    <span> </span>
                    <Link className="open--zendesk-popup" to=''>Click here</Link>
                </div>
            </div>
            <div className="hotlineDrawer" id='hotlineDrawer' aria-hidden='true'>
                <div className="content--container hotlineDrawer--wrapper">
                    <button className="btn--link close">
                        <span className="icon icon--close" aria-label='Close Modal'></span>
                    </button>
                    <div className="hotlineDrawer--content">
                        <h2 className="headline">Join the Discussion!</h2>
                        <p className="dek">Get help for your kitchen and home questions, share things you love, and connect with our community.</p>
                        <form action="" className="hotlineDrawer--form">
                            <div className='input--question-container'>
                                <label aria-label="Question or Title" className='question--label'>
                                    <span aria-hidden='true' className="question--label-span">Question or Title</span>
                                </label>
                                <input id="QuestionTitle" placeholder=" " type='text' name="questionInput" className="question--input" />
                                <div className="form--count">150</div>
                            </div>
                            <div className='input--details'>
                                <div className="input--details-container">
                                    <label aria-label="Additional details that would be helpful(optional)" className='details--label'>
                                        <span aria-hidden='true' className="details--label-span">Additional details that would be helpful(optional)</span>
                                    </label>
                                    <textarea name="content" id="AdditionalDetails" className="details--input"></textarea>
                                </div>
                            </div>
                            <div className="checkbox">
                                <div className="checkbox--container">
                                    <input type="checkbox" name='statusQuestion' className="status--question-input" />
                                    <label htmlFor="statusQuestion" className="status--question-label">Urgent! I'm right in the middle of cooking / shopping / deciding.</label>
                                </div>
                                
                            </div>
                            
                            <div className="cta">
                                <button className="btn btn--default btn--outline btn--cancel">Cancel</button>
                                <button className="btn btn--default btn--secondary btn--continue">Continue</button>
                            </div>
                            <div className="form--errors" aria-live='assertive'>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
  )
}

export default HotlineWelcome