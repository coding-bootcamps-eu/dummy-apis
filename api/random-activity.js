exports.handler = async function (event, context, callback) {
  const arr = ["Buy Beer in Saudi Arabia", "Jump of a Plane"];

  try {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify({
        activity: "Learn a new language",
      }),
    });
  } catch (error) {
    callback(error);
  }
};
