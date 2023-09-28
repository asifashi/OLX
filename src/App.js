import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import Create from './Pages/Create'
import Post from './Store/postContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext';
import ViewPost from './Pages/ViewPost';


function App() {
  const {setUser} = useContext(AuthContext);
  const {firebases}=useContext(FirebaseContext)
  useEffect(()=>{
    firebases.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/' >
      <Home />
      </Route>
      <Route path='/Signup' >
      <Signup />
      </Route>
      <Route path='/Login' >
      <Login />
      </Route>
      <Route path='/Create' >
      <Create/>
      </Route>
      <Route path='/View'>
      <ViewPost/>
      </Route>
       </Router>
      </Post>
    </div>
  );
}

export default App;
