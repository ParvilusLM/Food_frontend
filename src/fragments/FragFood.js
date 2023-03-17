import React, {Fragment} from 'react'
import './styles/FragFood.scss'
import loadable from '@loadable/component'

const EditorialUnit = loadable(() => import('../composants/EditorialUnit'))
const TopArticles = loadable(() => import('../composants/TopArticles'))
const FeaturesPod = loadable(() => import('../composants/FeaturesPod'))
const SFContentSect = loadable(() => import('../fragments/sousFrag/SFContentSect'))
const Newest = loadable(() => import('../composants/Newest')) 

const editorialUnitInfo = {'image':'/img/u5.webp', 'titre':'The 10 Most Popular Genius Recipes of 2022', 'lienArticle':'', 'tag':'Genius Recipes', 'lienTag':''}

const contentSect1 = {
    'lienSect': '',
    'titreSect': 'New & Now',
    'lienImg': '',
    'image': '/img/u6.webp',
    'lienTag': '',
    'tag': 'COOKIE',
    'lienTitre': '',
    'titre': '13 Holiday Classics Turned Into Cookies',
    'sousTitre': 'A baker\'s dozen of new-fashioned cookies, from mulled wine ka\'ak to black cake cookies, for the old-fashioned holidays.',
    'entete': 'Latest',
    'decorImg': 'img/decor1.svg',
    'articles': [
      { 'lienTag': '', 'tag': 'COOKBOOKS', 'titreLien': '', 'titre': 'Farokh Talati’s New Cookbook Is an Ode to All Things Parsi', 'sousTitre': 'We talked to the London-based chef about his Parsi heritage, cooking during lockdown, and the spice blend everyone needs in their kitchen.' },
      { 'lienTag': '', 'tag': 'FRENCH', 'titreLien': '', 'titre': 'What’s the (Cheesy, Bacony) Way to Say “Hygge” in French?', 'sousTitre': 'Tartiflette, bien sûr.' },
      { 'lienTag': '', 'tag': 'SALAD', 'titreLien': '', 'titre': '19 Hearty Winter Salads We Call Comfort Food', 'sousTitre': 'For when you\'re not feeling soups and stews.' }
    ],
    
}

const contentSect2 = {
    'lienSect': '',
    'titreSect': 'How to Cook',
    'lienImg': '',
    'image': '/img/u6-1.webp',
    'lienTag': '',
    'tag': 'CHEESE',
    'lienTitre': '',
    'titre': '5 Ways to Pair Hard Cider & Cheese, According to Marissa Mullen',
    'sousTitre': 'Follow these tips for effortless fall entertaining.',
    'entete': 'Latest',
    'decorImg': 'img/decor1.svg',
    'articles': [
      { 'lienTag': '', 'tag': 'CHEESE', 'titreLien': '', 'titre': 'A 1-2-3 Guide to Building the Perfect Charcuterie Board', 'sousTitre': 'A so-smart method for making meats and cheeses look beautiful.' },
      { 'lienTag': '', 'tag': 'CHEESE', 'titreLien': '', 'titre': 'Save Your Cheese Rinds for Soups, Stocks & More', 'sousTitre': 'Don\'t you dare throw them out!' },
      { 'lienTag': '', 'tag': 'ABSOLUTE BEST TESTS', 'titreLien': '', 'titre': 'The Absolute Best Way to Cook Butternut Squash', 'sousTitre': 'Plus, how not to take down your entire kitchen (and sanity) with a squash spill' }
    ]
}

const contentSect3 = {
    'lienSect': '',
    'titreSect': 'What to Cook',
    'lienImg': '',
    'image': '/img/u6-2.webp',
    'lienTag': '',
    'tag': 'INGREDIENTS',
    'lienTitre': '',
    'titre': '7 British Pantry Staples to Stock Up on For Your Next Bake',
    'sousTitre': 'From golden syrup to caster sugar, here\'s what you need.',
    'entete': 'Latest',
    'decorImg': 'img/decor1.svg',
    'articles': [
      { 'lienTag': '', 'tag': 'GENIUS RECIPES', 'titreLien': '', 'titre': 'The Fastest, Easiest Granola Skips One Very Key Ingredient', 'sousTitre': 'A happy holiday gift and have-around snack from vegan chef Jenné Claiborne and our ‘Simply Genius’ cookbook.' },
      { 'lienTag': '', 'tag': 'WINE', 'titreLien': '', 'titre': 'This French Region Has a Wine for Every Wintry Pairing', 'sousTitre': 'From Alsace, with love.' }
    ]
}

const recipes = {
    'titre': 'Recipes We Love',
    'texteCTA': 'BROWSE RECIPES',
    'lienCTA': '',
    'recipes': [
        { 'image': '//img/u7.webp', 'titre': 'Gin Martini', 'lien': '' },
        { 'image': '//img/u7-1.webp', 'titre': 'Margarita', 'lien': '' },
        { 'image': '//img/u7-2.webp', 'titre': 'Mojito', 'lien': '' },
        { 'image': '//img/u7-3.webp', 'titre': 'Cosmopolitan', 'lien': '' }

    ],
    'produits': [],
    'isAfficheEnRangee': false
}

function FragFood() {
  return (
    <Fragment>
      <div className="fragFood">
        <div className="content--container">
          <h1 className="blog--title">Food</h1>
          <section className="blog--hero">
            <div className="blog--latest">
              <EditorialUnit donnees={editorialUnitInfo} />
            </div>
            <div className="blog--sidebar">
              <TopArticles />
            </div>
          </section>
        </div>
        <div className="ad--slot"></div>
        <div className="features--pod">
          <FeaturesPod />
        </div>
        <section className="blog--index-section">
          <div className="content--section content--container">
            <SFContentSect donnees={contentSect1} />
          </div>
          <div className="ad--slot"></div>
          <div className="content--section content--container">
            <SFContentSect donnees={contentSect2} />
          </div>
          <div className="ad--slot"></div>
          <div className="content--section content--container">
            <SFContentSect donnees={contentSect3} />
          </div>
          <div className="content--container">
            <Newest donnees={recipes} />
          </div>
        </section>
        <div className="clearfix"></div>
      </div>
    </Fragment>
  )
}

export default FragFood