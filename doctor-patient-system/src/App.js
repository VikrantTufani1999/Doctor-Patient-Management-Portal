import React from 'react';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SearchPage from './components/SearchPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, BrowserRouter } from "react-router-dom";
import AdminDashPage from './components/AdminDashPage';
import AdminLoginForm from './components/AdminLoginForm';
import NewsFeed from './components/NewsFeed';
import Faq from './components/Faq';
import UpdateRemoveMed from './components/UpdateRemoveMed';
import ChangePass from './components/ChangePass';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/Search" component={SearchPage} />
        {/* <Route path="/AdminLogin" component={AdminLoginForm} /> */}
        <Route path="/AdminDash" component={AdminDashPage} />
        {/* <Route path="/NewsFeed" component={NewsFeed} />
        <Route path="/Faq" component={Faq} /> */}
        <Route path="/UpdateMed" component={UpdateRemoveMed} />
        <Route path="/ChangePass" component={ChangePass} />
      </Switch>
    </Router>
  
  );
}
export default App;
