import React, {Fragment} from 'react'
import './styles/AddRecipe.scss'
import {Link} from 'react-router-dom'

function AddRecipe() {
  return (
    <Fragment>
        <div className="add--recipe">
            <div className="add--new-recipe">
                <div className="add--new-recipe--image-col hide--on-mobile">
                   <div className="add--new-recipe--image-container img--small">
                        <div className="d1">
                            <div className="d1--1">
                                <img src="/img/u4.png" loading='lazy' alt="" className="image" />
                            </div>
                        </div>
                   </div>
                   <div className="add--new-recipe--image-container img--lg">
                        <div className="d1">
                            <div className="d1--1">
                                <img src="/img/u4-4.png" loading='lazy' alt="" className="image" />
                            </div>
                        </div>
                   </div> 
                </div>
                <div className="add--new-recipe--image-col col--visible">
                    <div className="add--new-recipe--content-container">
                        <div className="add--new-recipe--header">
                            <div className="d2">
                                <div className="d2--1">
                                    <img src="/img/entete-decor.svg" loading='lazy' alt="" className='image'/>
                                </div>
                            </div>
                        </div>
                        <p>Contribute your best original recipes
                            to the Food52 cooking community's
                            all-star collection.
                        </p>
                        <Link className="recipe--header-btn lien btn btn--default" to=''>Create A Recipe</Link>

                        <div className="add--new-recipe--image-row-inside">
                            <div className="add--new-recipe--image-container img--small">
                                <div className="d1">
                                    <div className="d1--1">
                                        <img src="/img/u4-2.jpg" loading='lazy' alt="" className="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="add--new-recipe--image-container img--lg">
                                <div className="d1">
                                    <div className="d1--1">
                                        <img src="/img/u4-3.png" loading='lazy' alt="" className="image" />
                                    </div>
                                </div>
                            </div> 
                            <div className="add--new-recipe--image-container img--small">
                                <div className="d1">
                                    <div className="d1--1">
                                        <img src="/img/u4-5.png" loading='lazy' alt="" className="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add--new-recipe--image-row">
                        <div className="add--new-recipe--image-container img--lg">
                            <div className="d1">
                                <div className="d1--1">
                                    <img src="/img/u4-2.jpg" loading='lazy' alt="" className="image" />
                                </div>
                            </div>
                        </div>
                        <div className="add--new-recipe--image-container img--lg">
                            <div className="d1">
                                <div className="d1--1">
                                    <img src="/img/u4-3.png" loading='lazy' alt="" className="image" />
                                </div>
                            </div>
                        </div> 
                        <div className="add--new-recipe--image-container img--lg">
                            <div className="d1">
                                <div className="d1--1">
                                    <img src="/img/u4-5.png" loading='lazy' alt="" className="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add--new-recipe--image-col hide--on-mobile">
                    <div className="add--new-recipe--image-container img--small">
                        <div className="d1">
                            <div className="d1--1">
                                <img src="/img/u4-1.png" loading='lazy' alt="" className="image" />
                            </div>
                        </div>
                   </div> 
                   <div className="add--new-recipe--image-container img--lg">
                        <div className="d1">
                            <div className="d1--1">
                                <img src="/img/u4-6.png" loading='lazy' alt="" className="image" />
                            </div>
                        </div>
                   </div> 
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default AddRecipe