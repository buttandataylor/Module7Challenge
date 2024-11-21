// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions:"
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information:"
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide contributing guidelines:"
    },
    {
      type: "input",
      name: "tests",
      message: "Provide test instructions:"
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your application:",
      choices: [
        "MIT",
        "GPLv3",
        "Apache 2.0",
        "BSD 3-Clause",
        "None"
      ]
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error("Error writing file:", err);
        } else {
          console.log(`README file (${fileName}) has been created successfully!`);
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README Generator!");

    // Prompt the user with questions
    inquirer.prompt(questions).then((answers) => {
      const fileName = "README.md";
      const data = generateReadMeContent(answers); // Create README content
      writeToFile(fileName, data); // Write content to README file
    }).catch((error) => {
      console.error("An error occurred during initialization:", error);
    });
  }
  
  function generateReadMeContent(answers) {
    return `
  # ${answers.title}
  
  ![License](https://img.shields.io/badge/license-${answers.license}-blue)
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## License
  This project is licensed under the ${answers.license} License.
  
  ## Questions
  For questions, please reach out to me via [GitHub](https://github.com/${answers.githubUsername}) or email me at ${answers.email}.
  `;
  }


// Function call to initialize app
init();
