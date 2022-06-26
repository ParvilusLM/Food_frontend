import React, {Fragment} from 'react'
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import './styles/DrawerConnexion.scss';
import {Link} from 'react-router-dom'


function DrawerConnexion() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  const containerPopoverC = () => (
    <Box
      sx={{ minWidth: '80vw',maxWidth: '85vw', height: '90vh' }}
      role="presentation"
      className='container__box'
    >
      <div>
      <button width='20px' onClick={handleClose} type='button' className="btn--link shop-nav__menu-close">Close</button>
      <div className="wrapper--contenu">
        <div className="contenu--login">
          <div className="contenu--login-container">
            <h2 className="titre">Log In</h2>
            <p className="sous-titre">
              Hey you, Welcome back!
            </p>
            <form action="
            " className="formulaire">
              <div className="email--container">
                <label htmlFor="Email" className='label'>
                  <span className="label--text">Email</span>
                </label>
                <input type="email" name='email' placeholder='' id='Email' className="input" />
              </div>
              <div className="password--container">
                <label htmlFor="Password" className='label'>
                  <span className="label--text">Email</span>
                </label>
                <input type="password" name='password' placeholder='' id='Password' className="input" />
              </div>
              <Link className="lien" to='/'>Forgot Password?</Link>
              <button className="btn">LOG IN</button>
            </form>
          </div>
        </div>
        <div className="contenu--signup">
          <h2 className="titre">Create a New Account</h2>
          <div className="sous-titre">Not a member yet? Create your account here!</div>
          <button className="btn">Sign Up</button>
        </div>
      </div>
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
          
          {containerPopoverC()}
        </Popover>
      </div>
      
    </Fragment>
  )
}

export default DrawerConnexion