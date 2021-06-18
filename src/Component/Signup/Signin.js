import React from 'react'
import './Signin.css'

function Signin() {
    return (
        <div>
            
          <div className="signupParentDiv">
            <img className='signupimg' width="200px" height="200px" src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>
            <form>
              <label htmlFor="fname">Username</label>
              <br />
              <input
                className="input"
                type="text"
                id="fname"
                name="name"
                defaultValue="John"
              />
              <br />
              <label htmlFor="fname">Email</label>
              <br />
              <input
                className="input"
                type="email"
                id="fname"
                name="email"
                defaultValue="John"
              />
              <br />
              <label htmlFor="lname">Phone</label>
              <br />
              <input
                className="input"
                type="number"
                id="lname"
                name="phone"
                defaultValue="Doe"
              />
              <br />
              <label htmlFor="lname">Password</label>
              <br />
              <input
                className="input"
                type="password"
                id="lname"
                name="password"
                defaultValue="Doe"
              />
              <br />
              <br />
              <button>Signup</button>
            </form>
            <a>Login</a>
          </div>
        </div>
      );
}

export default Signin
