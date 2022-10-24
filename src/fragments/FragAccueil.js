import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'
import './styles/FragAccueil.scss'

const ShopUnitCard = loadable(() => import('../composants/ShopUnitCard'))
const RecipeUnitCard = loadable(() => import('../composants/RecipeUnitCard'))
const FragNewTo = loadable(() => import('./FragNewTo'))
const ShopByCat = loadable( () => import('../composants/ShopByCat'))
const ProductCard = loadable( () => import('../composants/ProductCard'))

const info = {'image': 'img/b1.webp', 'titre': 'Oven Ready', 'texte': 'These lovelies will protect your wrists through all that pie baking.', 'lien': ''};
const info2 = {'image': 'img/b2.webp', 'titre': 'You\'re Golden', 'texte': 'From our very own line: pastry flour & chocolate for best-ever bakes.', 'lien': ''};

const infoR = {'image': 'img/c1.webp', 'titre': 'Sheet-Pan Apple Crisp', 'lien': ''};
const infoR2 = {'image': 'img/c2.webp', 'titre': 'Toasty Cinnamon Meringue Cake', 'lien': ''};
const infoR3 = {'image': 'img/c3.webp', 'titre': 'Pumpkin Banana Bread With Toasty Pecans', 'lien': ''};


const produits = [
  {'lien': '', 'image': 'img/h1.jpg','titre': 'Food52 Gingham Linen Pot Holders (Set of 2)', 'prix': '35', 'variantTexte': 'more colors'},
  {'lien': '', 'image': 'img/h2.jpg','titre': 'Dansk Købenstyle Baker ', 'prix': '135', 'variantTexte': 'more colors'},
  {'lien': '', 'image': 'img/h3.jpg','titre': 'Recycled Clay Stacked Organic Dinnerware', 'prix': '90', 'variantTexte': 'more options'},
  {'lien': '', 'image': 'img/h4.jpg','titre': 'Staub Cast Iron Tall Cocotte, 5QT', 'prix': '199.9', 'variantTexte': 'more colors'}
]

function FragAccueil() {
  return (
    <Fragment>
      <div className='content--container homepage--hero-container'>
        <div className="homepage--hero">
          <div className='homepage--hero-editorial--unit'>
            <div className="feature editorial--unit">
              <Link className='editorial--unit-image--link' to=''>
                <img className="image" src="img/a1.webp" alt="" />
              </Link>
              <div className='feature--details editorial--unit-details'>
                <div className="feature--tag editorial--unit-tag"> Featured Collection </div>
                <h2 className="feature--headline editorial--unit-headline editorial--headline-no--sponsor">
                  <Link className="feature--headline-link" to=''>It's Pie Time</Link>
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
                <RecipeUnitCard infoR={infoR} />
              </div>
              <div className="feature recipe--unit">
                <RecipeUnitCard infoR={infoR2} />
              </div>
              <div className="feature recipe--unit">
                <RecipeUnitCard infoR={infoR3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sponsor--promo'>
        <Link className="sponsor--promo--lien" to=''>
          <div className="sponsor--promo-img">
            <img className='sponsor--promo--img image' src="img/d1-2.jpg" alt="sponsor--promo" />
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
                    <img src="img/g1.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="content--commerce-article--text-container">
                <div className="content--commerce-article--text">
                  <h3 className="content--commerce-article--heading">Spotlight</h3>
                  <Link className="content--commerce-article--headline-link" to=''>
                    <h2 class="content--commerce-article--headline">
                      12 Fall-Ready Recipes for the Whole Family
                    </h2>
                  </Link>
                  <p className="content--commerce-article--dek">
                    These quick 'n' easy will make kids *and* parents happy. 
                  </p>
                  <Link className="content--commerce-article--cta" to=''>
                    View Article
                    <span className="icon--arrow icon--arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="content--commerce-article--arrow"></div>
          </div>
          <div className="content--commerce-products">
            <h3 className="content--commerce-products--headline">Let's Hear For Teamwork</h3>
            <div className="content--commerce-products--tiles">
                {produits.map( (item, index) => (
                    <div key={index} className="content--commerce-products--tile">
                        <ProductCard produit={item} />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='homepage--video'>
        <div className="homepage--video-container">
          <div className="homepage--video-content">
            <h3 className="homepage--video-rubric">Featured Video</h3>
            <h2 className="homepage--video-headline">Rose & Pistachio Mississippi Mud Cake </h2>
            <p className="homepage--video-dek">This chokolate cake has hints of rosewater and is topped with ganache,
              pistachios,  and marshmallows. Sign us up!
            </p>
            <Link className="homepage--video-cta">Get the Recipe</Link>
            <p className="homepage--video-see--all">
              <Link className="tag" to=''>See All Food52 Videos</Link>
              <span className="icon--arrow icon--arrow-right"></span>
            </p>
          </div>
          <div className="homepage--video-player">
            <div className="homepage--video-mount">
              <video src=""></video>
            </div>
          </div>
          <p className="homepage--video-see--al"></p>
        </div>
      </div>
      <div className='ad--slot homepage--ad-slot'></div>
      <div className='content--container food--section'></div>
      <div className='content--container'></div>
      <div className='content--container'></div>
      <div className='content--container home52--section'></div>
      <div className='content--container'></div>
      <div className='ad--slot homepage--ad-slot'></div>
      <div className=''></div>
      <div className=''></div>
      <div className='social--section content--container social--section-loaded'></div>
      <div className='clearfix'></div>
    </Fragment>
  )
}

export default FragAccueil