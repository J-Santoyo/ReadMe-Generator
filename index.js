const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please add a brief description of your project."
        },
        {
            type: "list",
            name: "license",
            message: "Please pick a license",
            choices: ["MIT", "Boost Software License 1.0", "Unlicense"]

        },
        {
            type: "input",
            name: "usage",
            message: "Please add usage instructions."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the instructions for installation?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Please enter in any contribution guidelines:"
        },    
    ])
}