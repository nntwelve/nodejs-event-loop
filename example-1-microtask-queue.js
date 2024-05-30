// setTimeout(() => console.log('Timeout: 1'), 0);
// setTimeout(() => console.log('Timeout: 2'), 0);
// setTimeout(() => console.log('Timeout: 3'), 0);

// process.nextTick(() => console.log('nextTick: 1'));
// process.nextTick(() => {
//   console.log('nextTick: 2');
//   setImmediate(() => console.log('nextTick-setImmediate: 2.1'));
//   Promise.resolve().then(() => console.log('nextTick-Promise: 2.1'));
//   process.nextTick(() => {
//     console.log('nextTick-nextTick: 2.2');
//     Promise.resolve().then(() => {
//       console.log('nextTick-nextTick-Promise: 2.2.1');
//       process.nextTick(() =>
//         console.log('nextTick-nextTick-promise-nextTick: 2.2.1.1')
//       );
//     });
//   });
// });
// process.nextTick(() => console.log('nextTick: 3'));

// console.log('=================');

// Promise.resolve().then(() => console.log('Promise: 1'));
// Promise.resolve().then(() => {
//   console.log('Promise: 2');
//   Promise.resolve().then(() => console.log('Promise-promise: 2.1'));
//   process.nextTick(() => {
//     console.log('Promise-nextTick: 2.2');
//     Promise.resolve().then(() =>
//       console.log('promise-nextTick-promise: 2.2.1')
//     );
//   });
// });
// Promise.resolve().then(() => console.log('Promise: 3'));

// console.log('++++++++++++++++++++');

// setImmediate(() => console.log('setImmediate: 1'));

process.nextTick(() => console.log('nextTick: 1'));
process.nextTick(() => {
  console.log('nextTick: 2');
  Promise.resolve().then(() => console.log('nextTick-Promise: 2.1'));
  process.nextTick(() => console.log('nextTick-nextTick: 2.2'));
});
process.nextTick(() => console.log('nextTick: 3'));

Promise.resolve().then(() => console.log('Promise: 1'));
Promise.resolve().then(() => {
  console.log('Promise: 2');
  Promise.resolve().then(() => console.log('Promise-promise: 2.1'));
  process.nextTick(() => console.log('Promise-nextTick: 2.2'));
});
Promise.resolve().then(() => console.log('Promise: 3'));

setTimeout(() => {
  console.log('Timeout: 1');
}, 0);
console.log('Console 1');
