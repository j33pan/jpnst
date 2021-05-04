import React, { useContext } from "react";
import { API } from "aws-amplify";
import { listJPFoods } from "../graphql/queries";
import { CartContext } from "../contexts/cart";

function Food() {
  const [foods, setFoods] = React.useState([]);
  const getfoods = async () => {
    const data = await API.graphql({
      query: listJPFoods,
      authMode: "AWS_IAM",
    });
    console.log("success: ", data);
    setFoods(data.data.listJPFoods.items);
  };
  React.useEffect(() => {
    getfoods();
  }, []);

  const { inc, dec } = useContext(CartContext);

  return (
    <div>
      {foods.map(({ image, id, title }) => (
        <div key={id}>
          <article key={id} className="book">
            <div className="book-image">
              <img src={image} alt={title} height={100} />
              {title}
              <button onClick={() => dec(id)}>-</button>
              <button onClick={() => inc(id)}>+</button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Food;
