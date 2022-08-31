const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable >> ",
  "What's an activity you like doing? >> ",
  "What do you listen to while doing that? >> ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) >> ",
  "What's your favourite thing to eat for that meal? >> ",
  "Which sport is your absolute favourite? >> ",
  "What is your superpower? In a few words, tell us what you are amazing at! >> "
]

const answers = {

};

rl.question(questions[0], (a1) => {
  console.log(`You have input: ${a1}`);
  answers.a1 = a1;
  rl.question(questions[1], (a2) => {
    console.log(`You have input: ${a2}`);
    answers.a2 = a2;
    rl.question(questions[2], (a3) => {
      console.log(`You have input: ${a3}`);
      answers.a3 = a3;
      rl.question(questions[3], (a4) => {
        console.log(`You have input: ${a4}`);
        answers.a4 = a4;
        rl.question(questions[4], (a5) => {
          console.log(`You have input: ${a5}`);
          answers.a5 = a5;
          rl.question(questions[5], (a6) => {
            console.log(`You have input: ${a6}`);
            answers.a6 = a6;
            rl.question(questions[6], (a7) => {
              console.log(`You have input: ${a7}`);
              answers.a7 = a7;
              
              console.log(`
${answers.a1}'s hobby is ${answers.a2}, and loves to listen to ${answers.a3}.
Their favourite meal is ${answers.a4}, and their favourite food for that meal is ${answers.a5}.
Their favourite sport is ${answers.a6}, and their superpower is ${answers.a7}.`
              );

              rl.close()
            });
          });
        });
      });
    });
  });
});