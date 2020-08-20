document.addEventListener('click', async () => {
  const MyMath = await import('./my-math.mjs');
  console.log(MyMath.sum(1, 2));

  const {default: hello} = await import('./hello.mjs');
  console.log(hello('Romain'));
});
