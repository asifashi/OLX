import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firebases} = useContext(FirebaseContext)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
   firebases.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebases.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone
      }).then(()=>{
        setLoading(false)
        history.push("/Login")
      })

    })

   }).catch((error)=>{
    console.log(error.message)
    setLoading(false)
    setError(error.message)

   })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)
            }
            
            name="name"
            placeholder='Username'
          required/>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'

            
          required/>
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder='phone'
            name="phone"
            
          required/>
          <br />
          <label htmlFor="lname"> Password</label> 
          <br />
          <input
            className="input"
            type="password"
            id="lname"
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            placeholder='password'
         required />
         <br/>
         {error ? <label htmlFor="lname">{error}</label> : '' }
          <br />
          <br />
          {loading ? (
            <div> <span className="spinner-grow spinner-grow-sm"></span> </div> // Display loading indicator while loading
          ) : (
          
            <button>Signup </button>
          )}
        </form>
        <a onClick={()=>history.push('/Login')}>Login</a>
      </div>
    </div>
  );
}
