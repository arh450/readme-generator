const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// README Requirements
// At least one badge
const questions = [

    // PROJECT TITLE
    {
        type: "input",
        message: "Enter your project title:",
        name: "title"
    },
    // PROJECT DESCRIPTION
    {
        type: "input",
        message: "Enter a description for your project:",
        name: "description"
    },
    // PROJECT INSTALLATION
    {
        type: "input",
        message: "Enter the installation steps to your project:",
        name: "installation"
    },
    // PROJECT USAGE
    {
        type: "input",
        message: "Enter how your project will be used:",
        name: "usage"
    },
    // PROJECT LICENSE
    {
        type: "list",
        message: "Select a license for your project:",
        name: "license",
        choices: [
            "Apache",
            "MIT",
            "GNU"
        ]
    },
    // PROJECT TESTS
    {
        type: "input",
        message: "Enter how the project has been tested:",
        name: "test"
    },
    // PROJECT CONTRIBUTORS
    {
        type: "input",
        message: "Enter the contributors to your project:",
        name: "contributor"
    },
    // GITHUB USERNAME
    {
        type: "input",
        message: "What is your Github username?:",
        name: "username"
    },
    // GITHUB EMAIL
    {
        type: "input",
        message: "What is your Github account email?:",
        name: "email"
    }

];


function init() {
    inquirer.prompt(questions).then((input) => {
        fs.writeFile("GOODREADME.md", generateMarkdown(input), (error) => {
            if (error) throw error;
            console.log("GOODREADME Generated");
        });
    });
};
init();
