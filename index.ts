#! /usr/bin/env mode

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for guessing number - done

// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 8 +1)


  const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
     type: "number",
       message: "please guess a number betweem 1 to 8:",
  }

   ])

    if(answers.userGuessedNumber === randomNumber ){
   console.log("congrulations! you guessed right number.")
   }else {
    console.log("you guessed wrong number.")
   }