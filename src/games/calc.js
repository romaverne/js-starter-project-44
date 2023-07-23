import { getUserName, responseCheck } from '../index.js';

const randomQuestion = (func) => {
  const a = func(0, 100);
  const b = func(0, 100);
  const answer = String(a + b);
  const question = `${a} + ${b}`;

  return { question, trueAnswer: answer };
};
const calc = () => {
  const name = getUserName();
  console.log('What is the result of the expression?');
  responseCheck(name, randomQuestion);
};

export default calc;
