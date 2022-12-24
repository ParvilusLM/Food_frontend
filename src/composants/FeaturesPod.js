import React, {Fragment} from 'react'
import './styles/FeaturesPod.scss'
import { Link } from 'react-router-dom'

const links = [
    {'titre':'GENIUS RECIPES', 'lien':''},
    {'titre':'BIG LITTLE RECIPES', 'lien':''},
    {'titre':'MY FAMILY RECIPE', 'lien':''},
    {'titre':'MORE KETCHUP, PLEASE', 'lien':''},
    {'titre':'BURNT TOAST PODCAST', 'lien':''},
    {'titre':'TABLE FOR ONE', 'lien':''},
    {'titre':'DEAR TEST KITCHEN', 'lien':''}
]

function FeaturesPod() {
  return (
    <Fragment>
        <div className="featuresPod">
            <h2 className="features--pod-headline">Features</h2>
            <ul className="features--pod-links">
                {links.map((item, index) =>(
                    <li key={index} className="features--pod-item">
                        <Link className="features--pod-link lien">{item.titre}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </Fragment>
  )
}

export default FeaturesPod