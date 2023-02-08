import React, {Fragment} from 'react'
 import { useDispatch } from 'react-redux'
import { startLoading, authError, login } from '../../store/authSlice'

function SignupForm() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(startLoading())
    try {
      const user = await signupApi(username, email, password)
      dispatch(login(user))
    } catch (error) {
      dispatch(authError(error))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="username" onChange={(e) => setUsername(e.target.value)} />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">S'inscrire</button>
    </form>
  )
}

export default SignupForm
