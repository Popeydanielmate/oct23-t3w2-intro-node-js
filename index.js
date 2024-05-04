require('dotenv').config();

const pokemonPrinterFile = require("./pokemonPrinter");

console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("The terminal app is running");

pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app is finished");