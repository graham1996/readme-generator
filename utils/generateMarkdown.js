// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseType = license
  let badge = ''
  if (licenseType === 'MIT') {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Apache') {
    badge = `![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)`
  } else if (licenseType === 'BSD') {
    badge = `![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)`
  } else {
    licenseType = 'None'
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link = ''
  let licenseType = license
  if (licenseType === 'MIT'){
      link = 'https://mit-license.org/'
    } else if (licenseType === 'Apache'){
      link = 'https://www.apache.org/licenses/LICENSE-2.0.html'
    } else if (licenseType === 'BSD'){
      link = 'https://opensource.org/licenses/BSD-3-Clause'
    }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if(license){
    return renderLicenseLink() + renderLicenseBadge()
  } else {
    return ''
  }
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description:
  ${data.description} 

  ## Usage:
  ${data.usage}

  ## Installation:
  ${data.installation}

  ## Testing:
  ${data.tests}

  ## Licenses:
  ${data.license}
 

  ## Contribution:
  ${data.contribution}

  ## Additional Information:
  Github: [${data.github}](https://github.com/${data.github})\n
  If you have any additional questions please contact me via ${data.email}
`;
}
renderLicenseSection(`## Licenses`);
module.exports = generateMarkdown;
// ${this.renderLicenseSection(data.license)} 
// ${renderLicenseBadge()}
