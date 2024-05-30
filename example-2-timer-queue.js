setTimeout(() => console.log('Timeout: 1'), 1000);
setTimeout(() => {
  console.log('Timeout: 2');
  Promise.resolve().then(() => {
    console.log('Timeout-promise:2.1');
  });
  process.nextTick(() => console.log('Timeout-nextick: 2.2'));
}, 0);
setTimeout(() => console.log('Timeout: 3'), 0);

process.nextTick(() => console.log('nextTick: 1'));
Promise.resolve().then(() => console.log('Promise: 1'));
// process.nextTick(() => {
//   console.log('nextTick: 2');
//   Promise.resolve().then(() => console.log('nextTick-Promise: 2.1'));
//   process.nextTick(() => {
//     console.log('nextTick-nextTick: 2.2');
//   });
// });
// process.nextTick(() => console.log('nextTick: 3'));

// Promise.resolve().then(() => console.log('Promise: 1'));
// Promise.resolve().then(() => {
//   console.log('Promise: 2');
//   Promise.resolve().then(() => console.log('Promise-promise: 2.1'));
//   process.nextTick(() => {
//     console.log('Promise-nextTick: 2.2');
//   });
// });
// Promise.resolve().then(() => console.log('Promise: 3'));
