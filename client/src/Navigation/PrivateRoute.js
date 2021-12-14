import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";

export const PrivateRoute = (props) => {
  const { path, Component, exact } = props;
  let token = Cookie.get("token");
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) =>
        token ? <Component {...props} {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};
