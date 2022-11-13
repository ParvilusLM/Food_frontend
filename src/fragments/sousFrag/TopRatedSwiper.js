import React, {Fragment} from 'react'
import './styles/TopRatedSwiper.scss'
import loadable from '@loadable/component'

const CustomerReview = loadable(() => import('../../composants/CustomerReview'))


function TopRatedSwiper(props) {
    return(
        <Fragment>
            <div className="top--rated-global-wrapper">
                <div className='swiper--container'>
                    <div className='swiper'>
                        <div className="swiper--wrapper">
                            {props.reviews.map( (item, index) => (
                                <div key={index} className='el'>
                                    <CustomerReview review={item} />
                                </div>
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

export default TopRatedSwiper