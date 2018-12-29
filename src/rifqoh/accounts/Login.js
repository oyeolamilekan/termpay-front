import React, { Component } from "react";

import Loading from "react-spinners/BeatLoader";
import axios from "axios";
import strip from "../strip.png";
import url from "../url";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDismiss(event) {
    event.preventDefault();
    this.setState({
      error: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    const { password } = this.state;
    this.setState({
      loading: true
    });
    axios
      .post(`${url}/rest-auth/login/`, {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("username", username);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    const { loading, error } = this.state;
    return (
      <div className="col-md-6 offset-md-3">
        <div className="container mt-10 bg-white p-4 shadow">
          <div className="img-container text-center">
            <img src={strip} className="reg-img" alt="logo" />
          </div>
          <div className="mt-4" />
          <div className="login-container">
            {error ? (
              <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>Wrong credentials</strong> Kindly check does field and
                try again.
                <button
                  type="button"
                  className="close"
                  onClick={this.handleDismiss}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              ""
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="InputUsername"
                  aria-describedby="helpUsername"
                  placeholder="Username"
                  onChange={this.handleChange}
                  name="username"
                  required="true"
                />
              </div>
              <div className="mt-4" />
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  placeholder="Password"
                  name="password"
                  required="true"
                  onChange={this.handleChange}
                />
              </div>
              <div className="btn-submit mt-4">
                <button
                  type="submit"
                  className="btn btn-block btn-dark p-3 btn-shadow-dark"
                  disabled={loading ? true : false}
                >
                  {loading ? (
                    <span className="spinner">
                      <Loading
                        color={"white"}
                        sizeUnit={"px"}
                        size={13}
                        className={"spinner-logo"}
                      />
                    </span>
                  ) : (
                    <div className="login-text">Login to your account</div>
                  )}
                </button>
              </div>
              <div className="mb-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
