import React, {Fragment, useState} from 'react'
import { useDispatch } from 'react-redux'
import { startLoading, authError, login } from '../../store/authSlice'

function LoginForm() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(startLoading())
    try {
      const user = await loginApi(email, password)
      dispatch(login(user))
      // Stocker le token dans le localStorage
      // localStorage.setItem('token', user.token)

    } catch (error) {
      dispatch(authError(error))
    }
  }

  return (
    <Fragment>
      <div className="loginForm">

      </div>
        <form onSubmit={handleSubmit}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
    </form>
    </Fragment>
    
  )
}
