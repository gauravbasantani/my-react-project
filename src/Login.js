import React, { useState } from "react";
import PropTypes from "prop-types";

function Login(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let login = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter email");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter valid email");
      return;
    }
    if (password === "") {
      alert("Please enter password");
      return;
    }

    let user = JSON.parse(localStorage.getItem("user"));
    if(user.email === email && user.password === password){
      alert("Login success");
    }
    else{
      alert("Sorry invalid credentials");
    }

  };

  return (
    <div>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login</h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">Your Email</label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            login(e);
                          }}
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
