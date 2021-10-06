import React from 'react';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SearchPage from './components/SearchPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log("Logged in");
      setUser({
        email: details.email
      })
    }
    else {
      console.log("Invalid credentials");
      setError("Invalid credentials");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ email: ""})
  }
  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/Search" component={SearchPage} />
      </Switch>
    </Router>
  
  );
}
export default App;
