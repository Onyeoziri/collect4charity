import React from 'react'
import "./login.css";


function LoginForm() {
  return (
    <form>
      <div className='form-inner'>
        <h2>Login</h2>

        <div className='form-group'>
          <label htmlFor='Uname'>Username</label>
          <input type={'text'} name='Uname' id='Uname'required/>
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type={'password'} name='password' id='password' required/>
        </div>
        
        <input type={'submit'} value='Login'/>
      </div>
    </form>
  )
}

export default LoginForm