const fs = require('fs');

setTimeout(() => console.log('Timeout: 1'), 0);

fs.readFile(__filename, () => console.log('Readfile: 1'));

setImmediate(() => console.log('Immediate: 1'));
for (let index = 0; index < 20000000; index++) {}
