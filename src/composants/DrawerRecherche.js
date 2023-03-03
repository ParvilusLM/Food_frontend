import React, {Fragment} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './styles/DrawerRecherche.scss'
import { Link } from 'react-router-dom';

function DrawerRecherche() {
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const containerDrawerS = (anchor) => (
    <Box
      
      role="presentation"
      className='container__boxS'
      
    >
      <div className="panel--search">
        <button onClick={toggleDrawer(anchor, false)} className="close">
          <span className="close-icon"></span>
        </button>
        <h4 className="search-heading" id='searchPanelHeading'>Search</h4>
        <form action='true'>
          <div className="form">
            <div className="wrapper__form">
              <div className="wrapper__input">
                <input type="search" 
                  autoComplete="off" 
                  placeholder="Search recipes, shop, articles, hotline…" 
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
        <ul className="search-panel__results">
          <li>
            <h5 className="search-panel__results-header">Popular Recipes</h5>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <div className="search-panel__result-img">
                <div className="wrapper-img-1">
                  <div className="wrapper-img-2">
                    <img src="img-downl/insearch_img1.jpg" loading='lazy' alt="" className="image" />
                  </div>
                </div>
              </div>
              <div className="search-panel__result-body">
                <span>Porcini and Rosemary Crusted Beef Tenderloin with Port Wine Sauce</span>
              </div>
            </Link>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <div className="search-panel__result-img">
                <div className="wrapper-img-1">
                  <div className="wrapper-img-2">
                    <img src="img-downl/insearch_img2.jpg" loading='lazy' alt="" className="image" />
                  </div>
                </div>
              </div>
              <div className="search-panel__result-body">
                <span>Grown-Up Birthday Cake</span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="search-panel__results">
          <li>
            <h5 className="search-panel__results-header">Favorites in Shop</h5>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <div className="search-panel__result-img">
                <div className="wrapper-img-1">
                  <div className="wrapper-img-2">
                    <img src="img-downl/insearch_img3.jpg" loading='lazy' alt="" className="image" />
                  </div>
                </div>
              </div>
              <div className="search-panel__result-body">
                <span>Raisenne Dough Riser</span>
              </div>
            </Link>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <div className="search-panel__result-img">
                <div className="wrapper-img-1">
                  <div className="wrapper-img-2">
                    <img src="img-downl/insearch_img4.jpg" loading='lazy' alt="" className="image" />
                  </div>
                </div>
              </div>
              <div className="search-panel__result-body">
                <span>Mosser Glass Bathing Beauty Dish</span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="search-panel__results">
          <li>
            <h5 className="search-panel__results-header">What We're into Right Now</h5>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <button type="button" className="btn--link" >
                <span>Pasta</span>
              </button>
            </Link>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <button type="button" className="btn--link" >
                <span>Salad</span>
              </button>
            </Link>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <button type="button" className="btn--link" >
                <span>Chicken</span>
              </button>
            </Link>
          </li>
          <li className="search-panel__results-item">
            <Link to='/' className="search-panel__result">
              <button type="button" className="btn--link" >
                <span>Slow Cooker</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  )

  return (
    <Fragment>
      <div className="global__wrapper-drawerS">
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <span onClick={toggleDrawer(anchor, true)} className="fa-solid fa-magnifying-glass"></span>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {containerDrawerS(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </Fragment>
  )
}

export default DrawerRecherche