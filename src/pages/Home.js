import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { listJPFoods, listOrders } from "../graphql/queries";

export default function Home() {
  const getorders = async () => {
    const data = await API.graphql(graphqlOperation(listOrders));
    console.log("success: ", data);
  };

  return (
    <div>
      <button onClick={getorders}>get orders</button>
    </div>
  );
}
