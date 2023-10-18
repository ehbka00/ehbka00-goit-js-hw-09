document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  const delay = parseInt(this.elements.delay.value);
  const step = parseInt(this.elements.step.value);
  const amount = parseInt(this.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(result => console.log(result))
      .catch(error => console.error(error));
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Promise ${position} resolved after ${delay}ms`);
      } else {
        reject(`Promise ${position} rejected after ${delay}ms`);
      }
    }, delay);
  });
}