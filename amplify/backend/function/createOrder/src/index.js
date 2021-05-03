const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
  await createorder()
    .then(() => {
      callback(null, "SUCCESS");
    })
    .catch((err) => console.error(err));
};

function createorder() {
  const params = {
    TableName: "Order-dcjey6xckjddhcsd7yoy7mixqq-dev",
    Item: {
      id: "FFFFF",
      user: "vs code test user",
    },
  };
  return ddb.put(params).promise();
}
