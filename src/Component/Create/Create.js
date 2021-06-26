import React, { useContext, useState } from 'react'
import './Create.css'
import {AuthContext, FirebaseContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'


function Create() {
   const {firebase} =useContext(FirebaseContext)
   const {user} = useContext(AuthContext)

   const [name,setName]=useState('')
   const [category,setCategory]=useState('')
   const [discription,setDiscription]=useState('')
   const [price,setPrice]=useState('')
   const [image,setImage]=useState(null)

    const date=new Date()

      const handleSubmit=(e)=>{
        e.preventDefault()
        firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
         ref.getDownloadURL().then((url)=>{
         firebase.firestore().collection('products').add({
           name,
           userId:user.uid,
           category,
           price,
           url,
           discription,
           createdAt:date.toDateString()
         })
         }) 
        })
      }
return (
  
  <div>
    <div className='hdr'></div>
    <h1 className='hdw'>Give Us We Will Market Your Product</h1>
      <card>
        
        <div className="centerDiv">
        <p htmlFor="fname">Sell Your Product</p>
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John.."
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="Product Category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br/>
            <label htmlFor="fname">Discription</label>
            <br />
              <textarea
            className="index"
            id="fname"
            rows="5"
            name="Discription"
            value={discription}
            onChange={(e)=>setDiscription(e.target.value)}
            />
            <br />
            <label htmlFor="fname" style={{fontWeight:'900'}}>Price</label>
            <br/>
            <input  className="input" 
            type="number" 
            id="fname" 
            name="Price" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
            <br/>
          </form>

          <br />
          <div className='imgdiv'>
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image): ''} 
         ></img>
         </div>
          <form>
   
            <br />
            <input type="file" className='imgsize' onChange={(e)=>setImage(e.target.files[0])}  />
            <br />
            <button  onClick={handleSubmit.reset} className="uploadBtn"  >upload and Submit</button>
          </form>
        
        </div>
      
    </card>
    <div>  </div>
    </div>
  );
};
        
export default Create
