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
function generateMarkdown(data) {
  return `## ${data.projectname}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#dependencies)
  * [Usage](#repo) 
  * [License](#license) 
  ${renderLicenseTOC(data.license)} 
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description](#table-of-contents)

  ${data.description}
  
  ## [Installation](#table-of-contents)
  
  To install necessary dependencies, run the following command:
  
\`\`\`
  d
\`\`\`
  
  ## [Usage](#table-of-contents)

  ${data.repo}
  
  ${renderLicenseSection(data.license)}
  
  ## [Contributing](#table-of-contents)

  ${data.contributing}
  
  ## [Tests](#table-of-contents)
  
  To run tests, run the following command:
  
\`\`\`
  npm test
\`\`\`
  
  ## [Questions](#table-of-contents)
  
  If you have any questions about the repo, open an issue or contact me directly here 
  [Email: ${data.email}](mailto:${data.email}). You can find more of my work at [GitHub](https://github.com${data.githubname}).
`;
}

module.exports = generateMarkdown;
