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
import RegisterPatient from './components/RegisterPatient';
import DeleteApp from './components/DeleteApp';
import RemovePatient from './components/RemovePatient';
import ChartsPage from './components/ChartsPage';

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
        <Route path="/RegPatient" component={RegisterPatient} />
        <Route path="/DelApp" component={DeleteApp} />
        <Route path="/RemPatient" component={RemovePatient} />
        <Route path="/ShowChart" component={ChartsPage} />
      </Switch>
    </Router>
  
  );
}
export default App;
