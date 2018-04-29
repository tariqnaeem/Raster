//const dotenv = require('dotenv').config();
const Dredd = require('dredd');
const request = require('request');

// Process the .env

function runDredd(error, response, body) {
  if (!error && response.statusCode === 200) {
    const configuration = {
      server: "127.0.0.1",
      options: {
          path: './bonesapi.apib',
          hookfiles: ['./dredd_hooks/*.js'],
          header: [
            'Accept: application/json'
          ]
      },
      data: {
        './bonesapi.apib': response.body,
      },
    };

    console.log(response.body);

    const dredd = new Dredd(configuration); 
    dredd.run((error, stats) => {
      if (error) {
        console.log(error);
      }
    });
  }
}

var options = {
  url: 'http://127.0.0.1/apigility/blueprint/BonesApi',
  headers: {
    'Accept': 'text/vnd.apiblueprint+markdown'
  }
};

request(options, runDredd);
