import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Login from './components/Login';
import Parks from './components/Parks';
import ReservePark from './components/ReservePark';
import LiberatePark from './components/LiberatePark';
import './App.css';

const App = () => 
<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Parks} />
       {/**  <Route exact path="/reservar/:id" component={ReservePark} /> / */} 
      <Route exact path="/reservar" component={ReservePark} />
      <Route exact path="/liberar" component={LiberatePark} />
    </Switch>
  </Router>
</Provider>

export default App;
 