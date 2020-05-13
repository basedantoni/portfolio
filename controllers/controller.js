const axios = require('axios')

const Sprite = require('../model/Sprite')

// Renders pages
exports.renderHomePage = (req, res) => res.render('index')
exports.renderAboutPage = (req, res) => res.render('about')
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