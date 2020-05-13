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
exports.renderResumePage = (req, res) => res.render('resume')
exports.renderContactPage = (req, res) => res.render('contact')
exports.renderPortfolioPage = (req, res) => res.render('portfolio')

// Get Pokemon
exports.getPokemon = (req, res) => {
    const pokemon = req.body.pokemon.toLowerCase();
    const sprite = new Sprite(req.body.pokemon.toLowerCase());
    
    sprite.validateUserInput();

    if(sprite.errors.length) {
        res.render('portfolio', {
            error: sprite.errors.toString()
        })
    } else {
        // Axios GET request to PokeAPI for sprite link
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => {
            const { front_default: front, back_default: back } = response.data.sprites;
            res.render('portfolio', {
                front: front,
                back: back
            })
        })
        .catch(error => console.log(error))
    }
}