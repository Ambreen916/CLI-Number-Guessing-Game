import { getUnpackedSettings } from "http2";
import inquirer from "inquirer"

//to make a random number guessing game

const randomNumber = Math.floor(Math.random()* 6 + 1);

console.log("Welcome to Number Guessing Game");

const answer = await inquirer.prompt([{

    name : "guessUserNumber",
    type : "number",
    message : "Plaease Guess a number b/w 1-6",


    },
]);

if (answer.guessUserNumber === randomNumber){
    console.log( "Congratulations!!! You enter a correct number.");
}else{
    console.log("oppss!!! Your enter number is wrong. ")
}





