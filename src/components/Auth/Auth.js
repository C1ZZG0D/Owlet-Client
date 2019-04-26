import React from "react";
import "./Auth.css";
import APIURL from "../../helpers/environment";

class Auth extends React.Component {
  state = {
    login: false,
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    let url = this.state.login
      ? `${APIURL}/user/login`
      : `${APIURL}/user/create`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.tokenHandler(data.sessionToken);
      })
      .catch(err => console.log(err));
  };

  loginToggle = event => {
    event.preventDefault();

    const login = this.state.login;

    this.setState({
      login: !login,
      username: "",
      password: ""
    });
  };

  render() {
    let title = this.state.login ? "Login" : "Sign Up";

    let signupFields = !this.state.login ? (
      <div>
        {/* <label className="display-block" htmlFor="username">Username :</label>
        <input type="text" name="username" value=
        {this.state.username} onChange={(e) => this.handleChange(e)} /> */}
      </div>
    ) : null;

    return (
      <form className="card-like" onSubmit={this.handleSubmit}>
        <h2>{title}</h2>
        <label className="display-block" htmlFor="username">
          Username :
        </label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={e => this.handleChange(e)}
        />
        <label className="display-block" htmlFor="password">
          Password :
        </label>
        <input
          className="display-block"
          type="password"
          minLength="5"
          required
          name="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
        {signupFields}
        <button color="warning" onClick={e => this.loginToggle(e)}>
          Login/Sign Up
        </button>
        <button color="warning" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Auth;
