import React, { useState, useMemo } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import NavBar from './pages/NavBar/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LogOutPage from './pages/LogOutPage'
import ProfilePage from './pages/ProfilePage'
import RouteHandler from './router/RouteHandler'
import CreationPage from './pages/CreationPage';
import ChecklistPage from './pages/ChecklistPage';
import UserContext from './contexts/UserContext'
import CheckBoxContext from './contexts/CheckBoxContext'

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("myToken"))
  const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn, setLoggedIn])
  // const loggedIn = localStorage.getItem("myToken")
  const [Step2, setStep2] = useState([])
  const checkboxValue = useMemo(() => ({ Step2, setStep2 }), [Step2, setStep2]);


  return (
    <Router>
      <UserContext.Provider value={value}>
      <CheckBoxContext.Provider value={checkboxValue}>
        <div className="App">
          <div className="NavBar">
            <NavBar />
          </div>

          {loggedIn ?
            <>
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route exact path="/logout" render={() => <LogOutPage setLoggedIn={setLoggedIn} />} /> */}
              <Route exact path="/logout" component={LogOutPage} />
              <RouteHandler exact path='/profile' component={ProfilePage} />
              <RouteHandler exact path='/checklist' component={CreationPage} />
              <RouteHandler exact path='/my-checklist' component={ChecklistPage} />
              <Route path="*" component={() => <Redirect to="/"/> } />
            </Switch>
            </>
          :
            <>
              <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <RouteHandler exact path='/checklist' component={CreationPage} />
              <RouteHandler exact path='/my-checklist' component={ChecklistPage} />
              <Route path="*" component={() => <Redirect to="/"/> } />
            </Switch>
            </>
          }

        </div>
      </CheckBoxContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
