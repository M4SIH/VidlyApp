import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // Call Server
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <div className="loginform m-4">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Login")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
