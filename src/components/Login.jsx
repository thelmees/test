import React, { useState } from 'react'
import './login.css'
import axios from 'axios';

function Login() {

        const [username,setUsername] =useState('')
        const [password, setPassword] = useState('');
        const [storeId, setStoreId] = useState('')
      
        const handleLogin = async () => {
          try {
            const response = await axios.post('https://api.denzo.io/api/cus/v1/login', {
              status:'200',
              username: 'username',
              password: 'password',
              storeId: 'storeId',
            }, {
              headers: { 'Accept': 'application/json' }
            });
      
            console.log('Login successful', response.data);
          } catch (error) {
            console.error('Login failed', error);
          }
        };
      
  return (
    <div className='login'>
          <div className="container mt-5">
            <h1>Login Page</h1>

        <form className='mt-2 mb-2'>
  <div className="mb-3">
    <input type="text" className="form-control" value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type='number' className="form-control" placeholder='Store Id' value={storeId} onChange={(e)=>setStoreId(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
</form>

</div>            
        </div>
  )
}

export default Login                                                       