import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import {ConfirmProvider} from 'material-ui-confirm'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfirmProvider>
        <App />
        </ConfirmProvider>
        
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

