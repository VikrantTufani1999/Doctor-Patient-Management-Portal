import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function AdminLoginForm() { 

  let history = useHistory();

  const adminUser2 = {
    email2: "admin1@admin.com",
    password2: "admin123"
  }

  const [user2, setUser2] = useState({email2: "", password2: ""});
  const [error2, setError2] = useState("");

  const Login2 = details2 => {
    console.log(details2);

    if(details2.email2 == adminUser2.email2 && details2.password2 == adminUser2.password2)
    {
      console.log("Logged in");

      history.push("/AdminDash");
      setUser2({
        email2: details2.email2
      })
    }
    else {
      console.log("Invalid credentials");
      setError2("Invalid credentials");
    }
  }




    const [details2, setDetails2] = useState({email2: "", password2: ""});

    const submitHandler2 = e2 => {
        e2.preventDefault();
        Login2(details2);
    }

    return (

        <form onSubmit={submitHandler2}>
            <div className="form-inner">
                <h2>Admin Login</h2>
                {(error2 != "") ? ( <div className="error">{error2}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails2({...details2, email2: e.target.value})} value={details2.email2}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Password </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails2({...details2, password2: e.target.value})} value={details2.password2} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default AdminLoginForm
