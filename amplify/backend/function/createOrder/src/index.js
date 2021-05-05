const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event, callback) => {
  const payload = event.prev.result;
  console.log("jppayload: ", payload);

  try {
    await createorder(payload);
    await createfoodorder(payload);
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

function createorder(payload) {
  const { id, total, username, email, note } = payload;
  const params = {
    TableName: "JPOrder-dcjey6xckjddhcsd7yoy7mixqq-dev",
    Item: {
      id: id,
      __typename: "JPOrder",
      total: total,
      owner: username,
      note: note,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      email: email,
    },
  };
  return ddb.put(params).promise();
}

function createfoodorder(payload) {
  const { id, cart, email, username } = payload;
  let orderfoods = [];
  for (let i = 0; i < cart.length; i++) {
    const food = cart[i];
    orderfoods.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: "JPFoodOrder",
          food_id: food.id,
          order_id: id,
          owner: username,
          email: email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    });
  }
  let params = {
    RequestItems: {},
  };
  params["RequestItems"][
    "JPFoodOrder-dcjey6xckjddhcsd7yoy7mixqq-dev"
  ] = orderfoods;
  console.log(params);
  return ddb.batchWrite(params).promise();
}
