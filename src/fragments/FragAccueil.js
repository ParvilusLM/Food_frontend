import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'
import './styles/FragAccueil.scss'

const ShopUnitCard = loadable(() => import('../composants/ShopUnitCard'))
const RecipeUnitCard = loadable(() => import('../composants/RecipeUnitCard'))
const FragNewTo = loadable(() => import('./FragNewTo'))
const ShopByCat = loadable(() => import('../composants/ShopByCat'))
const ProductCard = loadable(() => import('../composants/ProductCard'))
const SFContentSect = loadable(() => import('./sousFrag/SFContentSect'))
const Newest = loadable(() => import('../composants/Newest'))
const NewsletterForm = loadable(() => import('../composants/NewsletterForm'))

const info = { 'image': 'img/b1.webp', 'titre': 'Oven Ready', 'texte': 'These lovelies will protect your wrists through all that pie baking.', 'lien': '' };
const info2 = { 'image': 'img/b2.webp', 'titre': 'You\'re Golden', 'texte': 'From our very own line: pastry flour & chocolate for best-ever bakes.', 'lien': '' };

const infoR = { 'image': 'img/c1.webp', 'titre': 'Sheet-Pan Apple Crisp', 'lien': '' };
const infoR2 = { 'image': 'img/c2.webp', 'titre': 'Toasty Cinnamon Meringue Cake', 'lien': '' };
const infoR3 = { 'image': 'img/c3.webp', 'titre': 'Pumpkin Banana Bread With Toasty Pecans', 'lien': '' };


const produits = [
    { 'lien': '', 'image': 'img/h1.jpg', 'titre': 'Food52 Gingham Linen Pot Holders (Set of 2)', 'prix': '35', 'variantTexte': 'more colors' },
    { 'lien': '', 'image': 'img/h2.jpg', 'titre': 'Dansk Købenstyle Baker ', 'prix': '135', 'variantTexte': 'more colors' },
    { 'lien': '', 'image': 'img/h3.jpg', 'titre': 'Recycled Clay Stacked Organic Dinnerware', 'prix': '90', 'variantTexte': 'more options' },
    { 'lien': '', 'image': 'img/h4.jpg', 'titre': 'Staub Cast Iron Tall Cocotte, 5QT', 'prix': '199.9', 'variantTexte': 'more colors' }
]

const foodSect = {
    'lienSect': '',
    'titreSect': 'Food',
    'lienImg': '',
    'image': 'img/i1.webp',
    'lienTag': '',
    'tag': 'COOKBOOKS',
    'lienTitre': '',
    'titre': 'Ghetto Gastro\’s \‘Black Power Kitchen\’ is a Culinary Manifesto',
    'sousTitre': 'Plus, two recipes from the new book.',
    'entete': 'Latest',
    'decorImg': 'img/decor1.svg',
    'article1': { 'lienTag': '', 'tag': 'THANKSGIVING', 'titreLien': '', 'titre': 'Your Thanksgiving Turkey Might Be Twice As Expensive This Year', 'sousTitre': 'A looming turkey shortage coupled with inflation means that an old-fashioned Thanksgiving is going to really cost you this year.' },
    'article2': { 'lienTag': '', 'tag': 'POP CULTURE', 'titreLien': '', 'titre': 'How to Make Apple Cake, As Seen on \'The Great British Bake Off\'', 'sousTitre': 'A treat from the scariest episode since Mexican Week.' },
    'article3': { 'lienTag': '', 'tag': 'ADVENT CALENDAR', 'titreLien': '', 'titre': 'It\’s Advent Calendar Season! Here Are Our 5 Favorites', 'sousTitre': 'The holidays don\’t happen for a while, but you can count down in style with these fun, festive, food-filled treats.' }
}
const homeSect = {
    'lienSect': '',
    'titreSect': 'Home52',
    'lienImg': '',
    'image': 'img/i2.webp',
    'lienTag': '',
    'tag': 'HOME DECOR',
    'lienTitre': '',
    'titre': '5 Reasons I Don\’t Want a Bigger Home',
    'sousTitre': 'And five reasons I do want more space!',
    'entete': 'Latest',
    'decorImg': 'img/decor2.svg',
    'article1': { 'lienTag': '', 'tag': 'HOLIDAY', 'titreLien': '', 'titre': '15 Scandi-Inspired Christmas Decorations for All the Holiday Hygge', 'sousTitre': 'Everything you need to create the coziest vibes at home this season.' },
    'article2': { 'lienTag': '', 'tag': 'HOME DECOR', 'titreLien': '', 'titre': '15 Stylish Desk Accessories to Make Your Office Shine', 'sousTitre': 'All that glimmers is not gold, but these office supplies are!' },
    'article3': { 'lienTag': '', 'tag': 'WHAT TO BUY', 'titreLien': '', 'titre': '13 Cozy Throw Blankets of 2022 to Ward Off Chilly Nights', 'sousTitre': 'Winter, we\’re ready for you.' }
}

const newestRecipes = {
    'titre': 'Our Newest Recipes',
    'texteCTA': 'VIEW ALL',
    'lienCTA': '',
    'recipes': [
        { 'image': 'img/k1.jpg', 'titre': '\'Maroon Shrooms\' From Ghetto Gastro', 'lien': '' },
        { 'image': 'img/k2.jpg', 'titre': 'Watermelon Granita From Ghetto Gastro', 'lien': '' },
        { 'image': 'img/k3.jpg', 'titre': 'Fig Leaf Dumplings', 'lien': '' },
        { 'image': 'img/k3.jpg', 'titre': 'Fancy Fairy Bread', 'lien': '' }

    ],
    'produits': []
}

const newestProducts = {
    'titre': 'Perfect For Your Home',
    'texteCTA': 'VIEW ALL',
    'lienCTA': '',
    'recipes': [],
    'produits': [
        { 'lien': '', 'image': 'img/l1.jpg', 'titre': 'Hand-Embroidered Holiday Napkins (Set of 2)', 'prix': '50', 'variantTexte': 'more colors' },
        { 'lien': '', 'image': 'img/l2.jpg', 'titre': 'Onyx Coffee Lab Advent Calendar', 'prix': '135', 'variantTexte': '' },
        { 'lien': '', 'image': 'img/l3.jpg', 'titre': 'Terrace Candle Holder (Set of 2)', 'prix': '50', 'variantTexte': 'more options' },
        { 'lien': '', 'image': 'img/l4.jpg', 'titre': 'Shiny-Brite Vintage-Inspired Icicle Glass Ornaments (Set of 9)', 'prix': '55', 'variantTexte': '' }
    ]
}

function FragAccueil() {
    return (
        <Fragment>
            <div className='homepage'>
                <div className='content--container homepage--hero-container'>
                    <div className="homepage--hero">
                        <div className='homepage--hero-editorial--unit'>
                            <div className="feature editorial--unit">
                                <Link className='editorial--unit-image--link lien' to=''>
                                    <div className="editorial--unit-image--container">
                                        <div className="hv1">
                                            <div className="hv1--1">
                                                <img className="image" src="img/a1.webp" alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className='feature--details editorial--unit-details'>
                                    <div className="feature--tag editorial--unit-tag"> Featured Collection </div>
                                    <h2 className="feature--headline editorial--unit-headline editorial--headline-no--sponsor">
                                        <Link className="feature--headline-link lien" to=''>It's Pie Time</Link>
                                    </h2>
                                    <p className="feature--dek editorial--unit-dek">One-of-a-kind pottery drops every month. This new batch? Pie dishes.</p>
                                </div>
                            </div>
                        </div>
                        <div className='homepage--hero-shop--units'>
                            <div className="feature shop-unit">
                                <ShopUnitCard info={info} />
                            </div>
                            <div className="feature shop-unit">
                                <ShopUnitCard info={info2} />
                            </div>
                        </div>
                        <div className='homepage--hero-recipe--units'>
                            <h3 className="homepage--hero-recipe--units-header">Recipes We're Loving</h3>
                            <div className="homepage--hero-recipe--units-features">
                                <div className="feature recipe--unit">
                                    <RecipeUnitCard info={infoR} />
                                </div>
                                <div className="feature recipe--unit">
                                    <RecipeUnitCard info={infoR2} />
                                </div>
                                <div className="feature recipe--unit">
                                    <RecipeUnitCard info={infoR3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sponsor--promo'>
                    <Link className="sponsor--promo--lien lien" to=''>
                        <div className="sponsor--promo-img">
                            <picture>
                                <source srcSet='img/d1-2.jpg' media='(min-width: 1024px)' type='image/jpg' />
                                <source srcSet='img/d1.jpg' media='(min-width: 768px)' type='image/jpg' />
                                <img className='sponsor--promo-img image' src="img/d1-1.jpg" alt="sponsor--promo" loading='lazy' />
                            </picture>

                        </div>
                    </Link>
                </div>
                <section className='newArrivals--root'>
                    <FragNewTo />
                </section>
                <section className='shop--by'>
                    <ShopByCat />
                </section>
                <div className='content--commerce'>
                    <div className="content--commerce-container">
                        <div className="content--commerce-article">
                            <div className="content--commerce-article--content">
                                <div className="content--commerce-article--image">
                                    <div className="com1">
                                        <div className="com1--1">
                                            <img className='image' src="img/g1.webp" alt="" loading='lazy' />
                                        </div>
                                    </div>
                                </div>
                                <div className="content--commerce-article--text-container">
                                    <div className="content--commerce-article--text">
                                        <h3 className="content--commerce-article--heading">Spotlight</h3>
                                        <Link className="content--commerce-article--headline-link lien" to=''>
                                            <h2 className="content--commerce-article--headline">
                                                12 Fall-Ready Recipes for the Whole Family
                                            </h2>
                                        </Link>
                                        <p className="content--commerce-article--dek content--commerce-article--dek-no--snipet">
                                            These quick 'n' easy will make kids *and* parents happy.
                                        </p>
                                        <Link className="content--commerce-article--cta lien" to=''>
                                            View Article
                                            <span className="icon--arrow icon--arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="content--commerce-article--arrow"></div>
                        </div>
                        <div className="content--commerce-products">
                            <h3 className="content--commerce-products--headline">Let's Hear It For Teamwork</h3>
                            <div className="content--commerce-products--tiles">
                                {produits.map((item, index) => (
                                    <div key={index} className="content--commerce-products--tile">
                                        <ProductCard produit={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homepage--video'>
                    <div className="homepage--video-container content--container">
                        <div className="homepage--video-content">
                            <h3 className="homepage--video-rubric">Featured Video</h3>
                            <h2 className="homepage--video-headline">Rose & Pistachio Mississippi Mud Cake </h2>
                            <p className="homepage--video-dek">This chokolate cake has hints of rosewater and is topped with ganache,
                                pistachios,  and marshmallows. Sign us up!
                            </p>
                            <Link className="homepage--video-cta btn btn--secondary lien">Get the Recipe</Link>
                            <p className="homepage--video-see--all">
                                <Link className="tag" to=''>See All Food52 Videos</Link>
                                <span className="icon--arrow icon--arrow-right"></span>
                            </p>
                        </div>
                        <div className="homepage--video-player">
                            <div className="homepage--video-mount"></div>
                        </div>
                        <p className="homepage--video-see--all homepage--video-see--all-mobile">
                            <Link className="tag" to=''>See All Food52 Videos</Link>
                            <span className="icon--arrow icon--arrow-right"></span>
                        </p>
                    </div>
                </div>
                <div className='ad--slot homepage--ad-slot'></div>
                <div className='content--container food--section'>
                    <SFContentSect donnees={foodSect} />
                </div>
                <div className='content--container'>
                    <Newest donnees={newestRecipes} />
                </div>
                <div className='content--container'></div>
                <div className='content--container home52--section'>
                    <SFContentSect donnees={homeSect} />
                </div>
                <div className='content--container'>
                    <Newest donnees={newestProducts} />
                </div>
                <div className='ad--slot homepage--ad-slot'></div>
                <div className='homepage--value-prop--mount'>
                    <div className='homepage--value-prop'>
                        <div className='homepage--value-prop--container'>
                            <p className="homepage--value-prop--statement">
                                Food52 is a gathering place for everyone who believes
                                the kitchen is at the heart of the home,
                                and food is the center of a life well-lived.
                            </p>
                            <p className="homepage--value-prop--phrase">Eat Thoughtfully, Live Joyfully</p>
                        </div>
                    </div>
                </div>
                <div className='homepage--newletter-sign--up-mount'>
                    <div className="homepage--newsletter-sign--up-unit">
                        <div className="homepage--newsletter-sign--up-unit--container">
                            <div className="mailing--list">
                                <div className="mailing--list-copy">
                                    <h4 className="mailing--list-header">Want more Food52?</h4>
                                    <p className="mailing--list-blurb">
                                        Our best tips for eating thoughtfully and living joyfully, right to your inbox.
                                    </p>
                                </div>
                                <div className="mailing--list-form--container">
                                    <NewsletterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='social--section content--container social--section-loaded'></div>
                <div className='clearfix'></div>
            </div>

        </Fragment>
    )
}

export default FragAccueil