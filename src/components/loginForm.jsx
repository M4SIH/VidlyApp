import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginFrom extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call Server
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div className="loginform m-4">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}

            {this.renderButton("Login")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginFrom;
