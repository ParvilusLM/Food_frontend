import React, {Fragment} from 'react'
import './styles/TagPost.scss'
import { Link } from 'react-router-dom'

function TagPost(props) {
  return (
    <Fragment>
        <div className="tagPost">
            <Link className="tagPost--image-link lien" to={props.donnees.lienPost}>
              <span className="collection--widget-root tagPost--save-flag">
                <div className="collection--widget">
                  <button className="btn-pill collection--save-caret collection--save">
                    <svg className="icon collection--save-icon">
                      <path fill="transparent" stroke="#57696d" d="M12.5,16.5l-6-2.8l-6,2.8v-16h12V16.5z"></path>
                    </svg>
                    Save
                  </button>
                </div>
              </span>
              
              <div className="d1">
                <div className="d1--1">
                  <img src={props.donnees.image} alt="" className='image'/>
                </div>
              </div>
            </Link>

            <div className="tagPost--body">
              <Link className="lien tag tagPost--tag-link lien" to={props.donnees.lienTag}>{props.donnees.tag}</Link>
              <h3 className="tagPost--header">
                <Link className="tagPost--header-link lien" to={props.donnees.lienPost}>{props.donnees.titre}</Link>
              </h3>
              <p className="dek">
                <Link className="lien dek--link" to={props.donnees.lienPost}>{props.donnees.sousTitre}</Link>
              </p>
              <div className="tagPost--meta meta">
                <div className="tagPost--meta-author">
                  <span className="meta--by">by:&nbsp;</span>
                  <Link className="lien meta--caps-link" to={props.donnees.lienUtilisateur}>{props.donnees.auteur}</Link>
                </div>
                <span className="meta--date">{props.donnees.date}</span>
              </div>

              <span className="collection--widget-root tagPost--save-pill">
                <div className="collection--widget">
                  <button className="btn-pill collection--save-caret collection--save">
                    <svg className="icon collection--save-icon">
                      <path fill="transparent" stroke="#57696d" d="M12.5,16.5l-6-2.8l-6,2.8v-16h12V16.5z"></path>
                    </svg>
                    Save
                  </button>
                </div>
              </span>
            </div>
        </div>
    </Fragment>
  )
}

export default TagPost