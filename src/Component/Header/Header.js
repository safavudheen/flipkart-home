import React, { useContext } from 'react'
import './Header.css'
import {FirebaseContext,AuthContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'

function Header() {
    const history = useHistory()
    const {firebase}= useContext(FirebaseContext)
    const {user}  = useContext(AuthContext)

    return (
        <div>
            <div className="header">
                <div className='space'>

                </div>
                <div className='logo'>
                <img className="img" src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>   

                </div>
                <div className='searchbar'>
                    <input className='input' type="text" placeholder='search for products,brands and more' />
                    
                   
  
                </div>
                <div className='btn'>
                { user ? '':<button className='login' onClick={()=>history.push('/login')}
                > Login</button>}
                </div>
                <div className='more' >
                    <h4>More</h4>

                </div>
                <div className='cart'>
                    <h4>Cart</h4>

                </div>
               {user && <p className='logout' onClick={()=>{
                    firebase.auth().signOut();
                    history.push('/login')}}
               > Logout </p>}
               <p className="add" onClick={()=>{
                   history.push('/create')
               }}>add</p>

            </div>
        </div>
    )
}

export default Header
