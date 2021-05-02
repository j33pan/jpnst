import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
