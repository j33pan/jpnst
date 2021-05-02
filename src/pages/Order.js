import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listOrders } from "../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Order() {
  const [orders, setOrders] = React.useState([]);
  const getorders = async () => {
    const response = await API.graphql(graphqlOperation(listOrders));
    console.log("success: ", response.data.listOrders.items);
    setOrders(response.data.listOrders.items);
  };
  React.useEffect(() => {
    getorders();
  }, []);

  return (
    <div>
      {orders.map(({ user, total, id, date }) => (
        <div key={id}>
          <article key={id}>
            <div>
              {id}: {user}, {total}, {date}
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default withAuthenticator(Order);
