const axios = require('axios')

const Sprite = require('../model/Sprite')

// Renders pages
exports.renderHomePage = (req, res) => {
    axios.get('https://gitconnected.com/v1/portfolio/basedantoni')
        .then((response) => {
            const { picture, label, headline, summary, region } = response.data.basics
            res.render('index', {
                picture: picture,
            })
        })
}
exports.renderSkillsPage = (req, res) => res.render('skills')
exports.renderContactPage = (req, res) => res.render('contact')
exports.renderPortfolioPage = (req, res) => res.render('portfolio')