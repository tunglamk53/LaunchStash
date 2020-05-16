import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './pages/NavBar/NavBar'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LogOutPage from './pages/LogOutPage'
import ProfilePage from './pages/ProfilePage'

import RouteHandler from './router/RouteHandler'

import { Redirect } from 'react-router-dom';
import CreationPage from './pages/CreationPage';
import ChecklistPage from './pages/ChecklistPage';

// import LogOutAction from './authens/authens'

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("myToken"));
  // const loggedIn = localStorage.getItem("myToken")

  return (
    <Router>
      <div className="App">
        <div className="NavBar">
          <NavBar isAuth={loggedIn} email={localStorage.getItem('myEmail')} />
        </div>
        <div className="auth-wrapper">
            <div className="auth-inner">

                {loggedIn ? 
                  <>
                  <Switch>
                    <Route exact path="/" component={HomePage} />      
                    {/* <Route exact path="/logout" render={() => <LogOutPage setLoggedIn={setLoggedIn} />} /> */}
                    <Route exact path="/logout" render={() => <LogOutPage setLoggedIn={setLoggedIn} />} />

                    <RouteHandler exact loggedIn={loggedIn} path='/profile' component={ProfilePage} />
                    <RouteHandler exact loggedIn={loggedIn} path='/checklist' component={CreationPage} /> 
                    <RouteHandler exact loggedIn={loggedIn} path='/my-checklist' component={ChecklistPage} />     
                    <Route path="*" component={() => <Redirect to="/"/> } />
                  </Switch>
                  </>
                : 
                  <>
                    <Switch>
                    <Route exact path="/" component={HomePage} />      
                    <Route exact path="/login" render={() => <LoginPage setLoggedIn={setLoggedIn} />} />
                    <Route exact path="/signup" render={() => <SignUpPage setLoggedIn={setLoggedIn} />} />  
                    <RouteHandler exact loggedIn={loggedIn} path='/checklist' component={CreationPage} />   
                    <RouteHandler exact loggedIn={loggedIn} path='/my-checklist' component={ChecklistPage} />     
                    <Route path="*" component={() => <Redirect to="/"/> } />
                  </Switch>
                  </>
                }

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
