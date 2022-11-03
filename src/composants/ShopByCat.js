import React, {Fragment} from 'react'
import './styles/ShopByCat.scss'
import loadable from '@loadable/component'

const CategoryCard = loadable( () => import('./CategoryCard'))

const categories = [
  {'lien': '', 'image': 'img/f1.jpg', 'titre': 'Dansk'},
  {'lien': '', 'image': 'img/f2.jpg', 'titre': 'Five Two'},
  {'lien': '', 'image': 'img/f3.jpg', 'titre': 'Cookware'},
  {'lien': '', 'image': 'img/f4.jpg', 'titre': 'Appliances'},
  {'lien': '', 'image': 'img/f5.jpg', 'titre': 'Kitchen'},
  {'lien': '', 'image': 'img/f6.jpg', 'titre': 'Table'},
  {'lien': '', 'image': 'img/f7.jpg', 'titre': 'Home'},
  {'lien': '', 'image': 'img/f8.jpeg', 'titre': 'Outdoor'},
  {'lien': '', 'image': 'img/f9.jpg', 'titre': 'Pantry'},
  {'lien': '', 'image': 'img/f10.jpg', 'titre': 'Gifts'},
]

function ShopByCat() {
  return (
    <Fragment>
      <section className='shop--by-global--wrapper'>
        <div className='shop--by-content'>
          <h3 className="shop--by-headline">Shop By Category</h3>
          <div className="shop--by-carousel">
            <div className='sww1'>
              <div className='sww1--1'>
                <div className="swiper">
                  <div className="swiper--wrapper">
                    <div className="swiper--slide">
                      <ul className='liste'>
                        {categories.map( (item, index) => (
                            <li key={index} className='el'>
                                <CategoryCard categorie={item} />
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                    
                </div>
                <button type='button' className='swiper--button swiper--button-prev'></button>
                <button type='button' className='swiper--button swiper--button-next'></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ShopByCat