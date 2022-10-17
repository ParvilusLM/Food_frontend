import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import './styles/Slideshow.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import loadable from '@loadable/component';

const ProductCard = loadable( () => import('../composants/ProductCard'))

function Slideshow(props) {
  return (
      <Fragment>
        <div className='container__slider'>
            <div className='b__prec'>
                <ArrowBackIosIcon />
            </div>
            
            <div className='slideshow'>
                {props.produits.map( (item, index) => (
                    <div key={index} className='el'>
                        <ProductCard produit={item} />
                    </div>
                ))}
            </div>
            <div className='b__suiv'>
                <ArrowForwardIosIcon />
            </div>
        </div>
      </Fragment>
  )
}

export default Slideshow;
