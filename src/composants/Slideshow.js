import React, {Fragment, useEffect} from 'react'
import './styles/Slideshow.scss'
import loadable from '@loadable/component'
import $ from 'jquery'

const ProductCard = loadable( () => import('../composants/ProductCard'))

function Slideshow(props) {
    let nombrePage;
    if(props.produits.length % 4 === 0){
        nombrePage = props.produits.length / 4
    } else {
        nombrePage = props.produits.length / 4 + 1
    }

    useEffect(() => {
        $('.swiper--pagination-bullet').first().addClass('swiper--pagination-bullet--active');
    },[])

    return (
        <Fragment>
            <div className="swiper--global-wrapper">
                <div className='swiper--container'>
                    <div className='swiper'>
                        <div className="swiper--wrapper">
                            {props.produits.map( (item, index) => (
                                <div key={index} className='el'>
                                    <ProductCard produit={item} />
                                </div>
                            ))}
                        </div>
                        <div className="swiper--navigation">
                            {Array(nombrePage).fill(0).map( (item, index) => (
                                <span className='swiper--pagination-bullet' key={index}></span>
                            ))}
                        </div>
                    </div>
                    <button type='button' className='bouton b__prec'></button >
                    <button type='button' className='bouton b__suiv'></button >
                </div>
            </div>
            
        </Fragment>
    )
}

export default Slideshow;
