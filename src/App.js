import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import ContactKeeper from './components/pages/ContactKeeper'
import GithubSearcher from './components/pages/GithubSearcher'
import Home from './components/pages/Home';

import './App.css';

const App = () => {
  return (
    <Fragment>
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path ='/ContactKeeper' component={ContactKeeper}/>
                <Route exact path ='/GithubSearcher' component={GithubSearcher}/>
                {/* <Route exact path ='/Portfolio' component={Portfolio}/>  */}
            </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
