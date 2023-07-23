import { getUserName, responseCheck } from '../index.js';

const randomQuestion = (func) => {
  let randomValue = func(0, 100);
  const arrLength = func(5, 10);
  const randomIndex = func(0, arrLength - 1);
  const progressionValue = func(0, 10);

  const progressionArr = [];
  for (let i = 0; i < arrLength; i += 1) {
    randomValue += progressionValue;
    progressionArr.push(randomValue);
  }

  const answer = String(progressionArr[randomIndex]);
  let question = '';

  for (let i = 0; i < progressionArr.length; i += 1) {
    const item = progressionArr[i];
    question = String(item) === answer ? `${question}. . ` : `${question} ${item} `;
  }

  return { question, trueAnswer: answer };
};
const progression = () => {
  const name = getUserName();
  console.log('What number is missing in the progression?');

  responseCheck(name, randomQuestion);
};
export default progression;
