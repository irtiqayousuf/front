import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './index.css';
import Home from './Home';
import theme from "./Theme";
import { ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import StudentLogin from './Student/Studentlogin';
import Instructions from './Student/instructions';
import StudentDashboard from './Student/dashboard';
import UserInfo from './Student/userinfo';
import StudNav from './Components/studnav';
import Status from './Student/status';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <Router>
  <Switch>
  <Route exact path="/" component={Home} /> 
  <Route path="/StudentLogin" component={StudentLogin} />
  <Route path="/StudentDashboard" component={StudentDashboard} />
  <Route path="/instructions" component={Instructions} />
  <Route path="/UserInfo" component={UserInfo} /> 
  <Route path="/StudNav" component={StudNav} /> 
  <Route path="/Status" component={Status} /> 

  </Switch>
  </Router>
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


