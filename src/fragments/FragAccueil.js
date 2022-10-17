import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'

const ShopUnitCard = loadable(() => import('../composants/ShopUnitCard'))
const RecipeUnitCard = loadable(() => import('../composants/RecipeUnitCard'))
const FragNewTo = loadable(() => import('./FragNewTo'))

const info = {'image': 'img/b1.webp', 'titre': 'Oven Ready', 'texte': 'These lovelies will protect your wrists through all that pie baking.', 'lien': ''};
const info2 = {'image': 'img/b2.webp', 'titre': 'You\'re Golden', 'texte': 'From our very own line: pastry flour & chocolate for best-ever bakes.', 'lien': ''};

const infoR = {'image': 'img/c1.webp', 'titre': 'Sheet-Pan Apple Crisp', 'lien': ''};
const infoR2 = {'image': 'img/c2.webp', 'titre': 'Toasty Cinnamon Meringue Cake', 'lien': ''};
const infoR3 = {'image': 'img/c3.webp', 'titre': 'Pumpkin Banana Bread With Toasty Pecans', 'lien': ''};


function FragAccueil() {
  return (
    <Fragment>
      <div className='content--container homepage--hero-container'>
        <div className="homepage--hero">
          <div className='homepage--hero-editorial--unit'>
            <div className="feature editorial--unit">
              <Link className='editorial--unit-image--link' to=''>
                <img src="img/a1.webp" alt="" />
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
            <img className='sponsor--promo--img' src="img/d1-2.jpg" alt="sponsor--promo" />
          </div>
        </Link>
      </div>
      <section className='newArrivals--root'>
        <FragNewTo />
      </section>
      <section className='shop--by'>
      </section>
      <div className='content--commerce'></div>
      <div className='homepage--video'></div>
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