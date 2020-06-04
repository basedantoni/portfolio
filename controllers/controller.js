const axios = require('axios')
const assignUrl = require('../public/utils/assignUrl')

// Renders pages
exports.renderHomePage = (req, res) => {
  axios.get('https://gitconnected.com/v1/portfolio/basedantoni')
        .then((response) => {
          const { picture, label, headline, region } = response.data.basics
          const skills = response.data.skills
          const projects = response.data.projects

          console.log(projects.githubUrl)

          // Assign url property to all projects
          projects.map(assignUrl.assignUrl)

          res.render('index', {
              picture: picture,
              skills: skills,
              projects: projects,
          })
      })
}