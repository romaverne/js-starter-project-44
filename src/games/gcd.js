import { getUserName, responseCheck } from '../index.js';

const getNod = (a, b) => {
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
const randomQuestion = (func) => {
  const a = func(0, 100);
  const b = func(a, 100 + a);
  const answer = getNod(a, b);

  return { question: `${a} ${b}`, trueAnswer: String(answer) };
};

const gcd = () => {
  const name = getUserName();
  console.log('Find the greatest common divisor of given numbers.');

  responseCheck(name, randomQuestion);
};
export default gcd;
