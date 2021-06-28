import React, { useContext } from 'react'
import './Header.css'
import {FirebaseContext,AuthContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
function Header() {
    const history = useHistory()
    const {firebase}= useContext(FirebaseContext)
    const {user}  = useContext(AuthContext)

    return (
        <Container>
        
        <div> <Row>
                
            <div className="header">
            <Col xs=''>
                <div className='space'>

                </div>
                </Col>
               <Col xs="">
                <div className='logo'>
                <img className="img" src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>   

                </div>
                </Col>
                <Col xs='' >

              
                <div className='searchbar'>
                    <input className='input' type="text" placeholder='search for products,brands and more' />
                </div>
                </Col>
                <Col xs=''>
                <div className='btn'>
                { user ? '':<button className='login' onClick={()=>history.push('/login')}
                > Login</button>}
                </div>
                </Col>
                <Col xs=''>
                <div className='more' >
                    <h4>More</h4>

                </div>
                <div className='cart'>
                    <h4>Cart</h4>

                </div>
                </Col>
                <Col xs=''>
               {user && <p className='logout' onClick={()=>{
                    firebase.auth().signOut();
                    history.push('/login')}}
               > Logout </p>}
               </Col>
               <Col xs=''>
               <p className="add" onClick={()=>{
                   history.push('/create')
               }}>add</p>
                
                </Col>
           
        </div>

        
           
           </Row>
        </div>
        </Container>
    )
}

export default Header
