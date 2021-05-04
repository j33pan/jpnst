const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const { id, total, note } = event.arguments.input;
  const { username } = event.identity.claims;
  const email = await getUserEmail(event);

  return { id, total, username, email, note };
};

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: "ca-central-1_E5lUNt2iB",
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};
