require('dotenv').config();

const pokemonPrinterFile = require("./pokemonPrinter");
const {pokemonNameFromNumber} = require('./pokemonPrinter');

// style 1 for setting up prompt-sync
var prompt = require('prompt-sync')({sigint: true});

// style 2 for setting up prompt-sync
let promptPackage = require('prompt-sync');
let promptInstance = promptPackage({sigint: true});
//
// get input from the user.
//
//var n = prompt('What number of Pokemon do you want to see?');

function app() {

    let userWantsToExit = false;

do {

    let n = parseFloat(prompt("What number of Pokemon do you want to see?"));

    //console.log(typeof(n));
    //console.log("Input is not a number:" + Number.isNaN(n));

    if (Number.isNaN(n)){
        throw new Error("User did not enter a number!");
    }

    // Give number to pokemon package and get result
    //let pokemonName = pokemonPrinterFile.pokemonNameFromNumber(n);
    try{
        let pokemonName = pokemonNameFromNumber(n);
		console.log(`Your Pokemon is ${pokemonName}! How exciting!`);
    } catch (error) {
        console.log("Try a number between 1 and 1025!");
    }

    //console.log("You entered: " + n);

    let userInputToExit = prompt("Would you like to try again?");

    if (userInputToExit == "y"){
        userWantsToExit = false;
    } else {
        userWantsToExit = true;
    }
} while (userWantsToExit == false); 
}

try {
    app();
} catch (error) {
    console.log("Gracefully shutting down...");
    console.log(error.message);
}

//console.log("User entered: " + n);
//console.log(typeof(n));

//let nAsNumber = parseFloat(n);
//console.log(typeof(nAsNumber));

/*console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("The terminal app is running");

pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app is finished");*/
