exports.handler = async (event) => {
  console.log("prev response: ", event.prev.result);
  return "SUCCESS";
};
