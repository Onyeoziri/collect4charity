import React, {useState, useRef, useEffect, na} from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css";


function LoginForm() {

  return ( 
    <form>

      <div class="main">
        <p class="sign" align="center">Sign in</p>
        <form class="form1">
          <input class="un " type="text" align="center" placeholder="Username" required/>
          <input class="pass" type="password" align="center" placeholder="Password" required/>
          <button class="submit" align="center">Sign in</button>
          <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
        </form>
      </div>
    </form>
  )
}

export default LoginForm

