import { getUserName, checkAnswer } from '../index.js';

const getRandomQuestion = (func) => {
  const question = func(0, 100);
  const trueAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, trueAnswer };
};
const even = () => {
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  checkAnswer(name, getRandomQuestion);
};

export default even;
