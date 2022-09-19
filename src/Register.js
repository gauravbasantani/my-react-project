import React, { useState } from "react";
import PropTypes from "prop-types";

function Register(props) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCPassword] = useState("");

  let register = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please enter name");
      return;
    }
    if (email === "") {
      alert("Please enter email");
      return;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        alert("Please enter valid email");
        return;
    }
    if (password === "") {
      alert("Please enter password");
      return;
    }
    if(password.length < 8){
        alert("Password must be minimum 8 character in length");
        return;

    }
    if (cpassword === "") {
        alert("Please enter password again");
        return;
      }
      if(password !== cpassword){
        alert("Password and confirm password not matching");
        return;
      }

      let user = {
        name:name,
        email:email,
        password:password
      };
      localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Success");
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
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">Your Name</label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className="form-control form-control-lg"
                        />
                      </div>

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

                      <div className="form-outline mb-4">
                        <label className="form-label">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          value={cpassword}
                          onChange={(e) => {
                            setCPassword(e.target.value);
                          }}
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            register(e);
                          }}
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
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

export default Register;
