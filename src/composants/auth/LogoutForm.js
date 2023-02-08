import React, {Fragment} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../store/authSlice'

function LogoutButton() {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Fragment>
        <button onClick={handleLogout}>Se déconnecter</button>
    </Fragment>
    
  )
}
