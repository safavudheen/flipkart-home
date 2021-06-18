import React, { useEffect } from 'react'
import './App.css'
import Home from './Page/Home'
import Login from './Page/Login'
import SignIn from './Page/SignIn'
import ViewPost from './Page/ViewPost'
import Create from './Page/Create'

import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { AuthContext,FirbaseContext } from './store/context'



function App() {

  const {setUser}= useContext(AuthContext);
  const {firebase}= useContext(FirebaseContext);

firebase.auth().onAuthStatechanged((user))=>{
  setUser(user)
}

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

