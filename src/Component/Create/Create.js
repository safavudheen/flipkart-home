import React from 'react'
import './Create.css'

function Create() {
   
            
return (
  <div>
    <h1 style={{color:'blue',textAlign:'center',paddingTop:'10px'}}>Give Us We Will Market Your Product</h1>
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
            />
            <br/>
            <label htmlFor="fname">Discription</label>
            <br />
            <input className="index" 
            type="text" 
            id="fname" 
            name="Discription" 
            maxLength='100px'
             />
            <br />
            <label htmlFor="fname" style={{fontWeight:'900'}}>Price</label>
            <br/>
            <input  className="input" 
            type="number" 
            id="fname" 
            name="Price" />
            <br/>
          </form>
          
          <br />
          
          <img alt="Posts" width="200px" height="200px" src=""></img>
          <form>
            <br />
            <input type="file" />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        
        </div>
      
    </card>
    <div>  </div>
    </div>
  );
};
        
export default Create
