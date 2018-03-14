import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom'
import decode from 'jwt-decode'

import Home from './components/Home'
import Login from './components/auth/Login'
import Admin from './components/admin/admin'
import './App.css'

const checkAuth = () => {
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')
  if(!token || !refreshToken){
    return false
  }

  try {
    const { exp } = decode(refreshToken)

    if (exp > new Date().getTime() / 1000){
      return false
    }

  } catch (error) {
    return false
  }
   return true 
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/abcd" to="/"/>
          <Route path="/login" component={Login} />
          <AuthRoute path="/admin" component={Admin} />
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Redirect from="/abcd" to="/"/>
//           <Route path="/login" component={Login} />
//           <AuthRoute path="/admin" component={Admin} />
//         </Switch>
//       </Router>
//     );
//   }
// }

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
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
/*export default graphql(gql`

`)(App);*/