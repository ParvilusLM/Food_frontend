import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.scss'
import loadable from '@loadable/component'
import $ from 'jquery'

const NewsletterForm = loadable(() => import('./NewsletterForm'))

function Footer() {

    useEffect(() => {
        $(() => {
            $('.nav--company-exp').on('click', function () {
            const valAttr = $('.nav--company-exp').attr('aria-expanded');
            if (valAttr === 'true') {
                $('.nav--company-exp').attr('aria-expanded', 'false');

                $('.company--exp-icon').addClass('plus--caret');
                $('.company--exp-icon').removeClass('minus--caret');
            } else {
                $('.nav--company-exp').attr('aria-expanded', 'true');

                $('.company--exp-icon').addClass('minus--caret');
                $('.company--exp-icon').removeClass('plus--caret');
            }
            });

            $('.nav--help-exp').on('click', function () {
            const valAttr = $('.nav--help-exp').attr('aria-expanded');
            if (valAttr === 'true') {
                $('.nav--help-exp').attr('aria-expanded', 'false');

                $('.help--exp-icon').addClass('plus--caret');
                $('.help--exp-icon').removeClass('minus--caret');
            } else {
                $('.nav--help-exp').attr('aria-expanded', 'true');

                $('.help--exp-icon').addClass('minus--caret');
                $('.help--exp-icon').removeClass('plus--caret');
            }
            });

            $('.nav--explore-exp').on('click', function () {
            const valAttr = $('.nav--explore-exp').attr('aria-expanded');
            if (valAttr === 'true') {
                $('.nav--explore-exp').attr('aria-expanded', 'false');

                $('.explore--exp-icon').addClass('plus--caret');
                $('.explore--exp-icon').removeClass('minus--caret');
            } else {
                $('.nav--explore-exp').attr('aria-expanded', 'true');

                $('.explore--exp-icon').addClass('minus--caret');
                $('.explore--exp-icon').removeClass('plus--caret');
            }
            });
        })
    }, []);

    return (
        <Fragment>
            <footer className='footer'>
                <div className="footer__container">
                    <nav className="footer__nav">
                        <div className="footer__logo">
                            <img src="/logo2.svg" height='24px' width='116px' alt="" className="logo" loading='lazy' />
                        </div>
                        <div className="footerLinksRoot">
                            <div className="footer__column">
                                <h5 aria-haspopup='true' aria-expanded='false' aria-controls='' className="footer__subHeading nav--company-exp">COMPANY <span className='company--exp-icon plus--caret'></span></h5>
                                <ul className='footer--nav-menu--dropdown' id='companyDropdown'>
                                    <li>
                                        <Link className='lien' to='/'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Our Team</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>DEI Vision</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>The Test Kitchen</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Podcast Network</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Events</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Press</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Jobs</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Affiliate Program</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <h5 aria-haspopup='true' aria-expanded='false' aria-controls='' className="footer__subHeading nav--help-exp">GET HELP <span className='help--exp-icon plus--caret'></span></h5>
                                <ul className='footer--nav-menu--dropdown' id='helpDropdown'>
                                    <li>
                                        <Link className='lien' to='/'>Contact & FAQ</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Orders & Returns</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Food52 Trade</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Request a Catalog</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Gift Cards</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Registry</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Advertising Inquiries</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Do Not Sell</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <h5 aria-haspopup='true' aria-expanded='false' aria-controls='' className="footer__subHeading nav--explore-exp">EXPLORE <span className='explore--exp-icon plus--caret'></span></h5>
                                <ul className='footer--nav-menu--dropdown' id='exploreDropdown'>
                                    <li>
                                        <Link className='lien' to='/'>The Shop</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Recipes</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Food</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Home52</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Travel</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Hotline</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Five Two</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Schoolhouse</Link>
                                    </li>
                                    <li>
                                        <Link className='lien' to='/'>Dansk</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__fine-print">
                            <div className="footer__copyright">©2022 Food52C</div>
                            <Link className='lien' to='/'>Terms</Link>
                            |
                            <Link className='lien' to='/'>Privacy</Link>
                            |
                            <Link className='lien' to='/'>Code of Conduct</Link>
                            |
                            <Link className='lien' to='/'>Accessibility Policy</Link>
                        </div>
                    </nav>
                    <div className="footer__actions">
                        <div className="social-charms">
                            <ul className="social-charms__icons">
                                <li>
                                    <Link to='/' className="social-charms__icon-link">
                                        <span className='fa-brands fa-facebook-f'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="social-charms__icon-link">
                                        <span className='fa-brands fa-instagram'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="social-charms__icon-link">
                                        <span className='fa-brands fa-twitter'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="social-charms__icon-link">
                                        <span className='fa-brands fa-pinterest'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="social-charms__icon-link">
                                        <span className='fa-brands fa-youtube'></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__mailing-list">
                            <div className="mailing-list__copy">
                                <h4 className="mailing-list__header">Sign up for our newsletter</h4>
                                <p className="mailing-list__blurb">Our best tips for eating thoughtfully and living joyfully, right in your inbox.</p>
                            </div>
                            <div className="mailingListRoot" data-location="Global Footer" data-source="onsite-globalfooter" data-hide-header="true" data-cta="Sign Up" data-custom-id="footer-email">
                                <div className="mailing-list " data-testid="mailing-list">
                                    <div className="mailing-list__form-container">
                                        <NewsletterForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default Footer