import React from 'react'
import './Login.css'
import { FirebaseContext } from '../../store/Context';
import {useContext,useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const {firebase}=useContext(FirebaseContext);

const history =useHistory()

const handleLogin=(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    history.push('/')
  })}
    return (
        <div className="background">
          <div className="loginParentDiv">
              <div className="leftlogin">
                  <span></span>
                  <div></div>
                  <p className='textl' >Login</p>
                  <br/>
                  <div></div>
                  <h4 className='text2'>Get access to Your Orders,</h4>
                  <br />
                  <span className='text3'>Wishlist and Recommendations</span>
                  <br />
                  <div></div>
            <img className='imglogin' width="200px" height="200px" src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'></img>
            </div>
            <form onSubmit={handleLogin} className='formclass' >
              <label htmlFor="fname" >Enter Email/Mobile Number</label>
              <br />
              <input
                className="input"
                type="email"
                id="fname"
                name="email"
                defaultValue="John"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <br />
              <br />
              <button>Login</button>
              <div className='signup-class' onClick={(e)=>{history.push('/signin')}}>
              <a className="signup">Signup</a>
              </div>
            </form>
            
          </div>
        </div>


      );
}

export default Login
