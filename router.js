const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller')

router.get('/', controller.renderHomePage);
router.get('/skills', controller.renderSkillsPage);
router.get('/contact', controller.renderContactPage);
router.get('/portfolio', controller.renderPortfolioPage);

module.exports = router;