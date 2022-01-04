function getRandomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

function randomColorNumber() {
  const n = {
    hex: undefined,
    decimal: getRandomNumber(0, 255),
  };

  n.hex = n.decimal.toString(16);
  if (n.hex.length === 1) {
    n.hex = "0" + n.hex;
  }

  return n;
}

function generateRandomColor() {
  const red = randomColorNumber();
  const green = randomColorNumber();
  const blue = randomColorNumber();

  return {
    color: ("#" + red.hex + green.hex + blue.hex).toUpperCase(),
    rgb: {
      r: red.decimal,
      g: green.decimal,
      b: blue.decimal,
    },
  };
}

exports.handler = async function (event, context, callback) {
  const color = generateRandomColor();

  try {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(color),
    });
  } catch (error) {
    callback(error);
  }
};
