import React, {Fragment} from 'react'
import './styles/FragRecipes.scss'
import {Link} from 'react-router-dom'
import loadable from '@loadable/component'

const SFRecipeSect = loadable(() => import('./sousFrag/SFRecipeSect'))
const SFResidentSect = loadable(() => import('./sousFrag/SFResidentSect'))
const SFMailingListBanner = loadable(() => import('./sousFrag/SFMailingListBanner'))
const FeaturedRecipe = loadable(() => import('../composants/FeaturedRecipe'))
const AddRecipe = loadable(() => import('../composants/AddRecipe'))
const FeaturedContent = loadable(() => import('../composants/FeaturedContent'))

 
const recipesList = [
  {'nom':'Cake','image':'img/t8','lien':''},
  {'nom':'Dinner','image':'img/t8-1.jpg','lien':''},
  {'nom':'Potato','image':'img/t8-2.jpg','lien':''},
  {'nom':'Salad','image':'img/t8-3.jpg','lien':''},
  {'nom':'Soup','image':'img/t8-4.jpg','lien':''},
  {'nom':'Pasta','image':'img/t8-5.jpg','lien':''},
  {'nom':'Salmon','image':'img/t8-6.jpg','lien':''},
  {'nom':'Shrimp','image':'img/t8-7.jpg','lien':''},
  {'nom':'Kale','image':'img/t8-8.jpg','lien':''}
]

const recipesListe1 = [
  {'image':'img/t9.jpg','lienImage':'', 'nom':'Spicy Chicken (or Turkey) Noodle Soup From Erin Jeanne McDowell','auteur':'','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-1.jpg','lienImage':'', 'nom':'Actually Good Chicken Divan With Potato Chips','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-2.jpg','lienImage':'', 'nom':'Lo Mai Gai (Sticky Rice in Lotus Leaf) From Lucas Sin','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-3.jpeg','lienImage':'', 'nom':'Super-Scripsy Chicken Smash Burgers','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5}
]

const recipeSect1 = {'titre':'Count Your Chicken','sousTitre':'From cutlets to stews, we\'ve got oh-so many options.','lienAllRecipes':'','listeRecipes': recipesListe1}

const recipesListe2 = [
  {'image':'img/t9-4.jpg','lienImage':'', 'nom':'Vegan Grasshopper','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-5.jpg','lienImage':'', 'nom':'Vegan Butternut Squash Soup','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-6.jpg','lienImage':'', 'nom':'5-Minute Tomato Sauce From Heidi Swanson','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-7.jpg','lienImage':'', 'nom':'Garbanzo Aguachile Verde','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5}
]

const recipeSect2 = {'titre':'Count Your Chicken','sousTitre':'From cutlets','lienAllRecipes':'','listeRecipes': recipesListe2}

const recipesListe3 = [
  {'image':'img/t9-8.jpg','lienImage':'', 'nom':'Pineapple -Bacon Loaf with Hot Honey Glaze','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-9.jpg','lienImage':'', 'nom':'Apple & Sharp Cheddar Crostini','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-10.jpg','lienImage':'', 'nom':'Classic Cornbread From \'Savory Baking\' ','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9-11.jpg','lienImage':'', 'nom':'Cheesy Potato Bread','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5}
]

const recipeSect3 = {'titre':'Count Your Chicken','sousTitre':'From cutlets','lienAllRecipes':'','listeRecipes': recipesListe3}

const recipesListe4 = [
  {'image':'img/t9.jpg','lienImage':'', 'nom':'Pineapple -Bacon Loaf with Hot Honey Glaze','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9.jpg','lienImage':'', 'nom':'Apple & Sharp Cheddar Crostini','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9.jpg','lienImage':'', 'nom':'Classic Cornbread From \'Savory Baking\' ','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5},
  {'image':'img/t9.jpg','lienImage':'', 'nom':'Cheesy Potato Bread','auteur':'Macintosh','lienAuteur':'', 'nbEtoiles':5}
]

const recipeSect4 = {'titre':'Count Your Chicken','sousTitre':'From cutlets','lienAllRecipes':'','listeRecipes': recipesListe3}


const residentsListe = [
  {'image':'img/t10.jpg','nom':'Erin Jeanne McDowell', 'description':'Bake It Up a Notch','lienResident':''},
  {'image':'img/t10-1.jpg','nom':'Sohla El-Waylly', 'description':'Off-Script with Solha','lienResident':''},
  {'image':'img/t10-2.png','nom':'Rick Martinez', 'description':'Sweet Heat','lienResident':''},
  {'image':'img/t10-3.jpg','nom':'Kristen Miglore', 'description':'Genius Recipes','lienResident':''}
]



const residentSect = {'titre':'Meet Our Residents', 'sousTitre':'The ultimate dream team—our residents will teach you everything ever you wanted know about dinner-wrangling, dessert-whispering, and then some.', 'lienAllResidents':'', 'listeResidents': residentsListe}

const featuredRecipe = {'tag':'AMERICAN','lienTag':'','image':'img/u3.webp', 'lienImage':'', 'entete':'AMERICAN', 'lienEntete':'', 'titre':'Doritos Furikake', 'lienTitre':'', 'sousTitre':'This crunchy, savory seasoning from Romel Bruno is good on rice bowls, salads, you name it.', 'lienCTA':'','cta':'VIEW RECIPE'}

const featuredContent = {'titre':'A Few of Our Faves','sousTitre':'Ripened on the vine, picked by our editors, and ready to eat.'}

function FragRecipes() {
  return (
    <Fragment>
      <section className="recipes--index">
        <div className="content--container">
          <h1 className="recipes--index-heading">Recipes</h1>
          <div className="recipes--index-search">
            <form action='true' className='search--form'>
              <div className="form">
                <div className="wrapper__form">
                  <div className="wrapper__input">
                    <input type="search" 
                      autoComplete="off" 
                      placeholder="Search recipes and more..." 
                      id="search-panelInput" 
                      aria-labelledby="search-panelButton"
                      className="input--search"
                      >
                      </input>
                  </div>
                  <button id="search-panelButton" 
                    className="btn--link search-button" 
                    type="button"  
                    disabled>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="recipes--index-featured--tags">
            <ul className="recipes--index-featured--tags-list">
              {recipesList.map((item, index) => (
                <li className="recipes--index-featured--tags-list-item" key={index}>
                  <Link className="recipe--link lien" to={item.lien}>
                    <div className="recipes--index-featured--tags-img">
                      <div className="d1">
                        <div className="d1--1">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                    {item.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="recipes--index-video">
          <div className="homepage--video-container content--container">
              <div className="homepage--video-content">
                  <h3 className="homepage--video-rubric">Featured Video</h3>
                  <h2 className="homepage--video-headline">Rose & Pistachio Mississippi Mud Cake </h2>
                  <p className="homepage--video-dek">This chokolate cake has hints of rosewater and is topped with ganache,
                      pistachios,  and marshmallows. Sign us up!
                  </p>
                  <Link className="homepage--video-cta btn btn--secondary lien">View the Recipe</Link>
                  <p className="homepage--video-see--all">
                      <Link className="tag" to=''>See All Food52 Videos</Link>
                      <span className="icon--arrow icon--arrow-right"></span>
                  </p>
              </div>
              <div className="homepage--video-player">
                  <div className="homepage--video-mount"></div>
              </div>
              <p className="homepage--video-see--all homepage--video-see--all-mobile">
                  <Link className="tag" to=''>See All Food52 Videos</Link>
                  <span className="icon--arrow icon--arrow-right"></span>
              </p>
          </div>
        </section>
        <div className="content--container">
          <div className="content--text-container">
            <section className="recipes--index-grid">
              <SFRecipeSect donnees={recipeSect1}/>
            </section>
            <section className="recipes--index-grid">
              <SFRecipeSect donnees={recipeSect2}/>
            </section>
            <section className="recipes--index-grid">
              <SFRecipeSect donnees={recipeSect3}/>
            </section>
            <section className="residents--root">
              <SFResidentSect donnees={residentSect} />
            </section>
          </div>
        </div>
        <div className="mailing--list-banner--root">
          <SFMailingListBanner />
        </div>
        <div className="content--container">
          <section className="tag--carousel-root"></section>
          <section className="featured--recipe-root">
            <FeaturedRecipe donnees={featuredRecipe} />
          </section>
          <div className="content--text-container">
            <section className="recipes--index-grid">

            </section>
          </div>
        </div>
        <div className="content--container">
          <div className="add--new-recipe--mount-point">
            <AddRecipe />
          </div>
          <section className='featured--content-root'>
            <FeaturedContent donnees={featuredContent} />
          </section>
        </div>
        <section className="recipes--index-shop">

        </section>
      </section>
      <div className="clearfix"></div>
    </Fragment>
  )
}

export default FragRecipes