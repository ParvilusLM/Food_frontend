import React, { Fragment } from 'react'
import './styles/NewsletterForm.scss'

function NewsletterForm() {
    return (
        <Fragment>
            <form className="mailing-list__form">
                <div>
                    <label aria-label="Email">
                        <span aria-hidden='true' className="css-197voio">Email</span>
                    </label>
                    <input id="footer-email" placeholder="hello@food52.com" type="email" name="fkhs" className="css-10auspp" />
                </div>
                <button className="btn btn--default mailing-list__btn" type="submit">Sign Up</button>
            </form>
        </Fragment>
    )
}

export default NewsletterForm