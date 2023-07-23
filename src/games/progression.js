import { getUserName, checkAnswer } from '../index.js';

const getRandomQuestion = (func) => {
  let randomCount = func(0, 100);
  const sequenceLength = func(5, 10);
  const randomIndex = func(0, sequenceLength - 1);
  const progressionCount = func(2, 10);

  const progressions = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    randomCount += progressionCount;
    progressions.push(randomCount);
  }

  const trueAnswer = String(progressions[randomIndex]);
  progressions[randomIndex] = '..';
  const question = progressions.join(' ');

  return { question, trueAnswer };
};
const progression = () => {
  const name = getUserName();
  console.log('What number is missing in the progression?');

  checkAnswer(name, getRandomQuestion);
};
export default progression;
