import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Cabin } from "./pages/Cabin";
import { Cabins } from "./pages/Cabins";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cabins" component={Cabins} />
        <Route path="/cabins/:id" component={Cabin} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
