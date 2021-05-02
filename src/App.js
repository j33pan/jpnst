import Amplify, { Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddFood from "./pages/AddFood";
import Navbar from "./components/Navbar";

Amplify.configure(awsExports);

function App() {
  const [curruser, setCurruser] = React.useState("");
  const getcurruser = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser();
      setCurruser(response.attributes.email);
    } catch (error) {
      setCurruser("guest");
    }
  };
  React.useEffect(() => {
    getcurruser();
  }, [curruser]);

  return (
    <div>
      <Router>
        <Navbar curruser={curruser} />
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
