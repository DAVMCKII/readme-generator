// TODO: Include packages needed for this application
const {writeFile} = require('./utils/generate-readme')
const inquirer = require('inquirer')
const generatePage = require('./src/template')

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
        type: 'list',
        name: 'liscenses',
        message: 'What kind of liscensing do you want to use? (REQUIRED)',
         choices: ['GNU APLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public Liscense 2.0', 'MIT Liscense', 'Apache' ]
        },
        {
          type: 'list',
        name: 'badges',
        message: 'Choose your coresponding badge? (REQUIRED)',
         choices: [
             '(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
             '(https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
             '(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
             '(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
             '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
             '(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

          ]
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
        name: 'username',
        message: 'Enter your github username please.',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your contact information here. (email)',
        },
    ])
}
   promptUser()
    .then(templateData => {
        return generatePage(templateData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
