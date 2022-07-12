import React from 'react'
import './Auth.css'
import Logo from '../../img/twitter-logo.png'

const Auth = () => {
  return (
    <div className="auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>Social Media</h1>
                    <h6>Explore the Ideas through Out the world</h6>
                </div>
            </div>
            <LogIn />
    </div>
  )
  function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="btn info-btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
  function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">


                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' 
                    className="infoInput" name='firstNmae' />
                    <input type="text" placeholder='Last Name' 
                    className="infoInput" name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder='Username' 
                    className="infoInput" name='username' />
                </div>
                <div>
                    <input type="text" placeholder='Password' 
                    className="infoInput" name='Password' />
                    <input type="text" placeholder='Confirm Password' 
                    className="infoInput" name='ConfirmPass' />
                </div>
                <div>
                    <span style={{fontSize:"12px"}} >Already have an account. Login!</span>
                </div>
                <button className="btn info-btn" type='submit' >Sign Up</button>
                

                
            </form>
        </div>

    )
  }
}

export default Auth