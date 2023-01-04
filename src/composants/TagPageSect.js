import React, {Fragment} from 'react'
import loadable from '@loadable/component'
import './styles/TagPageSect.scss'

const TagPost = loadable(() => import('../composants/TagPost'))
const PaginationDrink52 = loadable(() => import('../composants/PaginationDrink52'))
const TopArticles = loadable(() => import('../composants/TopArticles'))

function TagPageSect(props) {
  return (
    <Fragment>
        <div className="fragPageSect">
            <div className="content--row">
                <div className="content--main">
                    {props.donnees.map((item, index) => (
                        <div key={index} className="tag--post">
                            <TagPost donnees={item} />
                        </div>
                    ))}

                    <p className="pagination--text">
                        Showing 14 of 117 results
                    </p>

                    <PaginationDrink52 /> 
                </div>

                <aside className='sidebar sidebar--sticky'>
                    <div className="ad--slot ad--slot-mobile"></div>
                    <div className="ad--slot ad--slot-aside">
                        <img src="img/pub.jpg" alt="" className='image'/>
                    </div>
                    <TopArticles />
                    <div className="ad--slot ad--slot-aside">
                        <img src="img/pub2.gif" alt="" className='image'/>
                    </div>
                    <div className="ad--slot ad--slot-mobile"></div>
                </aside>
            </div>
        </div>
    </Fragment>
  )
}

export default TagPageSect