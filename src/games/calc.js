import { getUserName, responseCheck } from '../index.js';

const randomQuestion = (func) => {
  const a = func(0, 100);
  const b = func(0, 100);
  const sum = String(a + b);
  const string = `${a} + ${b}`;

  return { question: string, trueAnswer: sum };
};
const calc = () => {
  const name = getUserName();
  console.log('What is the result of the expression?');
  responseCheck(name, randomQuestion);
};

export default calc;
