import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import './styles/FragHotline.scss'
import loadable from '@loadable/component'

const HotlineWelcome = loadable(() => import('../composants/HotlineWelcome'))
const PaginationDrink52 = loadable(() => import('../composants/PaginationDrink52'))
const HotlineQuestion = loadable(() => import('../composants/HotlineQuestion'))

const questions = [
  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Can you leave the bacon out to make this Vegan? Would you suggest adding anything back in to keep the flavor balance?',
  'lienRecipe':'',
  'titreRecipe':' Hunan Hand-Torn Cabbage With Bacon & Chiles From Lucas Sin',
  'lienUtilisateur':'',
  'nomUtilisateur':'MARIANNE SHIRK',
  'date':'January 3, 2023',
  'statusUpdate':'',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues': 37,
  'nbCommentaires':0},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Where’s the yeasted waffle recipe?',
  'lienRecipe':'',
  'titreRecipe':' Yeasted Waffles & Fried Chicken',
  'lienUtilisateur':'',
  'nomUtilisateur':'AM FOLEY',
  'date':'January 2, 2023',
  'statusUpdate':'Updated about 17 hours ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':46,
  'nbCommentaires':1},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'At what point do you add the 4cups of chicken broth?',
  'lienRecipe':'',
  'titreRecipe':' Spinach and Lamb Stew',
  'lienUtilisateur':'',
  'nomUtilisateur':'MAEVANOFFRDH@YAHOO.COM',
  'date':'January 2, 2023',
  'statusUpdate':'Updated 1 day ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':55,
  'nbCommentaires':1},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'Is it possible to freeze this dessert to be eaten at a later date? If so, is there any special instructions I should know so it turns out good still?',
  'lienRecipe':'',
  'titreRecipe':'Éclair Cake',
  'lienUtilisateur':'',
  'nomUtilisateur':'YVERIC',
  'date':'January 1, 2023',
  'statusUpdate':'Updated 1 day ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':61,
  'nbCommentaires':3},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Can I make the frosting a day ahead of time and put it in the fridge?',
  'lienRecipe':'',
  'titreRecipe':'Citrus Cake From Yasmin Khan',
  'lienUtilisateur':'',
  'nomUtilisateur':'CINDY',
  'date':'January 1, 2023',
  'statusUpdate':'Updated about 7 hours ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':46,
  'nbCommentaires':1},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'How to get a partner to start using a cooking books? Thank you.',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'IRINA',
  'date':'January 1, 2023',
  'statusUpdate':'Updated 1 day ago',
  'lienTag':'',
  'tagQuestion':'COOKING',
  'nbVues':89,
  'nbCommentaires':1},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'How would recipe this do as muffins?',
  'lienRecipe':'',
  'titreRecipe':'Dark Chocolate-Olive Oil Skillet Banana Bread',
  'lienUtilisateur':'',
  'nomUtilisateur':'KEN KIYAMA',
  'date':'December 31, 2022',
  'statusUpdate':'Updated 3 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':75,
  'nbCommentaires':3},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'2 separate beef wellingtons or 1 big kne',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'DIANAD1M!',
  'date':'December 31, 2022',
  'statusUpdate':'Updated 3 days ago',
  'lienTag':'',
  'tagQuestion':'COOKING',
  'nbVues':82,
  'nbCommentaires':4},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'If using canned tomatoes, do you add to the raw peppers & onions at the beginning, or part way through the cooking of the onions & peppers?',
  'lienRecipe':'',
  'titreRecipe':'Peperonata (Red Pepper Stew)',
  'lienUtilisateur':'',
  'nomUtilisateur':'ERINMCCASLAND',
  'date':'December 31, 2022',
  'statusUpdate':'Updated 3 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':68,
  'nbCommentaires':2},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'How best to store after cooking for next day? Fridge',
  'lienRecipe':'',
  'titreRecipe':' Torta Caprese (Chocolate and Almond Flourless Cake)',
  'lienUtilisateur':'',
  'nomUtilisateur':'SONJI_T',
  'date':'December 30, 2022',
  'statusUpdate':'Updated 4 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':75,
  'nbCommentaires':1},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Any flour suggestions to make this gluten free?',
  'lienRecipe':'',
  'titreRecipe':'Citrus Cake From Yasmin Khan',
  'lienUtilisateur':'',
  'nomUtilisateur':'CHRISTINE LUNDBERG DRABEK',
  'date':'December 30, 2022',
  'statusUpdate':'Updated 3 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':89,
  'nbCommentaires':2},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Can you use an immersion blender right in pot?',
  'lienRecipe':'',
  'titreRecipe':'Butternut Squash Soup',
  'lienUtilisateur':'',
  'nomUtilisateur':'JR',
  'date':'December 29, 2022',
  'statusUpdate':'Updated 4 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':103,
  'nbCommentaires':4},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Staub Animal knobs, will it fit?',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'JONNYCAKES',
  'date':'December 29, 2022',
  'statusUpdate':'',
  'lienTag':'',
  'tagQuestion':'COOKWARE & SHOPPING',
  'nbVues':61,
  'nbCommentaires':0},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'Substitute for Anchovy Paste in Recipes',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'VONNSKY',
  'date':'December 28, 2022',
  'statusUpdate':'Updated 5 days ago',
  'lienTag':'',
  'tagQuestion':'COOKING',
  'nbVues':159,
  'nbCommentaires':5},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Can I make this dairy free the crispy rice',
  'lienRecipe':'',
  'titreRecipe':' Persian-ish Rice From Samin Nosrat',
  'lienUtilisateur':'',
  'nomUtilisateur':'I LOVE DANIEL',
  'date':'December 27, 2022',
  'statusUpdate':'Updated 7 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':68,
  'nbCommentaires':1},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'I\'ll repeat the unanswered question from buntenMarch 13, 2019 What size scoop do you recommend?',
  'lienRecipe':'',
  'titreRecipe':'Ovenly\'s Secretly Vegan Salted Chocolate Chip Cookies',
  'lienUtilisateur':'',
  'nomUtilisateur':'MLOUISE',
  'date':'December 27, 2022',
  'statusUpdate':'Updated 7 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':108,
  'nbCommentaires':1},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'I would like to substitute, homemade cranberry juice for the pomegranate cranberry juice in this recipe.',
  'lienRecipe':'',
  'titreRecipe':'Crimson Bulleit Punch',
  'lienUtilisateur':'',
  'nomUtilisateur':'DICKENSTHEDOG',
  'date':'December 26, 2022',
  'statusUpdate':'Updated 8 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':138,
  'nbCommentaires':2},

  {'questionUrgent':true,
  'lienQuestion':'',
  'titreQuestion':'suggestions for lunch sandwiches made from leftover brownsugar/maple/clove glazed ham',
  'lienRecipe':'',
  'titreRecipe':'',
  'lienUtilisateur':'',
  'nomUtilisateur':'CHRISSY',
  'date':'December 27, 2022',
  'statusUpdate':'Updated 2 days ago',
  'lienTag':'',
  'tagQuestion':'RECOMMENDATIONS',
  'nbVues':108,
  'nbCommentaires':3},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Does anyone know how to thicken this up so it is not so runny?',
  'lienRecipe':'',
  'titreRecipe':'Cranberry, Tangerine, and Crystallized Ginger Relish',
  'lienUtilisateur':'',
  'nomUtilisateur':'LYNN',
  'date':'December 26, 2022',
  'statusUpdate':'Updated 6 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':82,
  'nbCommentaires':4},

  {'questionUrgent':false,
  'lienQuestion':'',
  'titreQuestion':'Putting Whole Cardamom pods in cake',
  'lienRecipe':'',
  'titreRecipe':'Orange-Cardamom Olive Oil Cake',
  'lienUtilisateur':'',
  'nomUtilisateur':'BN',
  'date':'December 26, 2022',
  'statusUpdate':'Updated 8 days ago',
  'lienTag':'',
  'tagQuestion':'RECIPE QUESTIONS',
  'nbVues':138,
  'nbCommentaires':2},
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
                <ul>
                  {questions.map((item, index) => (
                    <li className="question--el">
                      <HotlineQuestion donnees={item} />
                    </li>
                  ))}
                </ul>
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