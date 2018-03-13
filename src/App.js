import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Admin from './components/admin/admin';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/abcd" to="/"/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default App;