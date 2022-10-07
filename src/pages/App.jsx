import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/sbadmin2.css';

import Layout from './Layout';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

import Login from './Login';
import Modules from '../components/Modules';
import Register from './Register';


function App() {
  return (
    <Router>
      <div id="wrapper">
          
              <Switch>
                  <Route exact path="/"><Login/></Route>
                  <Route exact path="/register"><Register/></Route>
                  <Layout>
                    <Route exact path="/dashboard"><Dashboard/></Route>
                    <Route exact path="/modules"><Modules /></Route>
                  </Layout>
              </Switch>
            
      </div>
    </Router>
  );
}

export default App;
