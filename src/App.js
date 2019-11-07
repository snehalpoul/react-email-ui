import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import { ThemeProvider } from '@material-ui/styles';
//import EmailLayout from './Layout/EmailLayout/index';
import Routes from './Routes';

const browserHistory = createBrowserHistory();



export default class App extends Component {
  render() {
    return (
      //  <ThemeProvider >
        <Router history={browserHistory}>
          <Routes />
        </Router>
      // </ThemeProvider>
        // <EmailLayout />
        
    );
  }
}