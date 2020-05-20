const axios = require('axios')

// Renders pages
exports.renderHomePage = (req, res) => {
  axios.get('https://gitconnected.com/v1/portfolio/basedantoni')
      .then((response) => {
          const { picture, label, headline, summary, region } = response.data.basics
          const skills = response.data.skills
          const projects = response.data.projects
          console.log(projects)

          res.render('index', {
              picture: picture,
              skills: skills,
              projects: projects,
          })
      })
}