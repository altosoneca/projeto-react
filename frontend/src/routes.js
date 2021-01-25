import React from 'react';
import { Route } from 'react-router';
import App from './App';
import { BrowserRouter,Switch } from "react-router-dom";
import Login from './components/login/login.component';
import Home from './components/home/home.component';
import Error404 from './components/404/error404.component';

const Main = () => {
    return (
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path="/login" exact={true} component={Login} />
        <Route path="/" exact={true} component={Home} />
        <Route path='*' component={Error404} />
      </Switch>
    );
  }
  
  export default Main;

