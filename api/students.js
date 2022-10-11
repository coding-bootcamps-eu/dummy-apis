exports.handler = async function (event, context, callback) {
  const students = require(`./students.json`);

  try {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(students),
    });
  } catch (error) {
    callback(error);
  }
};
