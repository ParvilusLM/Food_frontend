import React, {Fragment, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { startLoading, authError, login } from '../../store/authSlice'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './styles/LoginForm.scss'
import $ from 'jquery'

function LoginForm({ setEtapeAuth }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_CONNEXION_URL}`, { email, password })
        .then(response => {
            axios.get(`${process.env.REACT_APP_INSCRIPTION_URL}/me`, {
                headers: {
                    'Authorization': `Token ${response.data.token}`
                }
                })
                .then(responseUtilisateur => {
                    // Si la réponse est réussie, mettre à jour l'état avec l'utilisateur récupéré
                    dispatch(login({'token': response.data.token, 'user' : responseUtilisateur.data}))
                })
                .catch(error => {
                    // Si la réponse est une erreur, mettre à jour l'état avec l'erreur
                    console.log('recuperation echouee')
            });
        })
        .catch(error => {console.log('Erreur lors de la connexion de l\'utilisateur.')});
    }

    const handleClick = () => {
        setEtapeAuth('inscription');
    }

    useEffect(() => {
        $(function () {
            $('.input--email').focusin(function() {
                $('.label--1').addClass('label--onFocus');
                $('.label--text-email').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--email').val() === '') {
                $('.label--1').removeClass('label--onFocus');
                $('.label--text-email').removeClass('label--text-onFocus');
                }
                
            });

            $('.input--password').focusin(function() {
                $('.label--2').addClass('label--onFocus');
                $('.label--text-password').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--password').val() === '') {
                $('.label--2').removeClass('label--onFocus');
                $('.label--text-password').removeClass('label--text-onFocus');
                }
                
            });

        })
    },[setEtapeAuth])


  return (
    <Fragment>
        <div className="loginForm">
            <div className="wrapper--contenu">
                <div className="contenu--login">
                    <div className="contenu--login-container">
                        <h2 className="titre">Log In</h2>
                        <p className="sous-titre">Hey you, Welcome back!</p>
                        <form onSubmit={handleSubmit} action="" className="formulaire">
                            <div className="email--container">
                                <label htmlFor="Email" className='label label--1'>
                                    <span className="label--text label--text-email">Email</span>
                                </label>
                                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder='' id='email' className="input input--email" />
                            </div>
                            <div className="password--container">
                                <label htmlFor="Password" className='label label--2'>
                                    <span className="label--text label--text-password">Password</span>
                                </label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' placeholder='' id='password' className="input input--password" />
                            </div>
                            <Link className="lien" to='/'>Forgot Password?</Link>
                            <button type="submit" className="btn btn--default">LOG IN</button>
                        </form>
                    </div>
                </div>
                <div className="contenu--signup">
                    <h2 className="titre">Create a New Account</h2>
                    <div className="sous-titre">Not a member yet? Create your account here!</div>
                    <button onClick={handleClick} className="btn btn--default btn--inline btn--outline">Sign Up</button>
                </div>
            </div>
        </div>
    </Fragment>
    
  )
}

export default LoginForm