// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'nolicense') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
  } else {
    return ' ';
  }
}

// Function that returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectname}

  ${renderLicenseBadge(answers.license)}

  ## Table-of-Contents

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)
  ${renderLicenseTOC(answers.license)}
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
\`\`\`
  d
\`\`\`
  
  ## Usage
  
  ## License
  
  ${renderLicenseSection(answers.license)}
  
  ## Contributing
  
  ## Tests
  
  To run tests, run the following command:
  
\`\`\`
  npm test
\`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly here 
  [Email: ${answers.email}](mailto:${answers.email}). You can find more of my work at [cmarielorber](https://github.com/cmarielorber/).
`;
}

module.exports = generateMarkdown;
