import React, {Fragment, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { login, logout, authError, startLoading } from '../store/authSlice'
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import './styles/DrawerConnexion.scss';
import {Link} from 'react-router-dom'
import $ from 'jquery'


function DrawerConnexion() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


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
        <div className="wrapper--contenu">
          <div className="contenu--login">
            <div className="contenu--login-container">
              <h2 className="titre">Log In</h2>
              <p className="sous-titre">
                Hey you, Welcome back!
              </p>
              <form action="" className="formulaire">
                <div className="email--container">
                  <label htmlFor="Email" className='label'>
                    <span className="label--text label--text-email">Email</span>
                  </label>
                  <input type="email" name='email' placeholder='' id='email' className="input input--email" />
                </div>
                <div className="password--container">
                  <label htmlFor="Password" className='label'>
                    <span className="label--text label--text-password">Password</span>
                  </label>
                  <input type="password" name='password' placeholder='' id='password' className="input input--password" />
                </div>
                <Link className="lien" to='/'>Forgot Password?</Link>
                <button className="btn btn--default">LOG IN</button>
              </form>
            </div>
          </div>
          <div className="contenu--signup">
            <h2 className="titre">Create a New Account</h2>
            <div className="sous-titre">Not a member yet? Create your account here!</div>
            <button className="btn btn--default btn--inline btn--outline">Sign Up</button>
          </div>
        </div>
      </div>
    </Box>
  )

  useEffect(() => {
    $(function () {
      $('.input--email').focusin(function() {
        $('.label--text-email').addClass('label--text-onFocus');
      }).focusout(function() {
        if($('.input--email').val() === '') {
          $('.label--text-email').removeClass('label--text-onFocus');
        }
        
      });

      $('.input--password').focusin(function() {
        $('.label--text-password').addClass('label--text-onFocus');
      }).focusout(function() {
        if($('.input--password').val() === '') {
          $('.label--text-password').removeClass('label--text-onFocus');
        }
        
      });

    })
  })

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