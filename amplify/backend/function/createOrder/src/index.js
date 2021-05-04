const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, callback) => {
  const payload = event.prev.result;
  console.log("jppayload: ", payload);

  try {
    await createorder(payload);
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

function createorder(payload) {
  const params = {
    TableName: "Order-dcjey6xckjddhcsd7yoy7mixqq-dev",
    Item: {
      id: payload.id,
      __typename: "Order",
      total: payload.total,
      user: payload.username,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
  return ddb.put(params).promise();
}
