import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../Store/FirebaseContext';
import { useHistory } from 'react-router-dom'

const Create = () => {
  const history=useHistory()
  const {firebases} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')
   const date=new Date()
  const handleSubmit = () =>{
    firebases.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebases.firestore().collection('product').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()

        }).then(()=>{
            history.push('/')
        })
      })
      }).catch((error)=>{
        alert(error.message)
    })

  }
  return (
    <Fragment>
      <Header />
      <card> 
        <div className="centerDiv">
          <form >
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
              placeholder='Name'
            required/>
            <br />
            <label htmlFor="fname">Category</label>
            <br />
               <select value={category} onChange={(e)=>setCategory(e.target.value)} required>


               <option  value="" disabled>Select</option>
               <option value="Electronics">Electronics</option>

                     <option value="Vehicles">Vehicles</option>

                <option value="Real Estate">Real Estate</option>  
               </select>



            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=>setPrice(e.target.value)} value={price} className="input" type="number" id="fname" name="Price" required/>
            <br />
            </form>
          <br />
          <img alt="Posts" width="200px" height="100px" src={image ? URL.createObjectURL(image) : ""}></img>
         
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" required/>
            <br />
            <button   onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
            
        </div>
      </card>
    </Fragment>
  );
}; 

export default Create;
