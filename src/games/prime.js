import { getUserName, checkAnswer } from '../index.js';

const getPrimes = () => {
  const primes = [];
  let i = 2;
  while (i <= 1000) {
    primes.push(i);
    i += 1;
  }

  for (let x = 0; x < primes.length; x += 1) {
    for (let j = x + 1; j < primes.length;) {
      if (primes[j] % primes[x] === 0) {
        primes.splice(j, 1);
      } else {
        j += 1;
      }
    }
  }

  return primes;
};
const getRandomQuestion = (func) => {
  const question = func(0, 100);
  const trueAnswer = getPrimes().includes(question) ? 'yes' : 'no';

  return { question, trueAnswer };
};

const prime = () => {
  const name = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  checkAnswer(name, getRandomQuestion);
};
export default prime;
