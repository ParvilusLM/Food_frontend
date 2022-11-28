import React, {Fragment} from 'react'
import './styles/FragRecipes.scss'

function FragRecipes() {
  return (
    <Fragment>
      <section className="recipes--index">
        <div className="content--container"></div>
        <section className="recipes--index-video"></section>
        <div className="content--container"></div>
      </section>
      <div className="clearfix"></div>
    </Fragment>
  )
}

export default FragRecipes