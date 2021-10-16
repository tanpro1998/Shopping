import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
    // Comment
  );
}
