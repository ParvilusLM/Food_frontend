import React, {Fragment} from 'react'
import './styles/FragShop.scss'
import loadable from '@loadable/component'

const CollectionCard = loadable( () => import('../composants/CollectionCard'))
const PromiseCard = loadable(() => import('../composants/PromiseCard'))
const SFBestseller = loadable(() => import('./sousFrag/SFBestseller'))
const SFSeeAllCollection = loadable(() => import('./sousFrag/SFSeeAllCollection'))
const SFTopRatedSwiper = loadable(() => import('./sousFrag/SFTopRatedSwiper'))
const ShopByCat = loadable(() => import('../composants/ShopByCat'))
const SFFiveTwo = loadable(() => import('./sousFrag/SFFiveTwo'))
const FragNewTo = loadable(() => import('./FragNewTo'))
const SFSeeCollection = loadable(() => import('./sousFrag/SFSeeCollection'))
const SFExpert = loadable(() => import('./sousFrag/SFExpert'))
const SFMaker = loadable(() => import('./sousFrag/SFMaker'))
const SFMailingListBanner = loadable(() => import('./sousFrag/SFMailingListBanner'))
const ShopGiftCard = loadable(() => import('../composants/ShopGiftCard'))


const collections = [
    {'lien':'','image':'/img/q1.webp', 'image1':'img/q1-1.webp', 'titre':'These Just In', 'sousTitre':'New Block Shop collab! Napkins & more textiles, handmade with love in India.', 'cta':'Shop Collection', 'lienCTA':''},
    {'lien':'','image':'/img/q2.webp', 'image1':'img/q2-1.webp', 'titre':'Easy as Pie', 'sousTitre':'Thanksgiving prep, minus the fuss—these helpers make it happen.', 'cta':'Shop Collection', 'lienCTA':''},
    {'lien':'','image':'/img/q3.webp', 'image1':'img/q3-1.webp', 'titre':'Cook & Go', 'sousTitre':'Sit back and relax—these pots and pans go right from oven to table.', 'cta':'Shop Collection', 'lienCTA':''}
]

const promisesCard = [
    {'image':'/img/icon1.svg', 'titre':'Kitchen & Home Products', 'sousTitre':'Handpicked gems for the kitchen and home—with plenty of new finds'},
    {'image':'/img/icon2.svg', 'titre':'Free Shipping & Easy Returns', 'sousTitre':'Free standard shipping on orders $149+ and easy-breezy returns'},
    {'image':'/img/icon3.svg', 'titre':'Dedicated Customer Care', 'sousTitre':'A team of customer care pros that\'s dedicated to making your day'}
]

const reviews = [
    {'lienImage':'','image':'/img/t2.jpg','titreImage':'Kyrgies Classic Wool House Slippers','etoiles': 5, 'commentaire':'Love the comfy slippers', 'lienCTA':''},
    {'lienImage':'','image':'/img/t2-1.jpg','titreImage':'Rare Bird Preserves Passion Fruit Curd (2-Pack)','etoiles': 5, 'commentaire':'This is amazing - perfect balance of sweet and tart! Will definitely purchase again. a little goes a long way too', 'lienCTA':''},
    {'lienImage':'','image':'/img/t2-2.jpg','titreImage':'Yamazaki Steel & Wood Rectangular Side Table','etoiles': 5, 'commentaire':'I have three of this! They have the perfect minimalist look. Very versatile.', 'lienCTA':''}
]

const giftsCard = [
    {'type': true,'image':'/img/u1.webp','lienGiftRegistry':'','lienContentCard':''},
    {'type': false,'image':'/img/u1-1.webp','lienGiftRegistry':'','lienContentCard':''}
]

function FragShop() {
    return (
        <Fragment>
            <div className="global--wrapper-fragShop">
                <section className='shop--hero-carousel'>
                    <ul className="shop--hero-list">
                        {collections.map( (item, index) => (
                            <li key={index} className='shop--hero-listItem'>
                                <CollectionCard donnees={item}/>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='shop--promise'>
                    <ul className="shop--promise-list">
                        {promisesCard.map( (item, index) => (
                            <li key={index} className='shop--promise-listItem'>
                                <PromiseCard donnees={item}/>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='shop--bestSellers shop--index-container'>
                    <SFBestseller />
                </section>
                <section className='shop--see-all-collection shop--index-container'>
                    <SFSeeAllCollection />
                </section>
                <section className='shop--top-rated'>
                    <SFTopRatedSwiper reviews={reviews} />
                </section>
                <section className='shop--by'>
                    <ShopByCat />
                </section>
                <section className='shop--Five-Two'>
                    <SFFiveTwo />
                </section>
                <section className='shop--see-collection shop--index-container'>
                    <SFSeeCollection />
                </section>
                <section className='shop--expert'>
                    <SFExpert />
                </section>
                <section className='shop--maker'>
                    <SFMaker />
                </section>
                <section className='shop--new-arrivals shop--index-container'>
                    <FragNewTo />
                </section>
                <section className='shop--mailing-list--banner'>
                    <SFMailingListBanner />
                </section>
                <section className='shop--gifts shop--index-container'>
                    <div className="shop--gift-el">
                        <ShopGiftCard donnees={giftsCard[0]}/>
                    </div>
                    <div className="shop--gift-el">
                        <ShopGiftCard donnees={giftsCard[1]}/>
                    </div>
                    
                    
                </section>
                <div className="clear--fix"></div>
            </div>
            
        </Fragment>
    )
}

export default FragShop