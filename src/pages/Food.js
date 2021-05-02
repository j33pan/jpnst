import React from "react";
import { API } from "aws-amplify";
import { listJPFoods } from "../graphql/queries";

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

  return (
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
  );
}

export default Food;
