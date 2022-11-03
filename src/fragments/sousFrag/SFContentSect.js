import React, { Fragment } from 'react'
import './styles/SFContentSect.scss'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const ArticleSimple = loadable(() => import('../../composants/ArticleSimple'))

function SFContentSect(props) {
    return (
        <Fragment>
            <div className="content--section-wrapper">
                <Link className="lien--sect lien" to={props.donnees.lienSect}>
                    <h2 className="content--section-header">{props.donnees.titreSect}</h2>
                </Link>
                <div className="content--section-container">
                    <div className="content--section-main content--section-main--id">
                        <div className="feature content--section-main-feature">
                            <Link className="content--section-main--feature-img--link lien" to={props.donnees.lienImg}>
                                <div className="content--section-main--feature-img--container">
                                    <div className="k1">
                                        <div className="k1--1">
                                            <img className='image' src={props.donnees.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="feature--details content--section-main--feature-details">
                                <div className="feature__tag content-section-main-feature__tag">
                                    <Link className="tag lien" to={props.donnees.lienTag}>{props.donnees.tag}</Link>
                                </div>
                                <h2 className="feature__headline content-section-main-feature__headline">
                                    <Link className="feature__headline-link lien" to={props.donnees.lienTitre}>{props.donnees.titre}</Link>
                                </h2>
                                <p className="feature--dek">{props.donnees.sousTitre}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content--section-latest">
                        <div className="content--section-latest-header">
                            <span>{props.donnees.entete}</span>
                            <img src={props.donnees.decorImg} alt="" />
                        </div>
                        <div className="content--section-latest-feature">
                            <ArticleSimple info={props.donnees.article1} />
                        </div>
                        <div className="content--section-latest-feature">
                            <ArticleSimple info={props.donnees.article2} />
                        </div>
                        <div className="content--section-latest-feature">
                            <ArticleSimple info={props.donnees.article3} />
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>

    )
}

export default SFContentSect