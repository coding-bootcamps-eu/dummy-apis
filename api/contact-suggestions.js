const fetch = require("node-fetch");

function randomJobTitle() {
  const jobTitles = [
    "Developer",
    "Senio Developer",
    "Junior Developer",
    "Art Director",
    "Agile Coach",
    "Fullstack Developer",
    "Trainer",
    "CEO",
    "CFO",
    "Test Engineer",
    "Designer",
    "Manager",
  ];

  return randomItem(jobTitles);
}

function randomBackgroundImage() {
  if (Math.random() <= 0.5) {
    return "https://source.unsplash.com/random/300×300";
  }
  return "";
}

function randomMutualConnections() {
  const min = 0;
  const max = 10;
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

function randomItem(arr) {
  const min = 0;
  const max = arr.length - 1;
  const num = Math.random() * (max - min + 1) + min;
  return arr[Math.floor(num)];
}

exports.handler = async function (event, context, callback) {
  try {
    let count = 1;
    if (Object.keys(event.queryStringParameters).includes("count")) {
      count = event.queryStringParameters["count"];
    }
    await fetch("https://randomuser.me/api/?nat=de,es,nl,gb&results=" + count)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        data = data.results.map((person) => {
          const { name, picture } = person;
          return {
            name,
            title: randomJobTitle(),
            picture: picture.large,
            mutualConnections: randomMutualConnections(),
            backgroundImage: randomBackgroundImage(),
          };
        });

        callback(null, {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET",
          },

          body: JSON.stringify(data),
        });
      });
  } catch (error) {
    callback(error);
  }
};
