import React from 'react'
import './Post2.css'
import {FirebaseContext} from '../../store/Context'
import {useState,useEffect,useContext} from 'react'
import {PostContext} from '../../store/PostContext'
import {useHistory} from 'react-router-dom'


function Post2() {
    const {firebase}=useContext(FirebaseContext)
    const [products,setProducts] =useState([])
    const {setPostDetails}=useContext(PostContext)
    const history =useHistory()

    useEffect(()=>{firebase.firestore().collection('products').get()
.then((snapshot)=>{ const allPost = snapshot.docs.map((product)=>{
    return{
        ...product.data(),
        id:product.id
    }
})
setProducts(allPost)
})},[])


    return (
        <div>
            <div className="post-layer">
            {products.map(product=>{
                 return<div className='post2'   
                        onClick={()=>{setPostDetails(product) 
                        history.push('/view')}}>
                    <div className='postimgclass'>
                        <img className='postimg' src={product.url}
                        />
                        <p className="category">{product.name}</p>
                        <p className="price">&#x20B9;{product.price}</p>
                        <p className='content'>{product.category}</p>
                    </div>                  
                    <div className='posttext'></div>

                </div>

})}

            </div>
            
        </div>
    )
}

export default Post2
