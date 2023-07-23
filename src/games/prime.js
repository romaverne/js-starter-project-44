import { getUserName, responseCheck } from '../index.js';

const getPrimeValues = () => {
  const primeValues = [];
  let i = 2;
  while (i <= 1000) {
    primeValues.push(i);
    i += 1;
  }

  for (let x = 0; x < primeValues.length; x += 1) {
    for (let j = x + 1; j < primeValues.length;) {
      if (primeValues[j] % primeValues[x] === 0) {
        primeValues.splice(j, 1);
      } else {
        j += 1;
      }
    }
  }

  return primeValues;
};
const randomQuestion = (func) => {
  const question = func(0, 100);
  const answer = getPrimeValues().includes(question) ? 'yes' : 'no';

  return { question, trueAnswer: answer };
};

const prime = () => {
  const name = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  responseCheck(name, randomQuestion);
};
export default prime;
