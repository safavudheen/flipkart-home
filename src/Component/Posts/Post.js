import React, { useEffect, useState } from 'react'
import './Post.css'
import { FirebaseContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext'
import { useContext } from 'react'
import {useHistory} from 'react-router-dom'
function Post() {
    const {setPostDetails}=useContext(PostContext)
    const [products,setProducts]=useState([])

    const {firebase} =useContext(FirebaseContext)
    const history =useHistory()
useEffect(()=>{firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost=snapshot.docs.map((product)=>
    {
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
               {products.map(product=>{return <div className='post2' onClick={()=>{setPostDetails(product)
            history.push('/view')}}>
                    <div className='postimgclass'>
                        <img className='postimg' src={product.url}
                        />
                        <p className="category">{product.name}</p>
                        <p className="price">{product.price}</p>
                        <p className='content'>Apple,samsung and More</p>
                    </div>
                    <div className='posttext'></div>
                </div>
                })
            }
                

            </div>
            
        </div>
    )
}

export default Post
