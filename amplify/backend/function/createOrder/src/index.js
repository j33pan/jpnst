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
  const { id, total, username, email, note, cart } = payload;
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
