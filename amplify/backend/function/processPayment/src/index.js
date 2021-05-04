exports.handler = async (event) => {
  const { id, total } = event.arguments.input;
  const { username } = event.identity.claims;
  return { id, total, username };
};
