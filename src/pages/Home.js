import {API} from "aws-amplify";
import React from 'react';
import { listJPFoods } from "../graphql/queries";

export default function Home() {
    const getfoods = async () => {
        const data = await API.graphql({
          query: listJPFoods,
          authMode: 'AWS_IAM'
        }) 
        console.log("success: ", data)
    }

    return (
        <div>
            home
            <button onClick={getfoods}>get data</button>
        </div>
    )
}
