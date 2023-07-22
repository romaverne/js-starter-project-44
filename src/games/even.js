import { getUserName, responseCheck } from '../index.js';

const randomQuestion = (func) => {
  const a = func(0, 100);
  const answer = a % 2 === 0 ? 'yes' : 'no';

  return { question: a, trueAnswer: answer };
};
const even = () => {
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  responseCheck(name, randomQuestion);
};

export default even;
