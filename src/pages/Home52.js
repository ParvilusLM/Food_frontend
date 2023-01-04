import React,{Fragment} from 'react'
import './styles/Home52.scss'
import loadable from '@loadable/component'

const FragHome52 = loadable(() =>import('../fragments/FragHome52'))

function Home52() {
  return (
    <Fragment>
      <FragHome52 />
    </Fragment>
  )
}

export default Home52