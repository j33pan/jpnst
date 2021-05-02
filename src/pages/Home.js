import {API, graphqlOperation} from "aws-amplify";
import React from 'react';
import { useHistory } from "react-router";
import { listJPFoods, listOrders } from "../graphql/queries";

export default function Home() {
    const getfoods = async () => {
        const data = await API.graphql({
          query: listJPFoods,
          authMode: 'AWS_IAM'
        }) 
        console.log("success: ", data)
    }

    const getorders = async () => {
        const data = await API.graphql(graphqlOperation(listOrders))
        console.log("success: ", data)
    }

    const history = useHistory()
    const handlegotologin = () => history.push('/login')

    return (
        <div>
            home
            <button onClick={getfoods}>get food</button>
            <button onClick={getorders}>get orders</button>
            <button onClick={handlegotologin}>go to login</button>
        </div>
    )
}
