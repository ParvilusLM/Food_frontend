import React, {Fragment, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { startLoading, authError, login } from '../../store/authSlice'
import axios from 'axios';
import './styles/SignupForm.scss'
import {Link} from 'react-router-dom'
import $ from 'jquery'




function SignupForm({ setEtapeAuth }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_INSCRIPTION_URL}`, { email, pseudo, password })
      .then(response => console.log('Utilisateur créé avec succès !'))
      .catch(error => console.log('Erreur lors de la création de l\'utilisateur.'));
  }

    const handleClick = () => {
        setEtapeAuth('connexion');
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

            $('.input--pseudo').focusin(function() {
                $('.label--2').addClass('label--onFocus');
                $('.label--text-pseudo').addClass('label--text-onFocus');
            }).focusout(function() {
                if($('.input--pseudo').val() === '') {
                $('.label--2').removeClass('label--onFocus');
                $('.label--text-pseudo').removeClass('label--text-onFocus');
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
        <div className='signupForm'>
            <div className="wrapper--contenu">
                <div className="contenu--signup">
                    <h2 className="titre">Create a New Account</h2>
                    <p className="sous-titre">Create an account for faster checkout, easier order tracking, and to save all your favorite recipes and articles</p>
                    <form onSubmit={handleSubmit} action="" className="formulaire">
                        <div className="email--container">
                            <label htmlFor="email" className='label label--1'>
                                <span className="label--text label--text-email">Email</span>
                            </label>
                            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder='' id='email' className="input input--email" />
                        </div>
                        <div className="pseudo--container">
                            <label htmlFor="pseudo" className='label label--2'>
                                <span className="label--text label--text-pseudo">Pseudo</span>
                            </label>
                            <input type='text' name='pseudo' onChange={(e) => setPseudo(e.target.value)} placeholder='' id='pseudo' className="input input--pseudo" />
                        </div>
                        <div className="password--container">
                            <label htmlFor="Password" className='label label--3'>
                                <span className="label--text label--text-password">Password</span>
                            </label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' placeholder='' id='password' className="input input--password" />
                        </div>
                        <button type="submit" className="btn btn--default">SIGN UP</button>
                    </form>
                </div>
                <div className="contenu--login">
                    <div className="contenu--login-container">
                        <h2 className="titre">Log In</h2>
                        <div className="sous-titre">Already have a Food52 account? Continue here!</div>
                        <button onClick={handleClick} className="btn btn--default btn--inline btn--outline">Log In</button>

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    
  )
}

export default SignupForm
