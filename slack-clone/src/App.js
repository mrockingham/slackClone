import React from 'react';
import Header from './component/Header';
import './App.css'
import Sidebar from './component/Sidebar'
import Chat from './component/Chat'
import Login from './component/Login'
import { useStateValue } from './component/StateProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [{ user }, dispatch] = useStateValue()
  return (
    
    <div className="app">
      <Router>
        {!user ? (
          <Login />
          
        ):(
          <>
          <Header />
            <div className='app_body'>  

              <Sidebar />
              <Switch>
                <Route path ='/room/:roomId'>
                <Chat />
                </Route>
                <Route path ='/'>
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            

            </div>
        </>
        )}
      
      
     </Router> 
    </div>
  );
}

export default App;
