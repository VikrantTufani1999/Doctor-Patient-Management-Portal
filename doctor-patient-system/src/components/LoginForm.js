import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const axios = require('axios');
const qs=require('qs');


function LoginForm() {
  let history = useHistory();

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");


  const Login = async (details) => {
    console.log(details);

    const params = {
      username : details.email,
      password : details.password
    }

    try {
          const resp = await axios.post('/checkAuthentication', qs.stringify(params));
          
          // let dataObj = JSON.parse(resp);
          console.log(resp.data.role);
          console.log(resp.data.status);

          if(resp.data.status == "success"){

            if(resp.data.role == "admin"){
                console.log("Logged in to admin");

                history.push("/AdminDash");
                setUser({
                  email: details.email
                })

            }
            else {
              console.log("Logged in");

              history.push("/Search");
              setUser({
                email: details.email
              })
            }
              
          }
          else {
              console.log("Invalid credentials");
              setError("Invalid credentials");
          }


    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }


    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (

        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Password </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;
