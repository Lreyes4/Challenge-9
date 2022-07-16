// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide the description of the application',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the steps required to install your repository?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Did you work with any other people on this project? If so who?',
        name: 'collaborator',
      },
      {
        type: 'input',
        message: 'List the main features of this application.',
        name: 'features',
      },
      {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'What can users do to test that it is working correctly?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'If people have questions about this repo who should they contact?',
        name: 'questions',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        const markdown = `
# ${response.title}

## Description
${response.description}


## Table of Contents



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${response.install}


## Usage
${response.usage}




## Credits
${response.collaborator}


## License

MIT License





## Features
${response.features}


## How to Contribute
${response.contribute}


## Tests 
${response.tests}    

## Questions
${response.questions}
        `


        writeToFile('MARKDOWN.md', markdown)
    });
}  


// Function call to initialize app
init();
