import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listJPOrders } from "../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Order() {
  const [orders, setOrders] = React.useState([]);
  const getorders = async () => {
    const response = await API.graphql(graphqlOperation(listJPOrders));
    console.log("success: ", response);
    setOrders(response.data.listJPOrders.items);
  };
  // React.useEffect(() => {
  //   getorders();
  // }, []);

  return (
    <div>
      <button onClick={getorders}>get orders</button>
      {orders.map(({ id, total, email }) => (
        <div key={id}>
          <article key={id}>
            <div>
              {email}: {total}
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default withAuthenticator(Order);
