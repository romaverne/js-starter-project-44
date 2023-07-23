import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  return name;
};
export const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const checkAnswer = (name, getRandomQuestion, roundCount = 0, maxRound = 3) => {
  const question = getRandomQuestion(getRandomArbitrary);
  const answer = readlineSync.question(`Question: ${question.question}\nYour answer: `);

  if (answer === question.trueAnswer) {
    console.log('Correct!');

    const sumRounds = roundCount + 1;
    if (sumRounds < maxRound) {
      checkAnswer(name, getRandomQuestion, sumRounds);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.trueAnswer}'.\nLet's try again, ${name}!`);
  }
};
