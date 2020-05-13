const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller')

router.get('/', controller.renderHomePage);
router.get('/about', controller.renderAboutPage);
router.get('/resume', controller.renderResumePage);
router.get('/skills', controller.renderSkillsPage);
router.get('/contact', controller.renderContactPage);
router.get('/portfolio', controller.renderPortfolioPage);

// Get Pikachu
router.post('/portfolio', controller.getPokemon);

module.exports = router;