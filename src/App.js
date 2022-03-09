import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import LoginFrom from "./components/loginForm";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import RegisterForm from "./components/registerForm";
import Rental from "./components/rental";
import Vidly from "./components/vidly";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginFrom} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Vidly} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
