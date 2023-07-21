import readlineSync from 'readline-sync';

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getAnswer = (name, sumCorrectAnswer = 0, maxSumCorrectAnswer = 3) => {
  const randomNum = getRandomArbitrary(0, 100);
  const answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

  if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    const sum = sumCorrectAnswer + 1;
    if (sum < maxSumCorrectAnswer) {
      getAnswer(name, sum);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'no' ? 'yes' : 'no'}'.\nLet's try again, ${name}!`);
  }
};

const getEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getAnswer(name);
};

export default getEven;


