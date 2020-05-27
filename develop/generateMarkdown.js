function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Contributors](#contributors)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)


## Tests
${data.test}

## Contributors
* **${data.contributor}**

## Contact
* *Github* - [${data.username}](https://github.com/${data.username})
* *Email* - ${data.email}


`;
}

module.exports = generateMarkdown;
