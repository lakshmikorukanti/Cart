import React from "react";
import { AppContext } from "../Context/AppContext";
import { Redirect, Link, Route } from "react-router-dom";
import ProductPage from "../Router/ProductPage";
import MoreDetails from "../Router/MoreDetails";
import WishList from "../Router/WishList";
import Cart from "../Router/Cart";
function PrivateRoutes() {
  return (
    <AppContext.Consumer>
      {({ isAuth }) => {
        if (!isAuth) {
          return <Redirect to="/login" />;
        } else {
          return (
            <>
              {" "}
              <Route
                path="/cart"
                exact
                render={(props) => <Cart {...props} />}
              />
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
              <Route
                path="/sort/:orderBy(asc|desc)"
                exact
                render={(props) => <Cart {...props} />}
              />
            </>
          );
        }
      }}
    </AppContext.Consumer>
  );
}
export default PrivateRoutes;
