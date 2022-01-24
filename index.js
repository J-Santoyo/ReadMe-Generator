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
            message: "Please add a brief description of your project"
        },
        {
            type: "list",
            name: "license",
            message: "Please pick a license",
            choices: ["MIT", "Boost Software License 1.0", "Unlicense"]

        }, 
    ])
}