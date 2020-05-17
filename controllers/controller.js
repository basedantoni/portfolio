const axios = require('axios')

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