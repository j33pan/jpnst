import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { listJPFoods, listOrders } from "../graphql/queries";

export default function Home() {
  const [foods, setFoods] = React.useState([]);
  const getfoods = async () => {
    const data = await API.graphql({
      query: listJPFoods,
      authMode: "AWS_IAM",
    });
    console.log("success: ", data);
    setFoods(data.data.listJPFoods.items);
  };

  const getorders = async () => {
    const data = await API.graphql(graphqlOperation(listOrders));
    console.log("success: ", data);
  };

  return (
    <div>
      <button onClick={getfoods}>get food</button>
      <button onClick={getorders}>get orders</button>
      <div>
        {foods.map(({ image: image, id, title }) => (
          <div key={id}>
            <article key={id} className="book">
              <div className="book-image">
                <img src={image} alt={title} height={100} />
                {title}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
