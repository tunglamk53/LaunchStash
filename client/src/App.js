import React, { useState, useMemo } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import NavBar from './pages/NavBar/NavBar'
import FooterBar from './pages/FooterBar/FooterBar'
import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
import Login from './pages/Login'
import SignUpPage from './pages/SignUpPage'
import LogOutPage from './pages/LogOutPage'
import ProfilePage from './pages/ProfilePage'
import RouteHandler from './router/RouteHandler'
import ChecklistPage from './pages/ChecklistPage';
import UserContext from './contexts/UserContext'
import CheckBoxContext1 from './contexts/CheckBoxContext1'
import CheckBoxContext2 from './contexts/CheckBoxContext2'
import CheckBoxContext3 from './contexts/CheckBoxContext3'
import CheckBoxContext4 from './contexts/CheckBoxContext4'
import SolutionsPage from "./pages/articles-pages/SolutionsPage";
import TargetAudiencesPage from "./pages/articles-pages/TargetAudiencesPage";
import ProductIdeaPage from "./pages/articles-pages/ProductIdeaPage";
import AboutUsPage from "./pages/AboutUsPage";
import FeedbackPage from "./pages/FeedbackPage";
import CreateResource from "./pages/ChecklistPages/create-resource";
import CreateChecklist from "./pages/ChecklistPages/create-checklist";

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
              <Route exact path="/product-idea" component={ProductIdeaPage} />
              <Route exact path="/target-audiences" component={TargetAudiencesPage} />
              <Route exact path="/solutions" component={SolutionsPage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/feedback" component={FeedbackPage} />
              <RouteHandler exact path='/profile' component={ProfilePage} />
              <RouteHandler exact path='/my-checklist' component={ChecklistPage} />
              <RouteHandler exact path='/create-resource' component={CreateResource} />
              <RouteHandler exact path='/create-checklist' component={CreateChecklist} />
              <Route path="*" component={() => <Redirect to="/"/> } />
            </Switch>
            </>
          :
            <>
              <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/product-idea" component={ProductIdeaPage} />
              <Route exact path="/target-audiences" component={TargetAudiencesPage} />
              <Route exact path="/solutions" component={SolutionsPage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/feedback" component={FeedbackPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUpPage} />
              <RouteHandler exact path='/my-checklist' component={ChecklistPage} />
              <RouteHandler exact path='/create-resource' component={CreateResource} />
              <RouteHandler exact path='/create-checklist' component={CreateChecklist} />
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
