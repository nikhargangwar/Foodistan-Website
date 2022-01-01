import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "../src/components/css/style.css";
import "../src/components/css/header.css";
import "../src/components/css/SpecialOffer.css";
import "../src/components/css/DealsOfTheDay.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile/profile";
import ProfileNoOrder from "./Profile/P-components/profileNoOrder";
import ProfileOrders from "./Profile/P-components/profileOrders";
import Address from "./Profile/P-components/address";
import Payments from "./Profile/P-components/payments";
import reportWebVitals from "./reportWebVitals";
import Login from "../src/login"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/profile" component={Profile} />{" "}
        <Route exact path="/orders" component={ProfileNoOrder} />{" "}
        <Route path="/orders/1" component={ProfileOrders} />{" "}
        <Route path="/address" component={Address} />{" "}
        <Route path="/payments" component={Payments} />{" "}
        <Route path="/login" component={Login} />
      </Switch>{" "}
    </Router>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a functio
reportWebVitals();
