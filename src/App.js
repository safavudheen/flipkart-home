import React, { useContext, useEffect } from 'react'
import './App.css'
import Home from './Page/Home'
import Login from './Page/Login'
import SignIn from './Page/SignIn'
import ViewPost from './Page/ViewPost'
import Create from './Page/Create'
import Post from './store/PostContext'
import {Button} from 'react-bootstrap'

import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { AuthContext,FirebaseContext } from './store/Context'
import Post2 from './Component/Post2/Post2'


function App() {

  const {setUser}= useContext(AuthContext);
  const {firebase}= useContext(FirebaseContext);
useEffect(()=>{

firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
})
  return (
    <div>
      
      <Router>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/signin'>
        <SignIn/>
        </Route>
        <Route path='/view'>
        <ViewPost/>
        </Route>
        <Route path='/login'>
        <Login/>
        </Route>
        <Route path='/create'>
        <Create/>
        </Route>
      </Router>  
      
    </div>
  )
}

export default App

