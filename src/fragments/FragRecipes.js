import React, {Fragment} from 'react'
import './styles/FragRecipes.scss'
import {Link} from 'react-router-dom'

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

function FragRecipes() {
  return (
    <Fragment>
      <section className="recipes--index">
        <div className="content--container">
          <h1 className="recipes--index-heading">Recipes</h1>
          <div className="recipes--index-search">
          <form action='true'>
            <div className="form">
              <div className="wrapper__form">
                <div className="wrapper__input">
                  <input type="search" 
                    autoComplete="off" 
                    placeholder="Search recipes and more..." 
                    id="search-panelInput" 
                    aria-labelledby="search-panelButton"
                    className="input"
                    >
                    </input>
                </div>
                <button id="search-panelButton" 
                  className="btn--link search-button-d" 
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
        <div className="content--container"></div>
      </section>
      <div className="clearfix"></div>
    </Fragment>
  )
}

export default FragRecipes