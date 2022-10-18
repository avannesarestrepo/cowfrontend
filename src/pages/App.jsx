import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/sbadmin2.css';

import Layout from './Layout';
import Dashboard from './Dashboard';
//import NotFound from './NotFound';

import Login from './Login';
import Modules from '../components/Modules';
import Register from './Register';
import Cow from './Cow';
import CowEdit from '../components/Cow/CowEdit';
import CowGestation from '../components/Cow/CowGestation';
import Event from '../components/EventNotification/EventByIdVaca';

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
                    <Route exact path="/cow"><Cow /></Route>
                    <Route path="/cowedit/:id"><CowEdit /></Route>
                    <Route path="/cowGestation/:id"><CowGestation /></Route>
                    <Route path="/event/:id"><Event /></Route>
                  </Layout>
              </Switch>
            
      </div>
    </Router>
  );
}

export default App;
