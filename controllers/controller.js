const axios = require('axios')

// Renders pages
exports.renderHomePage = (req, res) => {
  axios.get('https://gitconnected.com/v1/portfolio/basedantoni')
      .then((response) => {
          const { picture, label, headline, summary, region } = response.data.basics
          const skills = response.data.skills
          console.log(skills)

          //Turn skills into an array
          const skillsArr = Object.values(skills).map( skill => skill.name )

          res.render('index', {
              picture: picture,
              skills: skills,
          })
      })
}