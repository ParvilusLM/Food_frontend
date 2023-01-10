import React, {Fragment} from 'react'
import './styles/HotlineWelcome.scss'
import { Link } from 'react-router-dom'


function HotlineWelcome() {
  return (
    <Fragment>
        <div className="hotlineWelcome">
            <div className="content--container hotlineWelcome--wrapper">
                <h2 className="headline">Join the Discussion!</h2>
                <p className="dek">Get help for your kitchen and home questions, share things you love, and connect with our community.</p>
                <button type='button' className="btn--link" aria-controls='hotlineDrawer' aria-aria-expanded='false'>Ask a question or start  a discussion</button>
                <div className="hint">
                    Have a question about your shop order?
                    <Link className="open--zendesk-popup" to=''>Click here</Link>
                </div>
            </div>
            <div className="hotlineDrawer" aria-hidden='true'>
                <div className="content--container hotlineDrawer--wrapper">
                    <button className="btn--link close">
                        <span className="icon icon--close" aria-label='Close Modal'></span>
                    </button>
                    <div className="hotlineDrawer--content">
                        <h2 className="headline">Join the Discussion!</h2>
                        <p className="dek">Get help for your kitchen and home questions, share things you love, and connect with our community.</p>
                        <form action="" className="hotlineDrawer--form">
                            <div>
                                <label aria-label="Question or Title">
                                    <span aria-hidden='true' className="css-197voio">Question or Title</span>
                                </label>
                                <input id="footer-email" placeholder="Question or Title" type='text' name="questionInput" className="css-10auspp" />
                                <div class="form--count">150</div>
                            </div>
                            <div>
                                <label aria-label="Additional details that would be helpful(optional)">
                                    <span aria-hidden='true' className="css-197voio">Additional details that would be helpful(optional)</span>
                                </label>
                                <input id="footer-email" placeholder="Additional details that would be helpful(optional)" type="text" name="detailsInput" className="css-10auspp" />
                            </div>
                            <div className="checkbox--wrapper">
                                <input type="checkbox" name='statusQuestion' className="status--question-input" />
                                <label htmlFor="statusQuestion" className="status--question-label">Urgent! I'm right in the middle of cooking / shopping / deciding.</label>
                            </div>
                            
                            <div className="cta">
                                <button className="btn btn--default btn--outline">Cancel</button>
                                <button className="btn btn--default btn--secondary">Continue</button>
                            </div>
                            <div className="form--errors" aria-aria-live='assertive'>

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