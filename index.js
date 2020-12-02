const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


//array of questions for user
const questions = [
    'What is the name of your project?',
    'Please enter in a description of your project:',
    'Please enter the live URL for your website:',
    'Please enter any commands needed for installation:',
    'Please enter any commands needed to run tests:',
    'Please enter usage information for the user:',
    'Please enter information on how a user may contribute to the project:',
    'Please choose a license for your project:',
    'What is your GitHub username?',
    'What is your email address?'
];

//function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName,generateMarkdown(data), (err) => {
        if(err) console.error(`There was an error: ${err}`);
    });

};

//function to initialize program
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'liveSite',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contribution',
        },
        {
            type: 'list',
            message: questions[7],
            name: 'license',
            choices: [
                "MIT",
                "APACHE-2.0",
                "GNU General Public License-3.0",
                "BSD-3-Clause",
                "Unlicense",
                "None",
            ]
        },
        {
            type: 'input',
            message: questions[8],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'email',
        },
    ])
    .then((response) => {

        writeToFile('New-README.md',response);

    });
}

//function call to initialize program
init();