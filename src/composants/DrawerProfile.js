import React, {Fragment, useState, useEffect} from 'react'
import './styles/DrawerProfile.scss'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function DrawerProfile() {
    const [state, setState] = useState({right: false})
    const user = useSelector(state => state.auth.user)

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const containerDrawerProfile = (anchor) => (
    <Box
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      className='container--box-Profile'
      
    >
      <div className="panel--user">
        <button onClick={toggleDrawer(anchor, false)} className="close">
            <span className="close-icon"></span>
        </button>
        <div className="panel--user-content">
            {user !== null && <h4 className="panel--user-heading">{user.pseudo}</h4>}
            <div className="sect--profile-avatar">
                <img src="/img/default-avatar.png" alt="" className="image" />
            </div>
        </div>
      </div>
    </Box>
  )

  return (
    <Fragment>
        <div className="drawerProfile">
            {['right'].map((anchor) => (
                <div key={anchor}>
                    <span onClick={toggleDrawer(anchor, true)} className="fa-solid fa-user"></span>
                    <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    className='drawerProfile'
                    >
                    {containerDrawerProfile(anchor)}
                    </Drawer>
                </div>
            ))}
        </div>
    </Fragment>
  )
}

export default DrawerProfile