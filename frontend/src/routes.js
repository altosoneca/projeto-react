import React from 'react';
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import Login from './components/login/login.component';
import Home from './components/home/home.component';
import Error404 from './components/404/error404.component';
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Main = () => {
    return (
      <BrowserRouter>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <PrivateRoute path = "/home"  component={Home} />
          <PrivateRoute path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path='*' component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Main;

