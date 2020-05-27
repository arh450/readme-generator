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
${data.license}

## Tests
${data.test}

## Contributors
${data.contributor}

## Contact
* Github Username: ${data.username}
* Email: ${data.email}


`;
}

module.exports = generateMarkdown;
