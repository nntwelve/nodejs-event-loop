const fs = require('fs');

// setTimeout(() => console.log('setTimeout 1'), 0);
fs.readFile(__filename, (err, data) => {
  console.log('Readfile 1');
});

// process.nextTick(() => console.log('nextTick 1'));
// Promise.resolve().then(() => console.log('Promise 1'));

setTimeout(() => console.log('Timeout: 1'), 1000);
setTimeout(() => console.log('Timeout: 2'), 0);

setTimeout(() => console.log('Timeout: 3'), 0);

for (let index = 0; index < 20000000; index++) {}
