import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import './styles/FragHotline.scss'
import loadable from '@loadable/component'

const HotlineWelcome = loadable(() => import('../composants/HotlineWelcome'))
const PaginationDrink52 = loadable(() => import('../composants/PaginationDrink52'))
const HotlineQuestion = loadable(() => import('../composants/HotlineQuestion'))

const questions = [
  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},

  {'lienQuestion':'',
  'titreQuestion':'',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'',
  'date':'',
  'lienTag':'',
  'tagQuestion':'',
  'nbVues':'',
  'nbCommentaires':''},
]

function FragHotline() {
  return (
    <Fragment>
      <div className="fragHotline">
        <section className="hotline--welcome">
          <HotlineWelcome />
        </section>
        <div className="content--container content--row">
          <div className="content--main">
            <section className="hotline--topics">
              <h4 className="hotline--topics-heading">Hotline Topics</h4>
              <ul className="hotline--topics-list">
                <li>
                  <Link className="lien" to=''>Baking</Link>
                </li>
                <li>
                  <Link className="lien" to=''>Cooking</Link>
                </li>
                <li>
                  <Link className="lien" to=''>Cookware & Shopping</Link>
                </li>
                <li>
                  <Link className="lien" to=''>General Discussion</Link>
                </li>
                <li>
                  <Link className="lien" to=''>Meal Planning</Link>
                </li>
                <li>
                  <Link className="lien" to=''>Recipe Questions</Link>
                </li>
                <li>
                  <Link className="lien" to=''>Recommendations</Link>
                </li>
                <li>
                  <Link className="lien" to=''>Site Feedback</Link>
                </li>
              </ul>
            </section>
            <section className="hotline--questions">
              <nav className="hotline--nav">
                <div className="hotline--search-btn">
                  <button className="btn--link search--toggle">
                    <span className="icon icon--search" aria-label='Open Search'></span>
                  </button>
                </div>
                <ul className="hotline--filters">
                  <li>
                    <Link className="hotline--filters-link hotline--filters-link--active" to=''>all</Link>
                  </li>
                  <li>
                    <Link className="hotline--filters-link" to=''>urgent</Link>
                  </li>
                  <li>
                    <Link className="hotline--filters-link" to=''>unanswer</Link>
                  </li>
                </ul>
              </nav>
              <div className="hotline--content">
                <ul></ul>
                <PaginationDrink52 />
              </div>
            </section>
          </div>
          <aside className="sidebar"></aside>
        </div>
      </div>
      <div className="clearfix"></div>
    </Fragment>
  )
}

export default FragHotline