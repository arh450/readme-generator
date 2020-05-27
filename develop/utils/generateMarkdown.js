function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contibutors}

## Contact
${data.username}
${data.email}


`;
}

module.exports = generateMarkdown;
