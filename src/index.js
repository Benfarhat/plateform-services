import React from 'react'
import ReactDOM from 'react-dom'

import { createStore }  from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css';

let store = createStore(reducer)
export default store

ReactDOM.render(  
    <Provider store={store} >
      <App/>
    </Provider>, 
  document.getElementById('root'));
registerServiceWorker();

