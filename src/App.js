import logo from './logo.svg';
import './App.css';
import Amplify, {API, graphqlOperation} from "aws-amplify";
import awsExports from "./aws-exports";
import { listJPFoods } from './graphql/queries';
import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);

function App() {
  const getfoods = async () => {
      const data = await API.graphql({
        query:listJPFoods,
        authMode: 'AWS_IAM'
      }) 
      console.log("success: ", data)
  }

  return (
    <div className="App">
      <button onClick={getfoods}>get data</button>
    </div>
  );
}

export default App;
