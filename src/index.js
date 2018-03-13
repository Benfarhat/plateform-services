import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';



import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

/*

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      req.options.headers['x-token'] = localStorage.getItem('token');
      req.options.headers['x-refresh-token'] = localStorage.getItem('refreshToken');
      next();
    }
  }]);
  */

  const client = new ApolloClient({
    //link: new HttpLink({ uri: 'https://localhost:3000/graphql' }),
    link: new HttpLink(),
    cache: new InMemoryCache()
  });

  const RootComponent = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

ReactDOM.render(<RootComponent />, document.getElementById('root'));

//registerServiceWorker();
