import React, {Fragment, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import './styles/DrawerShopCat.scss'
import $ from 'jquery'

function DrawerShopCat() {
  const [state, setState] = useState({top: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const containerDrawerSC = (anchor) => (
    <Box
      sx={{minWidth: '100%', Height: '100%' }}
      role="presentation"
      className="container__boxSC"
      backgroundColor='#57696d'
      
    >
      <div className="shop-nav__menu" id='shopMenu'>
        <button width='20px' height='25px' onClick={toggleDrawer(anchor, false)} type='button' className="close btn--link shop-nav__menu-close">
          <span className="close-icon"></span>
        </button>
        <ul className="shop-nav__menu-list">
          <li className="shop-nav__menu-heading">Shop Categories</li>
          <li className="shop-nav__menu-item">
            <Link to='' className="shop-nav__menu-link">
              <span>New Arrivals</span>
            </Link>
          </li>
          <li className="shop-nav__menu-item li--cookware">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='cookwareDropdown' to='' className="shop-nav__menu-link lien--nav-cookware--exp">
              <span>Cookware</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='cookwareDropdown'>
              <div className="shop-nav__menu-cats">
                <ul>
                  <li>
                    <Link className="lien" to='/shop/cookware'>All Cookware</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Baking & Roasting Pans</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Cookware Set</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Dutch Ovens & Stock Pots</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Frying Pans & Skillets</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Griddles & Grill Pans</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Sauce & Saute Pans</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/cookware'>Speciality Cookware</Link>
                  </li>
                </ul>
              </div>
              <div className="shop-nav__menu-brands">
                <h4 className="shop-nav__menu-brands">Shop by Brand</h4>
                <ul>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>Hestam</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>Staub</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>Le Creuset</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>de Buyer</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>QWILLING J.A. Henckels</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>Smithey Ironware Co.</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>Emile Henry</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/shop/merchants/'>DANSK</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--appliances">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='appliancesDropdown' to='' className="shop-nav__menu-link lien--nav-appliances--exp">
              <span>Appliances</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='appliancesDropdown'>
              <div className="shop-nav__menu-cats ">
                <ul>
                  <li>
                    <Link className='lien' to='/shop/appliances' >All Appliances</Link>
                  </li>
                  <li>
                    <Link className='lien' to='/shop/appliances' >Blenders & Juicers</Link>
                  </li>
                  <li>
                    <Link className='lien' to='/shop/appliances' >Espresso Machines & Coffee Makers</Link>
                    </li>
                  <li>
                    <Link className='lien' to='/shop/appliances'>Food Processors</Link>
                  </li>
                  <li>
                    <Link className='lien' to='/shop/appliances' >Mixers and Attachments</Link>
                  </li>
                  <li>
                    <Link className='lien' to='/shop/appliances' >Specialty Appliances</Link>
                  </li>
                  <li>
                    <Link className='lien' to='/shop/appliances' >Tea Kettles</Link>
                  </li>
                  <li>
                    <Link className='lien' to='/shop/appliances'  > Toasters & Toaster Ovens</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--kitchen">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='kitchenDropdown' to='' className="shop-nav__menu-link lien--nav-kitchen--exp">
              <span>Kitchen</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='kitchenDropdown'>
              <div className="shop-nav__menu-cats shop-nav__menu-cats--wide">
                <ul>
                  <li>
                    <Link className="lien" to='/'>All Kitchen</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Bakeware</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Coffee & Tea Accessories & Tools</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Cookbooks</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Countertop Organization</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Cutting Boards</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Food Storage</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Grill Tools & Accessories</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Kitchen Limens</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Kitchen Storage & Organization</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Kitchen Utensils & Tools</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Knives</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Mixing & Prep Bowls</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>On-The-GO</Link>
                  </li>
                </ul>
              </div>
              <div className="shop-nav__menu-brans">
                <h4>Shop by Brand</h4>
                <ul>
                  <li>
                    <Link className="lien" to='/'>Brabantia</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Hasegawa Ladders</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Mepal</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>OXO</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Emile Henry</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>KitchenAid</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>ZWINLLING J.A Henckels</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Miyabi</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--table">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='tableDropdown' to='' className="shop-nav__menu-link lien--nav-table--exp">
              <span>Table</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='tableDropdown'>
            <div className="shop-nav__menu-cats shop-nav__menu-cats--wide">
                <ul>
                  <li>
                    <Link className="lien" to='/'>All Table</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Barware</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Cheese Boards & Knives</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Coffee Mugs & Tea Cups</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Dinnerware</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Flatware & Serving Utensils</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Glassware</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Outdoor Dining</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Serveware</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Table Linens</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Vintage</Link>
                  </li>
                </ul>
              </div>
              <div className="shop-nav__menu-brans">
                <h4>Shop by Brand</h4>
                <ul>
                  <li>
                    <Link className="lien" to='/'>Bormioli Rocco</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Casifina</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Fortessa Tableware Solutions</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Hawkins New York</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Luminarc</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Mepra</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Mosser Glass</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Serax</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--home">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='homeDropdown' to='' className="shop-nav__menu-link lien--nav-home--exp">
              <span>Home</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='homeDropdown'>
            <div className="shop-nav__menu-cats shop-nav__menu-cats--wide">
                <ul>
                  <li>
                    <Link className="lien" to='/'>All Home</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Bags & Utility Carts</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Bath Towels & Accessories</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Bedding & Candle Holders</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Cleaning & Laundry</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Clocks & Lighting</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Games & Puzzles</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Holiday Decorations</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Home & Wall Decor</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Organization & Storage</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Pet Supplies & Bowls</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Planters</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Rugs, Mats & Runners</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Stools & Side Tables</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Vases & Decorative Objects</Link>
                  </li>
                </ul>
              </div>
              <div className="shop-nav__menu-brans">
                <h4>Shop by Brand</h4>
                <ul>
                  <li>
                    <Link className="lien" to='/'>Neat Method</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Yamazaki Home</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>MAWA</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Hawkins New York</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Uashmama</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>blomus</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Morihata International</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Sunday Citizen</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--outdoor">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='outdoorDropdown' to='' className="shop-nav__menu-link lien--nav-outdoor--exp">
              <span>Outdoor</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='outdoorDropdown'>
              <div className="shop-nav__menu-cats shop-nav__menu-cats--wide">
                  <ul>
                    <li>
                      <Link className="lien" to='/'>All Outdoor</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Beach & Picnic Accessories</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Doormats & Outdoor Rugs</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gardening Tools</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Outdoor Lighting</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Plants, Wreaths, & Garlands</Link>
                    </li>
                    
                  </ul>
              </div>
              <div className="shop-nav__menu-brans">
                <h4>Shop by Brand</h4>
                <ul>
                  <li>
                    <Link className="lien" to='/'>The Rope Co.</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Creekside Farms</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Barebones Living</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>business and pleasure</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>The Magnolia Company</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Picnic Time</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Fermob</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--pantry">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='pantryDropdown' to='' className="shop-nav__menu-link lien--nav-pantry--exp">
              <span>Pantry</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='pantryDropdown'>
              <div className="shop-nav__menu-cats shop-nav__menu-cats--wide">
                  <ul>
                    <li>
                      <Link className="lien" to='/'>All Pantry</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Candy & CHocolate</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Cheese & Charcuterie</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Coffee, Tea & Hot Chocolate</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Holiday Snacks & Treats</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Honey, Syrus & Jam</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>International Pantry</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Non-Alcoholic Drinks</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Oils & Vinegars</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Salt, Spices & Herbs</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Sauces & Condiments</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Specialty & Seaaonal Foods</Link>
                    </li>
                  </ul>
              </div>
              <div className="shop-nav__menu-brans">
                <h4>Shop by Brand</h4>
                <ul>
                  <li>
                    <Link className="lien" to='/'>Crumble</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Tartuflanghe</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>L.A. Burdick</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Jasper Hill Farm</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Stone Hollow Farmstead</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Gnista</Link>
                  </li>
                  <li>
                    <Link className="lien" to='/'>Wally and Whiz</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item li--gifts">
            <Link aria-haspopup='true' aria-expanded='false' aria-controls='giftsDropdown' to='' className="shop-nav__menu-link lien--nav-gifts--exp">
              <span>Gifts</span>
              <span className="shop-nav__menu-caret">
                <span className="icon icon__arrow"></span>
              </span>
            </Link>
            <div className="shop-nav__menu-dropdown" id='giftsDropdown'>
              <div className="shop-nav__menu-cats shop-nav__menu-cats--wide">
                  <ul>
                    <li>
                      <Link className="lien" to='/'>All Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Cooking Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Easther Decorations</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Father's Day Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Food Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gardening Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gift Cards</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gifts for the Host</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gifts from Underrepresented Makers</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gifts under $100</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Gifts under $50</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Handmade Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Mother's Day Gifts</Link>
                    </li>
                    <li>
                      <Link className="lien" to='/'>Unique Gifts</Link>
                    </li>
                  </ul>
              </div>
            </div>
          </li>
          <li className="shop-nav__menu-item">
            <Link to='' className="shop-nav__menu-link">
              <span>Dansk</span>
            </Link>
          </li>
          <li className="shop-nav__menu-item">
            <Link to='' className="shop-nav__menu-link">
              <span>FIVE.TWO</span>
            </Link>
          </li>
          <li className="shop-nav__menu-item">
            <Link to='' className="shop-nav__menu-link">
              <span>SCHOOLHOUSE</span>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );


  useEffect(() => {

    $(() => {
      $('.li--cookware').on('click', function () {
        const valAttr = $('.lien--nav-cookware--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-cookware--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-cookware--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--appliances').on('click', function () {
        const valAttr = $('.lien--nav-appliances--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-appliances--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-appliances--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--kitchen').on('click', function () {
        const valAttr = $('.lien--nav-kitchen--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-kitchen--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-kitchen--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--table').on('click', function () {
        const valAttr = $('.lien--nav-table--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-table--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-table--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--home').on('click', function () {
        const valAttr = $('.lien--nav-home--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-home--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-home--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--outdoor').on('click', function () {
        const valAttr = $('.lien--nav-outdoor--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-outdoor--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-outdoor--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--pantry').on('click', function () {
        const valAttr = $('.lien--nav-pantry--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-pantry--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-pantry--exp').attr('aria-expanded', 'true');
        }
      });

      $('.li--gifts').on('click', function () {
        const valAttr = $('.lien--nav-gifts--exp').attr('aria-expanded');
        if (valAttr === 'true') {
            $('.lien--nav-gifts--exp').attr('aria-expanded', 'false');
        } else {
            $('.lien--nav-gifts--exp').attr('aria-expanded', 'true');
        }
      });
    })

  });
  

  return (
    <Fragment>
      <div className="global__wrapper-drawerS">
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <span onClick={toggleDrawer(anchor, true)} className="icon__arrow fa-solid fa-magnifying-glass"></span>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {containerDrawerSC(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </Fragment>
  )
}

export default DrawerShopCat