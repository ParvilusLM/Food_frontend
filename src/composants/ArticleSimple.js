import React, { Fragment } from 'react'
import './styles/ArticleSimple.scss'
import { Link } from 'react-router-dom'

function ArticleSimple(props) {
    return (
        <Fragment>
            <div className="article">
                <div className="article--tag">
                    <Link className="tag" to={props.info.lienTag}>{props.info.tag}</Link>
                </div>
                <h2 className="article--titre">
                    <Link className="article--titre-lien" to={props.info.titreLien}>{props.info.titre}</Link>
                </h2>
                <p className="article--sous-titre">{props.info.sousTitre}</p>
            </div>
        </Fragment>

    )
}

export default ArticleSimple