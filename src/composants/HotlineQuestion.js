import React, {Fragment} from 'react'
import './styles/HotlineQuestion.scss'
import { Link } from 'react-router-dom'

function HotlineQuestion(props) {
  return (
    <Fragment>
        <div className="hotlineQuestion">
            <h3 className="hotline--q-heading">
                <Link className="lien lien--question" to={props.donnees.lienQuestion}>
                    {props.donnees.questionUrgent && <span className='hotline--urgent'></span>}
                    {props.donnees.titreQuestion}
                </Link>
            </h3>
            { props.donnees.titreRecipe && 
                <div className="hotline--q-recipe--details">
                    <span>Recipe Question For:</span>
                    <Link className="lien lien--titre-recipe" to={props.donnees.lienRecipe}>{props.donnees.titreRecipe}</Link>
                </div>
            }
            
            <ul className="hotline--q-user hotline--q-meta--list">
                <li>
                    <span>Posted by:</span>
                    <Link className="lien lien--utilisateur" to={props.donnees.lienUtilisateur}>{props.donnees.nomUtilisateur}</Link>
                </li>
                <li>{props.donnees.date}</li>
                <li className="hotline--q-updated">
                    <span>{props.donnees.statusUpdate}</span>
                </li>
            </ul>
            <div className="hotline--q-meta">
                <ul className='tag--list'>
                    <li>
                        <Link className="lien lien--tag" to={props.donnees.lienTag}>{props.donnees.tagQuestion}</Link>
                    </li>
                </ul>
                <ul className='hotline--q-counts hotline--q-meta--list'>
                    <li>{props.donnees.nbVues} view(s)</li>
                    <li>
                        <Link className="lien hotline--q-first" to={props.donnees.lienQuestion}>
                            {props.donnees.nbCommentaires > 0 && <span>{props.donnees.nbCommentaires} Comment(s)</span>}
                            {props.donnees.nbCommentaires === 0 && <span>Be the first to comment</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </Fragment>
  )
}

export default HotlineQuestion