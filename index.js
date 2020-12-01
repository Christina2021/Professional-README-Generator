const inquirer = require('inquirer');
const fs = require('fs');

/*
//Tested inquirer to confirm linked (will delete when beginning code)
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Is this working?',
            name: 'worked',
        }
    ])
    .then((response) => {
        console.log(`${response.worked}`)

        //Tested fs to confirm linked
        fs.writeFile('text.txt','test', (err) => {
            err ? console.error(err) : console.log('html worked.')
        });
    });
*/

//array of questions for user
const questions = [

];

//function to write README file
function writeToFile(fileName, data) {

};

//function to initialize program
function init() {

}

//function call to initialize program
init();