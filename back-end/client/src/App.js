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
import FooterBar from './pages/NavBar/FooterBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LogOutPage from './pages/LogOutPage'
import ProfilePage from './pages/ProfilePage'
import RouteHandler from './router/RouteHandler'
import CreationPage from './pages/CreationPage';
import ChecklistPage from './pages/ChecklistPage';
import ProductIdeaPage from "./pages/ProductIdeaPage";
import UserContext from './contexts/UserContext'
import CheckBoxContext1 from './contexts/CheckBoxContext1'
import CheckBoxContext2 from './contexts/CheckBoxContext2'
import CheckBoxContext3 from './contexts/CheckBoxContext3'
import CheckBoxContext4 from './contexts/CheckBoxContext4'
import TargetAudiencesPage from "./pages/TargetAudiencesPage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("myToken"))
    const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn, setLoggedIn])
  // const loggedIn = localStorage.getItem("myToken")
    const [Step1, setStep1] = useState([])
    const checkboxValue1 = useMemo(() => ({ Step1, setStep1 }), [Step1, setStep1])
    const [Step2, setStep2] = useState([])
    const checkboxValue2 = useMemo(() => ({ Step2, setStep2 }), [Step2, setStep2])
    const [Step3, setStep3] = useState([])
    const checkboxValue3 = useMemo(() => ({ Step3, setStep3 }), [Step3, setStep3])
    const [Step4, setStep4] = useState([])
    const checkboxValue4 = useMemo(() => ({ Step4, setStep4 }), [Step4, setStep4])


  return (
    <Router>
      <UserContext.Provider value={value}>
      <CheckBoxContext1.Provider value={checkboxValue1}>
      <CheckBoxContext2.Provider value={checkboxValue2}>
      <CheckBoxContext3.Provider value={checkboxValue3}>
      <CheckBoxContext4.Provider value={checkboxValue4}>
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
              <Route exact path="/job-stories" component={ProductIdeaPage} />
              <Route exact path="/target-audiences" component={TargetAudiencesPage} />
              <Route exact path="/solutions" component={SolutionsPage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/feedback" component={FeedbackPage} />
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
              <Route exact path="/job-stories" component={ProductIdeaPage} />
              <Route exact path="/target-audiences" component={TargetAudiencesPage} />
              <Route exact path="/solutions" component={SolutionsPage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/feedback" component={FeedbackPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <RouteHandler exact path='/checklist' component={CreationPage} />
              <RouteHandler exact path='/my-checklist' component={ChecklistPage} />
              <Route path="*" component={() => <Redirect to="/"/> } />
            </Switch>
            </>
          }

        <FooterBar />
        </div>
      </CheckBoxContext4.Provider>
      </CheckBoxContext3.Provider>
      </CheckBoxContext2.Provider>
      </CheckBoxContext1.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
