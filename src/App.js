import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddFood from "./pages/AddFood";
import Navbar from "./components/Navbar";

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/addfood" component={AddFood} />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
