// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt([
       
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your ReadMe?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'giv your readme a description. (REQUIRED)',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What needs to be installed to run this application? (REQUIRED)',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'How does this application work? (REQUIRED)',
       
        },
        {
        type: 'checkbox',
        name: 'liscenses',
        message: 'What kind of liscensing do you want to use? (REQUIRED)',
         choices: ['GNU APLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public Liscense 2.0', 'MIT Liscense', 'Boost Software Liscense' ]
        },
        {
        type: 'input',
        name: 'contributing',
        message: 'Please list contributors or how others can contribute to this project',
        },
        {
        type: 'input',
        name: 'test',
        message: 'Write any test code for your application here.',
        },
        {
        type: 'input',
        name: 'questions',
        message: 'Enter your contact information here. (email)',
        },
    ])
}
    promptUser()


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
