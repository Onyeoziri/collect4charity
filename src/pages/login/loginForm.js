import React from 'react'
import "./login.css";


function LoginForm() {
  return (
    <form>

      <div class="main">
        <p class="sign" align="center">Sign in</p>
        <form class="form1">
          <input class="un " type="text" align="center" placeholder="Username" />
          <input class="pass" type="password" align="center" placeholder="Password" />
          <a class="submit" align="center">Sign in</a>
          <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
        </form>
      </div>
    </form>
  )
}

export default LoginForm

