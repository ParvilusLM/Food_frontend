import React, {Fragment} from 'react'
import './styles/FragHotline.scss'
import loadable from '@loadable/component'

const HotlineWelcome = loadable(() => import('../composants/HotlineWelcome'))

function FragHotline() {
  return (
    <Fragment>
      <div className="fragHotline">
        <section className="hotline--welcome">
          <HotlineWelcome />
        </section>
        <div className="content--container content--row">
          <div className="content--main">
            <section className="hotline--topics"></section>
            <section className="hotline--questions"></section>
          </div>
          <aside className="sidebar"></aside>
        </div>
      </div>
      <div className="clearfix"></div>
    </Fragment>
  )
}

export default FragHotline