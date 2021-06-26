import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './firebase/Config'
import Context from './store/Context'
import {FirebaseContext} from './store/Context'
import Post from './store/PostContext'

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
    <Context>
    <Post>
    <App />
    </Post>
    </Context>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);
