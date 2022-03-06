import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navBar";
import Rental from "./components/rental";
import Vidly from "./components/vidly";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/rental" element={<Rental />} />
            <Route path="/movies" element={<Vidly />} />
            <Route path="/movieForm" element={<MovieForm />}>
              <Route path=":id" element={<MovieForm />} />
            </Route>
            <Route path="/customers" element={<Customers />} />
            <Route path="/*" element={<Vidly />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
