import React from 'react'
import './Header.css'
function Header() {
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
                <button className='login'> Login</button>
                </div>
                <div className='more' >
                    <h4>More</h4>

                </div>
                <div className='cart'>
                    <h4>Cart</h4>

                </div>

            </div>
        </div>
    )
}

export default Header
