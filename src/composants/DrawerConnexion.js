import React, {Fragment, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import './styles/DrawerConnexion.scss';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import loadable from '@loadable/component'

const LoginForm = loadable(() => import('./auth/LoginForm'))
const SignupForm = loadable(() => import('./auth/SignupForm'))


function DrawerConnexion() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [etapeAuth, setEtapeAuth] = useState('connexion');


  const handleClick = () => {
    let el = document.getElementById('anchor-el');
    setAnchorEl(el);
    document.querySelector('.overlay').classList.add('show-layer');
    document.querySelector('.overlay').classList.remove('hidden-layer');
  };

  const handleClose = () => {
    setAnchorEl(null);
    document.querySelector('.overlay').classList.add('hidden-layer');
    document.querySelector('.overlay').classList.remove('show-layer');

  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const containerPopoverC = (
    <Box
      role="presentation"
      className='container--box-connexion'>
      <div className='connexion--wrapper'>
        <button width='20px' onClick={handleClose} type='button' className="btn--link shop-nav__menu-close">
          <span className="close--icon"></span>
        </button>
        {etapeAuth === 'connexion' && <LoginForm setEtapeAuth={setEtapeAuth}/> }
        {etapeAuth === 'inscription' && <SignupForm setEtapeAuth={setEtapeAuth}/> }
        
      </div>
    </Box>
  )

  return (
    <Fragment>
      <div className="global--wrapper-popoverC">
        <button onClick={handleClick}>Log In/Sign Up</button>
        <span className="anchor-reference" id='anchor-el'></span>
        <div className='overlay'></div>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          className='popover'
          
        >
          {containerPopoverC}
        </Popover>

          
      </div>
    </Fragment>
  )
}

export default DrawerConnexion