import React from 'react';
import './View.css';
import {useContext,useState,useEffect} from 'react';
import {FirebaseContext} from '../../store/Context';
import {PostContext} from '../../store/PostContext';


function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails}=useContext(PostContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    const {use} =postDetails
  },[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img className="imageView"
          src={postDetails.url}
          alt=""
        />
      </div>
      <div>
      </div>
      <div className="rightSection">
      <p style={{fontWeight:800,fontSize:28}}> { postDetails.name} </p>
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          
        </div>
        <div className="contactDetails">
          <p>{postDetails.category}</p>
          
        </div>
        <div className='discription'>
            <p className='para2'>{postDetails.discription}</p>
        </div>


      </div>
      <p className='para1'></p>
      
    </div>
  );
}
export default View;
