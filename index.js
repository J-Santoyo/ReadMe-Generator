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
        {
            type: "input",
            name: "test",
            message: "Please enter testing instructions:"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }, 
    ])
}

const dataHTML = ({ title, description, license, usage, installation, contributions, test, github, email }) =>
 `# ${title}
 #### ${username}

 ## Description
 ${description}

 <br/>

 ${licenseBadge(license)}
 ## Table of Contents
 1. [ Description. ](#description)
 2. [ Installation. ](#installation)
 3. [ Usage. ](#usage)
 4. [ License. ](#license)
 5. [ Contributions. ](#contributions)
 6. [ Test. ](#test)
 7. [ Questions. ](#questions)
 ## Installation
 ${installation}
 ## Usage
 ${usage}
 ## License
 ${license}
 ## Test
 ${test}

 ## Questions?
 Would you like to see more of my work? [Github Link](https://github.com${github})
 <br/>
 If you would like to know more please contact me at ${email}
 ## Resources
 ${contributions}
 `;