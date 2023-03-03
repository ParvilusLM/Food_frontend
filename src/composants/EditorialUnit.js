import React, {Fragment} from 'react'
import './styles/EditorialUnit.scss'
import { Link } from 'react-router-dom'


function EditorialUnit(props) {
  return (
    <Fragment>
        <div className="editorialUnit">
            <Link className="editorialUnit--link lien" to={props.donnees.lienArticle}>
                <div className="editorialUnit--img-container">
                    <div className="d1">
                        <div className="d1--1">
                            <img src={props.donnees.image} loading='lazy' alt="" className='image'/>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="editorialUnit--details">
                <div className="editorialUnit--details-tag">
                    <Link className="tag--link lien" to={props.donnees.lienTag}>{props.donnees.tag}</Link>
                </div>
                <h2 className="editorialUnit--headline">
                    <Link className="headline--link lien" to={props.donnees.lienArticle}>{props.donnees.titre}</Link>
                </h2>
            </div>
        </div>
    </Fragment>
  )
}

export default EditorialUnit