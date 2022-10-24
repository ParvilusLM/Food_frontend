import React, {Fragment} from 'react'
import './styles/SwiperCat.scss'

function SwiperCat() {
    return(
        <Fragment>
            <div className='global--wrapper'>
                <div className="cat--container">
                    <div className="swiper">
                        <div className="swiper--wrapper">
                            <div className="swiper--slide">
                                <div className="new--arrivals-cats-carousel" role='group'>
                                    <input className='sr--only' type="radio" id='all' value='all' defaultChecked/>
                                    <label className='new--arrivals-cats--label' htmlFor="all">All</label>
                                    <input className='sr--only' type="radio" id='food-pantry' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="food-pantry">Food52 Pantry</label>
                                    <input className='sr--only' type="radio" id='dansk' value='' />
                                    <label className='new--arrivals-cats--label' htmlFor="dansk">Dansk</label>
                                    <input className='sr--only' type="radio" id='five-two' value='' />
                                    <label className='new--arrivals-cats--label' htmlFor="five-two">Five Two</label>
                                    <input className='sr--only' type="radio" id='cookware' value='' />
                                    <label className='new--arrivals-cats--label' htmlFor="cookware">Cookware</label>
                                    <input className='sr--only' type="radio" id='appliances' value='' />
                                    <label className='new--arrivals-cats--label' htmlFor="appliances">Appliances</label>
                                    <input className='sr--only' type="radio" id='kitchen' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="kitchen">Kitchen</label>
                                    <input className='sr--only' type="radio" id='table' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="table">Table</label>
                                    <input className='sr--only' type="radio" id='home' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="home">Home</label>
                                    <input className='sr--only' type="radio" id='outdoor' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="outdoor">Outdoor</label>
                                    <input className='sr--only' type="radio" id='pantry' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="pantry">Pantry</label>
                                    <input className='sr--only' type="radio" id='gifts' value=''/>
                                    <label className='new--arrivals-cats--label' htmlFor="gifts">Gifts</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='button' className='swiper--button swiper--button-prev'></button>
                    <button type='button' className='swiper--button swiper--button-next'></button>
                </div>
            </div>
        </Fragment>
    )
}

export default SwiperCat