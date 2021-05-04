const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const stripe = require("stripe")(
  "sk_test_51InRYpETKhgF1UqhVfnrhLYqNBSfjk4ojpziYPFHaAXaEIZrGXpqhIcJTIWjdj4UNIuVsLvjmDFS4pDQETCJr0hd00pfhFuYLt"
);

exports.handler = async (event) => {
  const { id, note, token, cart } = event.arguments.input;
  const { username } = event.identity.claims;
  const email = await getUserEmail(event);
  const total = parseFloat(
    [...cart]
      .reduce((total, { amount, price }) => {
        return (total += amount * price);
      }, 0)
      .toFixed(2)
  );

  try {
    await stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      source: token,
      description: `Order ${new Date()} by ${email}`,
    });
    return { id, total, username, email, note, cart };
  } catch (error) {
    throw new Error(error);
  }
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
