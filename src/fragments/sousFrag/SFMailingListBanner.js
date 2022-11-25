import React, {Fragment} from 'react'
import './styles/SFMailingListBanner.scss'
import loadable from '@loadable/component'

const NewsletterForm =loadable(() => import('../../composants/NewsletterForm'))

function SFMailingListBanner() {
  return (
    <Fragment>
        <div className="mailing--banner">
            <div className="mailing--banner-container">
                <div className="mailing--banner-text--container">
                    <div className="mailing--list">
                        <div className="mailing--list-copy">
                            <h4 className="mailing--list-header">More Inspiration in Your Inbox</h4>
                            <p className="mailing--list-blurb">Sign up to get first dibs on new arrivals, sales and more.</p>
                        </div>
                        <div className="mailing--list-form--container">
                            <NewsletterForm /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SFMailingListBanner