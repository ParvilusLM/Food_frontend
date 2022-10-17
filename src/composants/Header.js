import React,{Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss'
import loadable from '@loadable/component'
import $ from 'jquery'

const DrawerConnexion = loadable( () => import('../composants/DrawerConnexion'));
const DrawerRecherche = loadable( () => import('../composants/DrawerRecherche'));
const DrawerPanier = loadable( () => import('../composants/DrawerPanier'));

function Header() {

    useEffect( () => {
        
        $('.btn--link').on('click',function() {
            $('.global-nav__menu').addClass('global-nav__menu--expanded');
        });

        $('.close').on('click',function() {
            $('.global-nav__menu').removeClass('global-nav__menu--expanded');
        });


        $('.li-shop').on('click',function() {
            const valAttr = $('.lien-nav--shop-exp').attr('aria-expanded');
            if(valAttr === 'true') {
                $('.lien-nav--shop-exp').attr('aria-expanded', 'false');
            } else {
                $('.lien-nav--shop-exp').attr('aria-expanded', 'true');
            }
            
        });

        $('.li-recipes').on('click',function() {
            const valAttr = $('.lien-nav--recipes-exp').attr('aria-expanded');
            if(valAttr === 'true') {
                $('.lien-nav--recipes-exp').attr('aria-expanded', 'false');
            } else {
                $('.lien-nav--recipes-exp').attr('aria-expanded', 'true');
            }
            
        });

        $('.li-community').on('click',function() {
            const valAttr = $('.lien-nav--community-exp').attr('aria-expanded');
            if(valAttr === 'true') {
                $('.lien-nav--community-exp').attr('aria-expanded', 'false');
            } else {
                $('.lien-nav--community-exp').attr('aria-expanded', 'true');
            }
            
        });

        

        $(window).on('resize', function() {
            let hasClassIn = $('.global-nav__menu').hasClass('global-nav__menu--expanded');
            if(hasClassIn) {
                let vp = $(window).width() + 17;
                if(vp >= 1006) {
                    $('.global-nav__menu').removeClass('global-nav__menu--expanded');
                    
                }
            }
            
        })

        
        
    });

  return (
    <Fragment>
        <header className='wrapper-header'>
            <div className="header">
                <nav className='global-nav'>
                    <div className="logo">
                        <Link className="lien-logo" to='/'>
                        <img src="logo.svg" height='24px' width='116px' alt=""  />
                        </Link>
                    </div>
                    <div className="global-nav__menu ">
                        <button width='20px' height='25px'  type='button' className="close">
                            <span className="close-icon"></span>
                        </button>
                        <ul className="global-nav__menu-list">
                            <li className="global-nav__menu-item global-nav__menu-item--more">
                                <button type="button" className="btn--link global-nav__menu-link">
                                    <span>Menu</span>
                                </button>
                            </li>
                            <li className="global-nav__menu-item li-shop">
                                <Link aria-haspopup='true' aria-expanded='false' aria-controls='the_shopDropdown' className='lien-nav lien-nav__shop lien-nav--shop-exp' to='/shop'>
                                    <span>The shop</span>
                                    <span className="global-nav__menu-caret shop--caret" aria-label="Toggle The Shop sub menu">
                                        <span className="icon icon__arrow"></span>
                                    </span>
                                </Link>
                                
                                <div className="global-nav__menu-dropdown" id='the_shopDropdown'>
                                    <div className="global-nav__shop global-nav__shop--column">
                                        <ul className="global-nav__shop-groups">
                                            <li className="global-nav__shop-group">
                                                <h5 className="global-nav__shop-heading">
                                                    <Link className='lien' to='/'>New Arrivals</Link>
                                                </h5>
                                                <h5 className="global-nav__shop-heading">
                                                    <Link className='lien five-two' to='/'>Five Two</Link>
                                                </h5>
                                                <h5 className="global-nav__shop-heading">
                                                    <Link className='lien' to='/'>Experiences</Link>
                                                </h5>
                                                <h5 className="global-nav__shop-heading">
                                                    <Link className='lien' to='/'>Cookware</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className='lien' to='/'>Baking & Roasting Pans</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='lien' to='/'>Cookware Sets</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='lien' to='/'>Dutch Ovens & Stock Pots</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='lien' to='/'>Frying Pans & Skillets</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='lien' to='/'>Griddles & Grill Pans</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='lien' to='/'>Sauce & Saute Pans</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='lien' to='/'>Specialty Cookware</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="global-nav__shop-group">
                                                <h5 className="global-nav__shop-heading--kitchen">
                                                    <Link className="lien" to='/'>Kitchen</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className="lien" to='/'>Appliances</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Aprons</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Bakeware</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Coffee & Tea Accessories</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Cookbooks</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Cutting Boards</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Food Storage</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Grill Accessories</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Kitchen Storage & Organisation</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Kitchen Towels & Dish Cloths</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Kitchen Utensils & Tools</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Knives</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Water Bottle</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="global-nav__shop-group">
                                                <h5 className="global-nav__shop-heading--home">
                                                    <Link className='lien' to='/'>Home</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className="lien" to='/'>Bathroom Accessories</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Beding</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Cleaning & Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Furniture</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Games & Puzzles</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Holiday Decorations</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Home & Wall Decor</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Home Organisation & Storage</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Kids & Baby</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Lamps & Lighting</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Office Supplies</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Pet Supplies & Bolws</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Rugs, Mats & Runners</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Trow Pillow & Blankets</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Travel Accessories & Bags</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="global-nav__shop-group">
                                                <h5 className="global-nav__shop-heading--table">
                                                    <Link className="lien" to='/'>Table</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className="lien" to='/'>Barware</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Candles & Candle Holders</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Coffee Mugs & Tea Cups</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Dinnerware</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Flatware & Serving Utensils</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Glassware</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Outdoor Dinning</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Serveware</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Table Decor</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Tablecloths & Linens</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Vases & Decorative Objects</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Vintage</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="global-nav__shop-group">
                                                <h5 className="global-nav__shop-heading--outdoor">
                                                    <Link className="lien" to='/'>Outdoor</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className="lien" to='/'>Beach Umbrellas, Towels & Accessories</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Coolers & Picnic</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Doormats & Outdoor Rugs</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Flowers & Plants</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Outdoor Entertaining</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Outdoor Furniture & Decor</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Outdoor Lighting</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Planters & Gardening Tools</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Wreaths & Garlands</Link>
                                                    </li>
                                                </ul>
                                                <h5 className="global-nav__shop-heading--pantry spacingTop">
                                                    <Link className="lien" to='/'>Pantry</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className="lien" to='/'>Candy & Chocolate</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Coffee & Tea</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Drinks & Cocktails</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Holiday Snacks & Treats</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Non-Alcoholic Drinks</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Oils & Vinegars</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Pantry Staples</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Specialty & Seasonal Foods</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="global-nav__shop-group">
                                                <h5 className="global-nav__shop-heading--gifts">
                                                    <Link className="lien" to='/'>Gifts</Link>
                                                </h5>
                                                <ul className="global-nav__shop-sub-group">
                                                    <li>
                                                        <Link className="lien" to='/'>Cooking Gifts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Easter Decorations</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Father's Day Gifts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Food Gifts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Gardening Gifts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Gift Cards</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Gifts for the Host</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Gifts from Underrepresented Makers</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Gifts under $100</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Gifts under $50</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Handmade Gifts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Mother's Day Gifts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien" to='/'>Unique Gifts</Link>
                                                    </li>
                                                </ul>
                                                <h5 className="global-nav__shop-heading--registry spacingTop">
                                                    <Link className="lien lien-registry" to='/'>
                                                        Wedding Registry
                                                        <span className='icon__registry'></span>
                                                    </Link>
                                                </h5>
                                                <Link className="global-nav__shop-link" to='/'>Go to The Shop</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="global-nav__menu-item li-recipes">
                                <Link aria-haspopup='true' aria-expanded='false' aria-controls='the_recipesDropdown' className='lien-nav lien-nav--recipes-exp' to='/recipes'>
                                    <span>Recipes</span>
                                    <span className="global-nav__menu-caret recipes--caret" aria-label="Toggle Recipes sub menu">
                                        <span className="icon icon__arrow"></span>
                                    </span>
                                </Link>
                                <div className="global-nav__menu-dropdown" id='the_recipesDropdown'>
                                    <div className="global-nav__recipes--row">
                                        <div className="global-nav__recipes-groups explore-arrow">
                                            <img src="img-downl/explore.svg" width='113px' height='70px' alt="" />
                                        </div>
                                        <div className="global-nav__recipes-groups hidden-l-screen">
                                            <ul className="global-nav__recipes-list">
                                                <li>
                                                    <Link className='lien-allRecipes' to="/recipes" >All Recipes</Link>
                                                    <div className="explore-text">EXPLORE</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="global-nav__recipes-groups">
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6 first"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Brussel Sprouts</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Chicken</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Ground Beef</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Salmon</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Shrimp</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Sweet Potato/Yam</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Gluten-Free</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Kid-Friendly</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Raw Food</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Vegan</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Vegetarian</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="global-nav__recipes-groups">
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Breakfast</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Dinner</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Drink</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Lunch</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Side</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>American</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Chinese</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>French</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Indian</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Italian</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Korean</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Mexican</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="global-nav__recipes-groups">
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Bread</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Brownie</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Cookie</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Meatball</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Pancake</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Pasta</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Bake</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Instant Pot</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Roast</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Slow Cooker</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="global-nav__recipes-groups">
                                            <div className="global-nav__recipes-tags">
                                                <div className="vector-6"></div>
                                                <ul className="global-nav__recipes-list">
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Mardi Gras</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Persian New Year</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Purim</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>Ramadan</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="lien-recipes" to='/'>St. Patrick's Day</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link className="global-nav__shop-link" to='/'>Find More Recipes</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="global-nav__menu-item">
                                <Link className='lien-nav' to='/food'>
                                    <span>Food</span>
                                </Link>
                            </li>
                            <li className="global-nav__menu-item">
                                <Link className='lien-nav' to='/drink52'>
                                    <span>Drink52</span>
                                </Link>
                            </li>
                            <li className="global-nav__menu-item">
                                <Link className='lien-nav' to='/home52'>
                                    <span>Home52</span>
                                </Link>
                            </li>
                            <li className="global-nav__menu-item li-community">
                                <Link aria-haspopup='true' aria-expanded='false' aria-controls='communityDropdown' className='lien-nav lien-nav--community-exp' to='/hotline'>
                                    <span>Community</span>
                                    <span className="global-nav__menu-caret community--caret" aria-label="Toggle The Shop sub menu">
                                        <span className="icon icon__arrow"></span>
                                    </span>
                                </Link>
                                <div className="global-nav__menu-dropdown" id='communityDropdown'>
                                    <ul className="global-nav__community">
                                        <li>
                                            <Link className="lien-community" to='/'>
                                                <div className="wrapper1">
                                                    <div className="wrapper2">
                                                        <picture>
                                                            <img src="/img-downl/hotline.webp" width='100px' height='100px' alt="" className="img-community" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <h5>Hotline</h5>
                                                <p>Get help with your kitchen and home questions, share things you love, and connect with our community.</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="lien-community" to='/'>
                                                <div className="wrapper1">
                                                    <div className="wrapper2">
                                                        <picture>
                                                            <img src="/img-downl/contest.webp" width='100px' height='100px' alt="" className="img-community" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <h5>Contests</h5>
                                                <p>Submit your entries for our current recipe contest theme, vote for your favorites, or browse past winners.</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="lien-community" to='/'>
                                                <div className="wrapper1">
                                                    <div className="wrapper2">
                                                        <picture>
                                                            <img src="/img-downl/fivetwo.webp" width='100px' height='100px' alt="" className="img-community" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <h5>Five Two</h5>
                                                <p>Join the Five Two Design Team to share your ideas and help bring our in-house product line to life.</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="lien-community" to='/'>
                                                <div className="wrapper1">
                                                    <div className="wrapper2">
                                                        <picture>
                                                            <img src="/img-downl/add-recipe.webp" width='100px' height='100px' alt="" className="img-community" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <h5>+ Add a recipe</h5>
                                                <p>Contribute your best original recipes to the Food52 cooking community’s all-star collection.</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="global-nav__menu-item">
                                <Link className='lien-nav' to='/'>
                                    <span>Watch</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="global-nav__actions">
                        <li className="global-nav__action">
                            <DrawerConnexion />
                        </li>
                        <li className="global-nav__action">
                            <DrawerRecherche />
                        </li>
                        <li className="global-nav__action">
                            <DrawerPanier />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </Fragment>
  )
}

export default Header