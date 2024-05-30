const fs = require('fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
  console.log('readableStream close event callback');
});

setImmediate(() => console.log('Immediate: 1'));

setTimeout(() => console.log('Timeout: 1'), 0);

for (let index = 0; index < 10e7; index++) {}
