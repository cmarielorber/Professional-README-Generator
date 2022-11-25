// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "githubname",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your username.');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectname",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please the title of your project.');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description",
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please explain your project.');
                return false;
            }
        }
    },

    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
        type: "input",
        message: "What command should be run to install dependecencies?",
        name: "dependencies",
        validate: dependencyInput => {
            if (dependencyInput) {
                return true;
            } else {
                console.log('Please state the command to be used to run the dependencies.');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please state the command to be used to run tests.');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repo",
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please tell your user about the repo.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please tell your user about the repo.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject (err) ;
                return
            }
            resolve ({yes: true,
            message: "Your file is created!"
        });
        });
    });
 };

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions).then((answers) => {
        markdown(answers)
    })
};

// Function call to initialize app
init()
.then(answers => {
    console.log(answers);
    return generateMarkdown(answers);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then (writeFileResponse => {
    console.log (writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

