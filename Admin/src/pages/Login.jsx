import React , { useState } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { useContext } from 'react'
import axios from 'axios'

const Login = () => {
    
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAToken,backendUrl} = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try{
      if (state === 'Admin') {
        const {data} = await axios.post(`${backendUrl}/admin/login`,{email,password})
        if (data.success) {
          localStorage.setItem('aToken',data.token)
          setAToken(data.token)
        }
      }else{
        
      }

    }catch (error) {
    }
  }




  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <p><span> {state} </span> Login</p>

        <div>
          <p >Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email"  required/>
        </div>

        <div >
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"  required/>
        </div>

        
          <button type="submit">Login</button>
          {
            state === 'Admin' ? (
              <p>Doctor Login <span onClick={() => setState('Doctor')}>Click Here</span></p>
            ) : (
              <p>Admin Login <span onClick={() => setState('Admin')}>Click Here</span></p>)
          }
       
      </div>
    </form>
  )
}

export default Login
