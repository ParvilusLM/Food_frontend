import React, {Fragment} from 'react'
import './styles/TopArticles.scss'
import { Link } from 'react-router-dom'

const posts = [
    {'titre':'The 10 Most Popular Genius Recipes of 2022', 'lienArticle':''},
    {'titre':'The Biscuits on \'Ted Lasso\' Are Legendary—& We Got the Recipe', 'lienArticle':''},
    {'titre':'The One Recipe Alice Waters Can\'t Live Without', 'lienArticle':''},
    {'titre':'The World\'s Best Shortbread Is No Longer Sold—but We Got the Recipe', 'lienArticle':''},
    {'titre':'2 Creamy, Tangy Dips Straight From Hawaii (& Your Pantry)', 'lienArticle':''},
    {'titre':'Amanda Hesser\'s Beloved Peach Tart Has One Unlikely Crusader', 'lienArticle':''},
    {'titre':'Korean Fried Chicken, But Make It Crispy Chickpeas', 'lienArticle':''},
    {'titre':'A Stunning Citrus Cake in One Bowl & One-ish Step', 'lienArticle':''}
]


function TopArticles() {
  return (
    <Fragment>
        <div className="topArticles">
            <div className="topArticles--heading">Top Articles</div>
            <ol className="topArticles--posts">
                {posts.map((item, index)=> (
                    <li key={index} className="topArticles--post">
                        <Link className="lien post--link" to={item.lienArticle}>
                            {item.titre}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    </Fragment>
  )
}

export default TopArticles