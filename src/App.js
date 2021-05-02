import Amplify, {API} from "aws-amplify";
import awsExports from "./aws-exports";
import { listJPFoods } from './graphql/queries';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' />
          <Route path='/' component={Home} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
