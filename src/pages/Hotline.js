import React, {Fragment} from 'react'
import './styles/Hotline.scss'
import loadable from '@loadable/component'

const FragHotline = loadable(() => import('../fragments/FragHotline'))

function Hotline() {
  return (
    <Fragment>
      <FragHotline />
    </Fragment>

  )
}

export default Hotline