const fs = require('fs');
// const https = require('https');

// https.get('https://google.com', () => {
//   console.log('HTTPs request');
// });
fs.readFile(__filename, (err, data) => {
  console.log('Readfile 1');

  setImmediate(() => {
    console.log('Immediate 1');
    process.nextTick(() => console.log('nextTick 1'));
  });

  setImmediate(() => console.log('Immediate 2'));
});

setTimeout(() => console.log('Timeout: 1'), 0);

for (let index = 0; index < 10e7; index++) {}
