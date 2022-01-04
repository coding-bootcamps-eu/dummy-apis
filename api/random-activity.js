exports.handler = async function (event, context, callback) {
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
