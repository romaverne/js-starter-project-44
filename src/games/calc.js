import { getUserName, checkAnswer } from '../index.js';

const getRandomQuestion = (func) => {
  const a = func(0, 100);
  const b = func(0, 100);
  const trueAnswer = String(a + b);
  const question = `${a} + ${b}`;

  return { question, trueAnswer };
};
const calc = () => {
  const name = getUserName();
  console.log('What is the result of the expression?');
  checkAnswer(name, getRandomQuestion);
};

export default calc;
