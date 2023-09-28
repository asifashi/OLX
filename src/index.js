import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/FirebaseContext';
import firebases from './Firebase/config';
import Context from './Store/FirebaseContext'
ReactDOM.render(
<FirebaseContext.Provider value={{firebases}}>
 <Context>
<App />
</Context>   
</FirebaseContext.Provider> , document.getElementById('root'));