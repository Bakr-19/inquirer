import inquirer from 'inquirer';


const questions = [
/* Pass your questions in here */
{
  type: 'input',
  name: 'name',
  message: 'what is your name?',
  validate: (answer) =>{
    if(answer == ''){
      return 'Enter your name please'
    }
    return true
  }
},
{
  type: 'list',
  name: 'result',
  message: 'Rock Paper or Sisors',
  choices: ["Rock","Paper","Sisors"]
}

]
console.log('----------------Rock () Paper [] Sisors X----------------')
console.
inquirer
  .prompt(questions)
  .then((answers) => {
    function calculation(usr,comp) {
      usr = answers.result
      comp = Math.floor(Math.random()* 3)
      if( ){

      }
    }

  })