// function to generate markdown for README
function generateMarkdown(data) {

    let badge = '';
    let license = '';
    let liveURL = '';

//For License Badge and License Link
switch (data.license) {
    case "MIT":
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        license = '[MIT](https://choosealicense.com/licenses/mit/#)';
        break;
    case "APACHE-2.0":
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        license = '[APACHE-2.0](https://choosealicense.com/licenses/apache-2.0/)';
        break;
    case "GNU General Public License-3.0":
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        license = '[GNU General Public License-3.0](https://choosealicense.com/licenses/gpl-3.0/)';
        break;
    case "BSD-3-Clause":
        badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        license = '[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
        break;
    case "Unlicense":
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        license = '[Unlicense](http://unlicense.org/)';
        break;
    default:
        badge = '';
        license = '';
}

//If website
if(data.liveSite){
    liveURL = `Please click [here](${data.liveSite}) to check out this site!`;
} else {
    liveURL = '';
}


return `
# ${data.title}
***
${badge}

##Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Testing](#testing)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

<br>

## Description
${data.description}

${liveURL}
<br>

## Installation
Please see the following command in order to use this application:<br>
\`\`\`bash
${data.install}
\`\`\`
<br>

## Testing
Please see the following command in order to run tests on this application:<br>
\`\`\`bash
${data.test}
\`\`\`
<br>

## Usage
Please see the following instructions on how to use this application: <br>
${data.usage}
<br>

## Contributing
Please see the following insturctions on how to contribute to this project: <br>
${data.contribution}
<br>

## Questions?
Feel free to check out my github profile [here](https://github.com/${data.username})!
Should you have any questions, you may reach me by e-mail at: <a href="mailto:${data.email}?subject=Hi,%20Christina!">${data.email}</a>!.

## License
${license}
`;

}
  

module.exports = generateMarkdown;
  