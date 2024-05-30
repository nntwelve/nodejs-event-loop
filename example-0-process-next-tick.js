process.nextTick(() => {
  console.log('Next tick 1');
  process.nextTick(() => console.log('Next tick 1.1'));
});

setTimeout(() => console.log('Set timeout 1'));
