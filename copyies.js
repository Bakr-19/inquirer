import inquirer from 'inquirer';


const questions = [
/* Pass your questions in here */
{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
  validate: (answer) => {
    if(answer == ''){
      return 'Please enter a vaild name'
    }
      return true

  }
},
{
  type: 'input',
  name: 'height',
  message: 'What is your height (in inches)?',
  validate: (answer) => {
    if(isNaN(answer)){
      return 'Please enter a vaild Number'
    }
      return true

  }
},
{
  type: 'input',
  name: 'weight',
  message: 'What is your weight (in pounds)?',
  validate: (answer) => {
    if(isNaN(answer)){
      return 'Please enter a vaild Number'
    }
      return true

  }
},

]
console.log('----------------BMI Cal----------------')
inquirer
  .prompt(questions)
  .then((answers) => {
    const height = answers.height
    const weight = answers.weight
    const bmi = (weight/(height*height))*703
    if (bmi < 16){
      console.log(`${answers.name} your BMI is ${bmi} and it is consiered to be severly under weight`)
    }else if(bmi >= 18.5 ){
      console.log(`${answers.name} your BMI is ${bmi} and it is consiered to be severly under normal`)
    }
  })

