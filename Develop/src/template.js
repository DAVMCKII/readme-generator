
module.exports = templateData => {
  // destructure page data by section
  const { title, about,  ...body} = templateData;
  return`
# ${templateData.name}
   
  ${templateData.badges}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
   
  
  # Description
  ${templateData.description}
  ## Installation
  ${templateData.installation}
  ## Usage
  ${templateData.usage}
 ## License
 Liscensing provided by ${templateData.liscenses}
  ## Contribution
  ${body.contributing}
  ## Tests
  ${body.test}
 
  ## Questions
  
 Click here to see my github!

 username: [Github](https://github.com/${body.username})
  
 Email: ${body.email}
`;
};

