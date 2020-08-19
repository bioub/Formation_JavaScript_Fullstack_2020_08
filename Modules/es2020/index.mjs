document.addEventListener('click', () => {
  import('./my-math.mjs').then((MyMath) => {
    console.log(MyMath.sum(1, 2));
  });
  import('./hello.mjs').then(({default: hello}) => {
    console.log(hello('Romain'));
  });
});
