import { getUserName, checkAnswer } from '../index.js';

const getGcd = (a, b) => {
  let x = a;
  let y = b;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return x + y;
};
const getRandomQuestion = (func) => {
  const a = func(0, 100);
  const b = func(a, 100 + a);
  const trueAnswer = String(getGcd(a, b));
  const question = `${a} ${b}`;

  return { question, trueAnswer };
};

const gcd = () => {
  const name = getUserName();
  console.log('Find the greatest common divisor of given numbers.');

  checkAnswer(name, getRandomQuestion);
};
export default gcd;
