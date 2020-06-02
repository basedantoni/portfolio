const axios = require('axios')

// Renders pages
exports.renderHomePage = (req, res) => {
  axios.get('https://gitconnected.com/v1/portfolio/basedantoni')
        .then((response) => {
          const { picture, label, headline, summary, region } = response.data.basics
          const skills = response.data.skills
					const projects = response.data.projects
					
					// How to access thumbnail image for projects
					console.log(projects[0].images[0].resolutions.thumbnail.url)

          res.render('index', {
              picture: picture,
              skills: skills,
							projects: projects,
          })
      })
}