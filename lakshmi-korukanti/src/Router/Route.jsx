import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Aboutus from "../Router/Aboutus";
import Contact from "../Router/Contact";
import Home from "../Router/Home";
import Products from "../Router/Products";
import Login from "../Router/Login";
import FAQ from "../Router/FAQ";
import Cart from "../Router/Cart";
import ProductPage from "../Router/ProductPage";
import MoreDetails from "../Router/MoreDetails";
import WishList from "../Router/WishList";
export default function Router() {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/contacts" exact render={() => <Contact />} />
        <Route
          path="/about-us"
          exact
          render={() => (
            <div>
              <Aboutus />
            </div>
          )}
        />
        <Route path="/products" exact render={() => <Products />} />
        <Route path="/FAQ" exact render={() => <FAQ />} />
        <Route path="/cart" exact render={(props) => <Cart {...props} />} />
        <Route
          path="/wishlist"
          exact
          render={(props) => (
            <div>
              <WishList {...props} />
            </div>
          )}
        />
        <Route
          path="/cart:orderBy(asc|desc)"
          exact
          render={(props) => <Cart {...props} />}
        />
        <Route path="/login" exact render={() => <Login />} />
        <Route
          path="/products/:item/:id"
          exact
          render={(props) => <ProductPage {...props} />}
        />
        <Route
          path="/product/:item/:id/sort/:orderBy(asc|desc)"
          exact
          render={(props) => <ProductPage {...props} />}
        />
        <Route
          path="/products/:item/:id/moredetails/:id1"
          render={(props) => <MoreDetails {...props} />}
        />
        <Route
          path="/sort/:orderBy(asc|desc)"
          exact
          render={(props) => <Cart {...props} />}
        />
        <Route>
          <div>Error 404 </div>
          <Link to="/">GO BACK HOME</Link>
        </Route>
      </Switch>
    </>
  );
}
