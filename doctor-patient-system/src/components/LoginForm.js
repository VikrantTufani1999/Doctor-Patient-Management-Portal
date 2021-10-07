import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  let history = useHistory();

  const docUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const adminUser = {
    email: "admin1@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == docUser.email &&
      details.password == docUser.password
    ) {
      console.log("Logged in");

      history.push("/Search");
      setUser({
        email: details.email,
      });
    } else if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in to admin");

      history.push("/AdminDash");
      setUser({
        email: details.email,
      });
    } else {
      console.log("Invalid credentials");
      setError("Invalid credentials");
    }
  };

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor=""> Password </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
